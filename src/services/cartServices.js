import { ref } from 'vue';
// import { showToast } from './toastServices';
// import { supabase } from '@/lib/supabaseClient';

export const isCartOpen = ref(false);
// export const userCart = ref([]);

export const openCartModal = () => {
    isCartOpen.value = !isCartOpen.value;
    console.log(isCartOpen.value);
};
// export const quantity = ref(0);

// export const adding = ref(false);

// export const addToCart = async (name, price, img, userId, email, qty = 1) => {
//     try {
//         // Check if this user already has this item in cart
//         const { data: existing, error: selectError } = await supabase
//             .from('carts')
//             .select('*')
//             .eq('user_id', userId)
//             .eq('item_name', name)
//             .single();

//         if (selectError && selectError.code !== 'PGRST116') {
//             throw selectError;
//         }

//         if (existing && existing.id) {
//             // 2) If it exists, update quantity (increment by qty)
//             const newQuantity = (existing.quantity || 0) + qty;
//             const { error: updateError } = await supabase
//                 .from('carts')
//                 .update({ quantity: newQuantity })
//                 .eq('id', existing.id);

//             showToast('Cart updated', 'success');
//             if (updateError) throw updateError;
//         } else {
//             // 3) If it doesn't exist, insert new row with quantity = qty
//             const { error: insertError } = await supabase
//                 .from('carts')
//                 .insert([
//                     {
//                         email,
//                         item_name: name,
//                         item_price: price,
//                         img,
//                         user_id: userId,
//                         quantity: qty,
//                     },
//                 ])
//                 .select();

//             if (insertError) throw insertError;

//             showToast('Added to cart', 'success');
//         }
//     } catch (err) {
//         console.error('addToCart error:', err);
//         showToast(err.message || 'Could not add to cart', 'failed');
//         throw err;
//     }
// };

// export const getUserCart = async (userId) => {
//     const { data, error } = await supabase.from('carts').select().eq('user_id', userId);

//     if (error) {
//         throw error;
//     } else {
//         userCart.value = data;
//         console.log('fetched', userCart.value);
//     }
// };

// export const deleteItem = async (id) => {
//     const { error } = await supabase.from('carts').delete().eq('id', id);

//     if (error) throw error;
// };

// export const deleteUserCart = async (userId) => {
//     try {
//         const { error } = await supabase.from('carts').delete().eq('user_id', userId);

//         if (error) {
//             // throw error;
//             console.log('error deleting', error);
//         } else {
//             getUserCart(userId);
//             console.log(`cart deleted for ${userId}`);
//         }
//     } catch (error) {
//         console.log('Unexpected error:', error);
//     }
// };

// export const updateQuantity = async (id, newQuantity) => {
//     if (newQuantity < 0) return;
//     const { error: error } = await supabase
//         .from('carts')
//         .update({ quantity: newQuantity })
//         .eq('id', id);

//     if (error) {
//         console.log('error', error);
//         throw error;
//     }
// };

// export const total = computed(() =>
//     userCart.value.reduce((sum, item) => sum + item.item_price * item.quantity, 0),
// );
// export const totalQuantity = computed(() =>
//     userCart.value.reduce((sum, item) => sum + item.quantity, 0),
// );
