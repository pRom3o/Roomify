import { ref } from 'vue';
import { showToast } from './toastServices';
import { supabase } from '@/lib/supabaseClient';
// import { inject } from 'vue';

export const isCartOpen = ref(false);
export const userCart = ref([]);

// const auth = inject('auth');
// const user = auth.user;

export const openCartModal = () => {
    isCartOpen.value = !isCartOpen.value;
    console.log(isCartOpen.value);
};
export const quantity = ref(0);

export const adding = ref(false);

export const addToCart = async (name, price, img, userId, email) => {
    adding.value = true;
    const { error } = await supabase
        .from('carts')
        .insert([
            {
                email: email,
                item_name: name,
                item_price: price,
                img,
                user_id: userId,
            },
        ])
        .select();

    if (error) {
        throw error;
    } else {
        showToast('added', 'success');
    }
};

export const getUserCart = async (userId) => {
    const { data, error } = await supabase.from('carts').select().eq('user_id', userId);

    if (error) {
        throw error;
    } else {
        userCart.value = data;
        console.log('fetched', userCart.value);
    }
};

export const deleteItem = async (id) => {
    const error = await supabase.from('carts').delete().eq('id', id).select();

    if (error) throw error;

    console.log('deleted');
};
