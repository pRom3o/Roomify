import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

export const isLoading = ref(false);
export const products = ref({});

export const getProducts = async (category) => {
    isLoading.value = true;
    try {
        const { data, error } = await supabase.from('products').select().eq('category', category);

        // Add a 3-second delay before updating
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (error) {
            throw error;
        } else {
            products.value = data;
            console.log('pro', products.value);
        }
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
