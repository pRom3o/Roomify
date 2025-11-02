<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { deleteUserCart, userCart } from '../services/cartServices';
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
            paymentStatus.value = 'Payment successful';
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
    <div class="center h-screen w-full primary-bg p-5 gap-3">
        <div class="col-center h-full w-[90%] md:w-1/2 bg-[#edf3ff]">
            <img
                src="/Images/payment-successful.gif"
                alt="Payment success"
                v-if="paymentStatus == 'Payment successful'"
                class="w-full h-[90%]"
            />
            <h1 class>{{ paymentStatus }}</h1>
            <router-link to="/" class="btn-3 hover">Home</router-link>
        </div>
        <div class="col-center h-full md:w-1/2 w-full" v-for="items in userCart" :key="items.id">
            <div class="flex items-center gap-5">
                <img :src="items.img" alt="" class="h-12 w-12 rounded-lg border border-gray-400" />
                <div class="">
                    <p class="flex flex-col text-sm mb-1">
                        {{ items.item_name }}
                        <span class="text-[10px] font-light">x{{ items.quantity }}</span>
                    </p>
                    <p class="text-xs font-light">₦{{ items.item_price.toLocaleString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <span
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#8bb0ff"
                        class="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                        /></svg></span
                > -->
