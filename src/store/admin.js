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

    return {
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
