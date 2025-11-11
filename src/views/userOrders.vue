<script setup>
import { inject } from 'vue';
import { orders, getOrders } from '../services/orderServices';
import statusPill from '../components/statusPill.vue';
import { onMounted } from 'vue';

const auth = inject('auth');
const user = auth.user;
const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};

onMounted(async () => {
    await getOrders(user.value.id);
});
</script>

<template>
    <div class="col-center w-full primary-bg pt-12 space-y-10">
        <div
            class="center relative h-40 w-full col-center text-white bg-cover"
            style="background-image: url('/ImagesWebp/bg-img.webp')"
        >
            <div class="inset-0 absolute bg-black/30 z-10"></div>
            <div class="col-center z-50">
                <h1 class="text-6xl">My Orders</h1>
                <!-- <p>Home ></p> -->
            </div>
        </div>
        <div class="flex flex-col w-full min-h-[640px] p-4" v-if="orders.length > 0">
            <div class="min-h-10 w-full bg-white border border-gray-200 shadow rounded-xl">
                <h2 class="text-xl p-4">Your Order History</h2>
                <hr />
                <div class="flex items-center justify-between w-full p-3">
                    <p class="w-52 text-center text-xs lg:text-sm">Orders</p>
                    <p class="w-52 text-center text-xs lg:text-sm">Amount</p>
                    <p class="w-52 text-center text-xs lg:text-sm">Status</p>
                    <p class="w-52 text-center text-xs lg:text-sm">Date</p>
                </div>
                <div v-for="order in orders" :key="order.id" class="w-full h-12">
                    <div class="w-full h-full">
                        <hr class="" />
                        <div
                            class="py-2 flex items-center h-full w-full px-3 justify-between gap-3"
                        >
                            <p class="w-52 leading-3 text-center text-[10px] md:text-xs lg:text-sm">
                                {{ order.id }}
                            </p>
                            <p class="w-52 leading-3 text-center text-[10px] md:text-xs lg:text-sm">
                                ₦{{ order.total_amount.toLocaleString() }}
                            </p>

                            <p class="w-52 leading-3 text-center">
                                <statusPill :status="capitalizeFirstLetter(order.status)" />
                            </p>

                            <p class="w-52 leading-3 text-center text-[10px] md:text-xs lg:text-sm">
                                {{ order.created_at }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full col-center min-h-[379px]" v-else>
            <p>No orders yet — check out our store to place your first order.</p>
            <button class="center border-b gap-1 text-neutral-700 hover hover:text-neutral-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentcolor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                </svg>
                <RouterLink to="/shop">Shop</RouterLink>
            </button>
        </div>
    </div>
</template>

<style scoped>
hr {
    color: #cfcdcd;
}
</style>
