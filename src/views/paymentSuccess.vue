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
            await supabase
                .from('orders')
                .update({ status: 'paid', updated_at: new Date().toISOString() })
                .eq('reference', reference);
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
            <!-- <div class="bg-[#f2f2f2] rounded-3xl border border-gray-100 h-[90%] w-full p-1">
                <img
                    src="/Images/payment-successful.gif"
                    alt="Payment success"
                    v-if="paymentStatus == 'Payment successful'"
                    class="w-full h-full rounded-3xl"
                />
            </div> -->
            <div class="h-26 w-26 bg-green-100 rounded-full center">
                <span
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                    >
                        <g fill="#4ADE80">
                            <path
                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.535 6.381l-4.95 4.95l-2.12-2.121a1 1 0 0 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586a1 1 0 0 0-1.415-1.415"
                            />
                        </g></svg
                ></span>
            </div>
            <div class="mt-3 col-center">
                <h1>Thanks for your purchase</h1>
                <h2>{{ paymentStatus }}</h2>
                <router-link to="/orders" class="btn-3 hover text-sm">View orders</router-link>
            </div>
        </div>
    </div>
</template>
