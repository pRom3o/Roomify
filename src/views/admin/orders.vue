<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAdminStore } from '../../store/admin';
import statusPill from '../../components/statusPill.vue';
import deliveryStatus from '../../components/deliveryStatus.vue';

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

const deliveryOptions = ['Pending', 'Shipped', 'Delivered'];

const handleDeliveryChange = async (orderId, newStatus) => {
    await adminStore.updateDeliveryStatus(orderId, newStatus);
    console.log('a', adminStore.allOrders);
};
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col w-full p-4" v-if="adminStore.allOrders.length > 0">
            <div class="min-h-10 w-full bg-white border border-gray-200 shadow">
                <div class="w-full p-3 border-b border-gray-200">
                    <p class="text-center text-sm">Orders History</p>
                </div>

                <div
                    v-for="order in adminStore.allOrders"
                    :key="order.id"
                    class="mb-2 bg-white shadow-sm w-full overflow-hidden"
                >
                    <!-- Mobile accordion -->
                    <div
                        class="sm:hidden flex justify-between items-center px-3 py-2 cursor-pointer"
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
                        <div v-if="order.showDetails" class="px-4 pb-3 text-xs sm:hidden space-y-1">
                            <p class="flex items-center justify-between">
                                <span class="text-[14px]">Amount:</span>
                                ₦{{ order.total_amount.toLocaleString() }}
                            </p>
                            <p class="flex items-center justify-between gap-1">
                                <span class="text-[14px]">Payment Status:</span>
                                <statusPill :status="capitalizeFirstLetter(order.status)" />
                            </p>
                            <p class="flex items-center justify-between gap-1">
                                <span class="text-[14px]">Delivery Status:</span>
                                <deliveryStatus
                                    :model-value="order.delivery_status"
                                    :options="deliveryOptions"
                                    :loading="order.updating"
                                    @update:modelValue="handleDeliveryChange(order.id, $event)"
                                />
                            </p>
                        </div>
                    </transition>

                    <!-- Desktop row -->
                    <div
                        class="hidden sm:grid grid-cols-5 items-center py-2 px-3 text-xs lg:text-sm gap-2"
                    >
                        <p class="truncate text-center">{{ order.id }}</p>
                        <p class="truncate text-center">
                            ₦{{ order.total_amount.toLocaleString() }}
                        </p>
                        <p class="text-center">
                            <statusPill :status="capitalizeFirstLetter(order.status)" />
                        </p>
                        <p class="text-center">
                            <deliveryStatus
                                :model-value="order.delivery_status"
                                :options="deliveryOptions"
                                :loading="order.updating"
                                @update:modelValue="handleDeliveryChange(order.id, $event)"
                            />
                        </p>
                        <p class="truncate text-center">{{ order.created_at }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
