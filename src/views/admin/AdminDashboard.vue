<script setup>
import { useAdminStore } from '../../store/admin';
import statusPill from '../../components/statusPill.vue';
import adminGrids from '../../components/adminGrids.vue';

const adminStore = useAdminStore();

const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const toggle = (order) => {
    order.showDetails = !order.showDetails;
};
</script>

<template>
    <div class="w-full min-h-screen flex flex-col flex-1">
        <div class="w-full px-3 pt-2">
            <h1 class="text-sm">Hi, Celine</h1>
            <p class="text-[12px] text-[#4c4c4c]">Welcome back to celine's treats dashboard.</p>
        </div>

        <div class="w-full center font-sans">
            <adminGrids />
        </div>

        <div class="w-full min-h-10 px-4">
            <div class="flex flex-col w-full" v-if="adminStore.allOrders.length > 0">
                <div class="min-h-10 w-full bg-white border border-gray-200 shadow">
                    <div class="w-full p-3">
                        <p class="text-center text-sm">Orders History</p>
                    </div>

                    <hr class="text-[#707070]" />

                    <div
                        v-for="order in adminStore.allOrders"
                        :key="order.id"
                        class="mb-2 bg-white shadow-sm w-full"
                    >
                        <!-- Mobile accordion -->
                        <div
                            class="sm:hidden flex justify-between items-center px-3 py-2 cursor-pointer md:cursor-default"
                            @click="toggle(order)"
                        >
                            <p class="text-sm font-medium truncate">{{ order.id }}</p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-4 h-4 transition-transform duration-200 md:hidden"
                                :class="{ 'rotate-180': order.showDetails }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>

                        <transition name="slide">
                            <div
                                v-if="order.showDetails"
                                class="px-4 pb-3 text-xs sm:hidden space-y-1"
                            >
                                <p>
                                    <span class="text-[14px]">Amount:</span>
                                    ₦{{ order.total_amount.toLocaleString() }}
                                </p>
                                <p class="flex items-center gap-1">
                                    <span class="text-[14px]">Status:</span>
                                    <statusPill :status="capitalizeFirstLetter(order.status)" />
                                </p>
                                <p><span class="text-[14px]">Date: </span>{{ order.created_at }}</p>
                            </div>
                        </transition>

                        <!-- Desktop row -->
                        <div
                            class="hidden sm:grid grid-cols-4 items-center py-2 px-3 text-xs lg:text-sm gap-2"
                        >
                            <p class="text-center truncate">{{ order.id }}</p>
                            <p class="text-center truncate">
                                ₦{{ order.total_amount.toLocaleString() }}
                            </p>
                            <p class="text-center">
                                <statusPill :status="capitalizeFirstLetter(order.status)" />
                            </p>
                            <p class="text-center truncate">{{ order.created_at }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
}
h2 {
    color: #4c4c4c;
}
</style>
