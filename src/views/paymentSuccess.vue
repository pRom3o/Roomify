<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { deleteUserCart } from '../services/cartServices';
import { inject } from 'vue';

const paymentStatus = ref('Verifying...');
const route = useRoute();
const reference = route.query.reference;

const auth = inject('auth');
const user = auth.user;

onMounted(async () => {
    try {
        const response = await fetch('/api/paystack-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference }),
        });

        if (!response.ok) {
            const err = response.text();
            console.log('verification failed', err);
            return;
        }

        const data = await response.json();
        console.log('PAYSTACK VERIFY DATA:', data);
        if (data.status === 'success') {
            paymentStatus.value = 'Payment successful!';
            deleteUserCart(user.value.id);
            await supabase.from('orders').update({ status: 'paid' }).eq('reference', reference);
        } else {
            paymentStatus.value = 'Payment failed';
            console.log('verification data failed', data);
        }
    } catch (error) {
        console.log('payment success error:', error);
        paymentStatus.value = 'verification error';
    } finally {
        console.log(paymentStatus.value);
    }
});
</script>

<template>
    <div class="center h-screen w-full">
        <img src="/Images/payment-successful.jpg" alt="payment status" />
        <h1>{{ paymentStatus }}</h1>
        <router-link to="/">home</router-link>
    </div>
</template>
