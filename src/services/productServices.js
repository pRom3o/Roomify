import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

export const loadingScreen = ref(false);
export const products = ref({});

export const getProducts = async (category) => {
    loadingScreen.value = true;
    try {
        const { data, error } = await supabase.from('products').select().eq('category', category);
        if (!error) {
            products.value = data;
            loadingScreen.value = false;
        } else {
            console.log('error: ', error.message);
        }
    } catch (error) {
        console.log(error);
    } finally {
        loadingScreen.value = false;
    }
};
