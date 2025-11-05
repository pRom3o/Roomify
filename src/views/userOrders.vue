<script setup>
import { inject } from 'vue';
import { orders, getOrders } from '../services/orderServices';
import statusPill from '../components/statusPill.vue';
import { onMounted } from 'vue';

const auth = inject('auth');
const user = auth.user;

onMounted(async () => {
    await getOrders(user.value.id);
});
</script>

<template>
    <div class="col-center w-full primary-bg pt-14 space-y-10">
        <div class="h-40 w-full col-center bg-blue-600 text-white">
            <h1 class="text-6xl">My Orders</h1>
            <p>Home ></p>
        </div>
        <div class="flex flex-col w-full min-h-96 p-4">
            <div class="min-h-10 w-full bg-[#fff] border border-gray-200 shadow rounded-xl">
                <h2 class="text-xl p-4">Your Order History</h2>
                <hr />
                <div class="flex items-center justify-between w-full p-3 gap-3">
                    <p class="w-62 text-start text-xs lg:text-sm">Orders</p>
                    <p class="w-62 text-start text-xs lg:text-sm">Amount</p>
                    <p class="w-62 text-start text-xs lg:text-sm">Status</p>
                    <p class="w-62 text-start text-xs lg:text-sm">Date</p>
                </div>
                <div v-for="order in orders" :key="order.id" class="w-full h-10">
                    <div class="w-full h-full">
                        <hr class="" />
                        <div
                            class="py-2 flex items-center h-full w-full px-3 justify-between gap-3"
                        >
                            <p class="w-62 leading-3 text-start text-[10px] md:text-xs lg:text-sm">
                                {{ order.id }}
                            </p>
                            <p class="w-62 leading-3 text-start text-[10px] md:text-xs lg:text-sm">
                                ₦{{ order.total_amount.toLocaleString() }}
                            </p>

                            <p class="w-62 leading-3 text-start">
                                <statusPill :status="order.status" />
                            </p>

                            <p class="w-62 leading-3 text-start text-[10px] md:text-xs lg:text-sm">
                                {{ order.created_at }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
hr {
    color: #cfcdcd;
}
</style>
