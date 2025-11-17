<script setup>
import { useAdminStore } from '../store/admin';
import Icon1 from '../../public/icons/IconA.vue';
import Icon2 from '../../public/icons/Icon2.vue';
import Icon3 from '../../public/icons/Icon3.vue';
import Icon4 from '../../public/icons/Icon4.vue';
import Icon5 from '../../public/icons/Icon5.vue';
import Icon6 from '../../public/icons/Icon6.vue';

const adminStore = useAdminStore();

const features = [
    {
        icon: Icon1,
        title: 'Total revenue',
        text: `₦${adminStore.totalRevenue}`,
    },
    {
        icon: Icon2,
        title: 'Total users',
        text: `${adminStore.profiles.length} Users`,
    },
    {
        icon: Icon3,
        title: 'Total products',
        text: `${adminStore.products.length} Products`,
    },
    {
        icon: Icon4,
        title: 'Total orders',
        text: `${adminStore.allOrders.length} Orders`,
    },
    {
        icon: Icon5,
        title: 'Pending orders',
        text: `${adminStore.pending.length} Orders`,
    },
    {
        icon: Icon6,
        title: 'Completed orders',
        text: `${adminStore.completed.length} Orders`,
    },
];
</script>

<template>
    <div class="grid lg:grid-cols-3 w-full grid-cols-1 sm:grid-cols-2 gap-4">
        <div
            class="min-h-26 w-full shadow-sm flex flex-col p-3 justify-between rounded-xl bg-white"
            v-for="(items, index) in features"
            :key="index"
        >
            <div class="h-full flex justify-between">
                <h2 class="text-2xl text-gray-500">{{ items.title }}</h2>
                <component
                    :is="items.icon"
                    class="p-1 h-10 center w-10 rounded-full bg-linear-to-br from-blue-50 to-blue-200"
                ></component>
            </div>
            <p class="text-2xl font-medium text-neutral-700">{{ items.text }}</p>
        </div>
    </div>
</template>
