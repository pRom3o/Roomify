import { supabase } from '@/lib/supabaseClient';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', () => {
    const profiles = ref([]);
    const fetchProfiles = async () => {
        const { data, error } = await supabase.from('profiles').select('*');

        if (error) {
            throw error;
        } else {
            profiles.value = data;
            console.log('profiles: ', profiles.value);
        }
    };

    const allOrders = ref([]);
    const fetchOrders = async () => {
        const { data, error } = await supabase.from('orders').select('*');

        if (data) {
            allOrders.value = data;
            console.log('orders: ', allOrders.value);
            allOrders.value = data.map((o) => ({
                ...o,
                showDetails: false,
                updating: false,
            }));
        } else {
            if (error) throw error;
        }
    };

    const totalRevenue = computed(() =>
        allOrders.value.reduce((sum, item) => sum + item.total_amount, 0).toLocaleString(),
    );

    const products = ref([]);
    const fetchProducts = async () => {
        const { data, error } = await supabase.from('products').select('*');

        if (data) {
            products.value = data;
        } else {
            if (error) throw error;
        }
    };

    const pending = computed(() => allOrders.value.filter((o) => o.status === 'pending'));
    const completed = computed(() => allOrders.value.filter((o) => o.status === 'paid'));

    const updateDeliveryStatus = async (orderId, newStatus) => {
        const order = allOrders.value.find((o) => o.id === orderId);
        if (order) order.updating = true;

        const { error } = await supabase
            .from('orders')
            .update({ delivery_status: newStatus })
            .eq('id', orderId);

        if (error) {
            console.error('Delivery update failed:', error);
            if (order) order.updating = false;
            return false;
        }

        await fetchOrders();
        return true;
    };

    return {
        updateDeliveryStatus,
        profiles,
        fetchProfiles,
        allOrders,
        fetchOrders,
        totalRevenue,
        fetchProducts,
        products,
        pending,
        completed,
    };
});
