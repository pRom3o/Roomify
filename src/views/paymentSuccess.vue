<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const paymentStatus = ref('Verifying...');
const route = useRoute();
const reference = route.query.reference;

onMounted(async () => {
    try {
        const response = await fetch('/api/paystack-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference }),
        });

        const data = await response.json();
        console.log('PAYSTACK VERIFY DATA:', data);
        if (data.data.status === 'success') {
            paymentStatus.value = 'Payment successful!';

            await supabase.from('orders').update({ status: 'paid' }).eq('reference', reference);
        } else {
            paymentStatus.value = 'Payment failed';
        }
    } catch (error) {
        console.log(error);
        paymentStatus.value = 'verification error';
    } finally {
        console.log(paymentStatus.value);
    }
});
</script>

<template>
    <div class="center h-screen w-full">
        <h1>{{ paymentStatus }}</h1>
        <router-link to="/">home</router-link>
    </div>
</template>
