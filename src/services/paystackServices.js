import { supabase } from '@/lib/supabaseClient';

export const initiatePayment = async (user_id, email, total_amount, items, status = 'pending') => {
    try {
        // Generate unique reference
        const reference = `REF-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

        // Insert order into Supabase
        const { data, error } = await supabase
            .from('orders')
            .insert([
                {
                    user_id,
                    email,
                    reference,
                    total_amount,
                    items,
                    status,
                },
            ])
            .select();

        if (error) {
            throw error;
        } else {
            console.log('inserted:', data);
        }
        return data;

        // Return the reference for use in Paystack checkout
    } catch (err) {
        console.error('initiatePayment failed:', err);
    }
};

// paystackServices.js
// paystackServices.js
export const payWithPaystack = async (email, amount, reference) => {
    try {
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`, // secret key
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                amount: amount * 100, // kobo
                reference,
                callback_url: 'http://localhost:5174/payment-success',
            }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message);

        // Redirect user to Paystack checkout page
        window.location.href = data.data.authorization_url;
    } catch (err) {
        console.error('Payment initialization failed:', err.message);
    }
};
