<script setup>
import homeIcon from '../../public/icons/homeIcon.vue';
import ordersIcon from '../../public/icons/ordersIcon.vue';
import productsIcon from '../../public/icons/productsIcon.vue';
import userIcon from '../../public/icons/userIcon.vue';
import messageIcon from '../../public/icons/messageIcon.vue';

import { useRoute } from 'vue-router';

import { openSideNav, sideNav } from '@/functions/functions';
import { watch } from 'vue';

const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        sideNav.value = false;
    },
);
</script>

<template>
    <aside
        class="min-h-full bg-white transition-all border-r border-gray-200 duration-300 shrink-0 sm:flex min-w-[12%] flex-col hidden"
    >
        <!-- Logo -->
        <div class="h-14 w-full center">
            <div class="">
                <h2 class="font-medium">
                    <RouterLink to="/">
                        <img
                            src="/Images/celines-treats-logo.svg"
                            alt="Celine's Treats"
                            class="h-8"
                        />
                    </RouterLink>
                </h2>
            </div>
        </div>

        <!-- Links -->
        <div class="w-full p-2">
            <RouterLink
                to="/admin"
                class="flex items-center gap-1 py-3 px-3 w-full transition-opacity duration-300"
            >
                <homeIcon class="shrink-0" />
                Dashboard
            </RouterLink>

            <RouterLink
                to="/admin/Orders"
                class="flex items-center gap-1 py-3 px-3 w-full transition-opacity duration-300"
            >
                <ordersIcon class="shrink-0" />
                Orders
            </RouterLink>

            <RouterLink
                to="/admin/products"
                class="flex items-center gap-1 py-3 px-3 w-full transition-opacity duration-300"
            >
                <productsIcon class="shrink-0" />
                Products
            </RouterLink>

            <RouterLink
                to="/admin/users"
                class="flex items-center gap-1 py-3 px-3 w-full transition-opacity duration-300"
            >
                <userIcon class="shrink-0" />
                Users
            </RouterLink>
            <RouterLink
                to="/admin/messages"
                class="flex items-center gap-1 py-3 px-3 w-full transition-opacity duration-300"
            >
                <messageIcon class="shrink-0" />
                Messages
            </RouterLink>
        </div>
    </aside>
    <aside
        class="min-h-full fixed inset-0 backdrop-blur-xs transition-all duration-300 sm:hidden"
        @click.self="openSideNav"
        :class="sideNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
        <div
            class="h-full bg-white transition-all duration-300 overflow-hidden"
            :class="sideNav ? 'w-40' : 'w-0'"
        >
            <div class="h-[6%] w-full center border-b border-gray-200">
                <div class="">
                    <h2 class="font-medium">
                        <RouterLink to="/">
                            <img
                                src="/Images/celines-treats-logo.svg"
                                alt="Celine's Treats"
                                class="h-8"
                            />
                        </RouterLink>
                    </h2>
                </div>
            </div>

            <!-- Links -->
            <div class="w-full">
                <RouterLink
                    to="/admin"
                    class="flex items-center gap-1 py-3 px-4 w-full transition-opacity duration-300"
                >
                    <homeIcon class="shrink-0" />
                    Dashboard
                </RouterLink>

                <RouterLink
                    to="/admin/Orders"
                    class="flex items-center gap-1 py-3 px-4 w-full transition-opacity duration-300"
                >
                    <ordersIcon class="shrink-0" />
                    Orders
                </RouterLink>

                <RouterLink
                    to="/admin/products"
                    class="flex items-center gap-1 py-3 px-4 w-full transition-opacity duration-300"
                >
                    <productsIcon class="shrink-0" />
                    Products
                </RouterLink>

                <RouterLink
                    to="/admin/users"
                    class="flex items-center gap-1 py-3 px-4 w-full transition-opacity duration-300"
                >
                    <userIcon class="shrink-0" />
                    Users
                </RouterLink>

                <RouterLink
                    to="/admin/messages"
                    class="flex items-center gap-1 py-3 px-4 w-full transition-opacity duration-300"
                >
                    <messageIcon class="shrink-0" />
                    Messages
                </RouterLink>
            </div>
        </div>
    </aside>
</template>
