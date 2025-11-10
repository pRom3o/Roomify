import { supabase } from '../lib/supabaseClient';
import { ref } from 'vue';

export const orders = ref([]);

export const getOrders = async (user_id) => {
    try {
        const { data, error } = await supabase.from('orders').select('*').eq('user_id', user_id);

        if (data) {
            orders.value = data;
        }
        if (error) throw error;
    } catch (err) {
        console.error(err);
    }
};
