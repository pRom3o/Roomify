// src/stores/admin.js
import { supabase } from '@/lib/supabaseClient';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', () => {
    // state
    const profiles = ref([]);
    const products = ref([]);
    const allOrders = ref([]);

    // loading / error state
    const loadingProfiles = ref(false);
    const loadingProducts = ref(false);
    const loadingOrders = ref(false);
    const error = ref(null);

    // --- helpers ---
    // const normalizeRows = (data) => (Array.isArray(data) ? data : Object.values(data || {}));

    // --- fetchers ---
    const fetchProfiles = async () => {
        loadingProfiles.value = true;
        error.value = null;
        try {
            const { data, error: e } = await supabase.from('profiles').select('*');
            if (e) throw e;
            profiles.value = data;
            console.log(profiles.value);
            return profiles.value;
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            loadingProfiles.value = false;
        }
    };

    const fetchProducts = async () => {
        loadingProducts.value = true;
        error.value = null;
        try {
            const { data, error: e } = await supabase.from('products').select('*');
            if (e) throw e;
            products.value = data;
            console.log('p', products.value);
            return products.value;
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            loadingProducts.value = false;
        }
    };

    const fetchOrders = async () => {
        loadingOrders.value = true;
        error.value = null;
        try {
            const { data, error } = await supabase.from('orders').select('*');

            if (error) throw error;

            // const rows = data;

            // attach UI helpers (showDetails and updating)
            allOrders.value = data.map((o) => ({
                ...o,
                showDetails: false,
                updating: false,
            }));

            console.log('b', allOrders.value);
            return allOrders.value;
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            loadingOrders.value = false;
        }
    };
    const fetchPending = async () => {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('delivery_status', 'Pending');

            if (!error) {
                console.log('data p', data);
            }
        } catch (error) {
            console.log('error d', error);
        }
    };

    // --- computed values ---
    const totalRevenue = computed(() => {
        // sum numeric total_amount (guard if it's string)
        const sum = allOrders.value.reduce((acc, item) => acc + Number(item.total_amount), 0);
        return sum.toLocaleString();
    });

    // convenience: fetch everything needed on dashboard load
    const fetchAll = async () => {
        // fetch in parallel, but let each report its own errors
        await Promise.allSettled([fetchProfiles(), fetchProducts(), fetchOrders(), fetchPending()]);
        console.log('revenue', totalRevenue.value);
    };

    const pending = computed(() =>
        allOrders.value.filter((o) => String(o.delivery_status) === 'Shipped'),
    );

    const completed = computed(() =>
        allOrders.value.filter((o) => String(o.delivery_status) === 'Delivered'),
    );

    const ordersCount = computed(() => allOrders.value.length);
    const productsCount = computed(() => products.value.length);
    const profilesCount = computed(() => profiles.value.length);

    // --- UI helpers ---
    const toggleDetails = (order) => {
        // toggle in-place (order is reactive object from array)
        order.showDetails = !order.showDetails;
    };

    // --- update functions (in-place update + minimal refetch) ---
    const updateDeliveryStatus = async (orderId, newStatus) => {
        const order = allOrders.value.find((o) => o.id === orderId);
        if (order) order.updating = true;
        error.value = null;

        try {
            const { error: e } = await supabase
                .from('orders')
                .update({ delivery_status: newStatus })
                .eq('id', orderId);

            if (e) throw e;

            // update locally (avoid full refetch)
            if (order) {
                order.delivery_status = newStatus;
                order.updating = false;
            } else {
                // if not found locally, refresh
                await fetchOrders();
            }

            return true;
        } catch (err) {
            error.value = err;
            if (order) order.updating = false;
            console.error('Delivery update failed:', err);
            return false;
        }
    };

    // optional: remove order locally (if you need)
    const removeOrderLocal = (orderId) => {
        allOrders.value = allOrders.value.filter((o) => o.id !== orderId);
    };

    // return public API
    return {
        // state
        profiles,
        products,
        allOrders,

        // loading / error
        loadingProfiles,
        loadingProducts,
        loadingOrders,
        error,

        // fetchers
        fetchPending,
        fetchProfiles,
        fetchProducts,
        fetchOrders,
        fetchAll,

        // helpers / actions
        toggleDetails,
        updateDeliveryStatus,

        removeOrderLocal,

        // computed
        totalRevenue,
        pending,
        completed,
        ordersCount,
        productsCount,
        profilesCount,
    };
});
