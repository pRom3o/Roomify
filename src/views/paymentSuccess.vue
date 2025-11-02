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
    <div class="center h-screen w-full primary-bg">
        <div class="col-center">
            <h1>{{ paymentStatus }}</h1>
            <button class="underline hover under">
                <p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                        />
                    </svg>
                </p>
                <router-link to="/">Go tohome</router-link>
            </button>
        </div>
    </div>
</template>
