import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';

export const reference = ref('');

export const initiatePayment = async (user_id, email, total_amount, items, status = 'pending') => {
    try {
        // Generate unique reference
        reference.value = `REF-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

        // Insert order into Supabase
        const { data, error } = await supabase
            .from('orders')
            .insert([
                {
                    user_id,
                    email,
                    reference: reference.value,
                    total_amount,
                    items,
                    status,
                },
            ])
            .select()
            .single();
        if (error) {
            throw error;
        } else {
            console.log('inserted:', data.reference);
        }
        return data;

        // Return the reference for use in Paystack checkout
    } catch (err) {
        console.error('initiatePayment failed:', err);
    }
};
