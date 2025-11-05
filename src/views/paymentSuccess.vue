<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { inject } from 'vue';
import { useCartStore } from '../store/cart';

const paymentStatus = ref('Verifying...');
const route = useRoute();
const reference = route.query.reference;
const cartStore = useCartStore();

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
            paymentStatus.value = 'Payment successful';
            cartStore.clearCart(user.value.id);
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
    <div class="center h-screen w-full primary-bg pt-20 pb-10 px-3 gap-3">
        <div class="col-center h-full w-[95%] md:w-1/2">
            <div class="bg-[#f2f2f2] rounded-3xl border border-gray-100 h-[90%] w-full p-1">
                <img
                    src="/Images/payment-successful.gif"
                    alt="Payment success"
                    v-if="paymentStatus == 'Payment successful'"
                    class="w-full h-full rounded-3xl"
                />
            </div>
            <div class="mt-3 col-center">
                <h1 class>{{ paymentStatus }}</h1>
                <router-link to="/" class="btn-3 hover text-sm">Home</router-link>
            </div>
        </div>
    </div>
</template>
