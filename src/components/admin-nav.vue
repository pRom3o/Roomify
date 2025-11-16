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
        class="min-h-full bg-white transition-all border-r border-gray-200 duration-300 shrink-0 sm:flex w-10% flex-col hidden"
    >
        <!-- Logo -->
        <div class="h-10 w-full center border-b border-gray-200">
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
            <div class="flex items-center gap-3 py-3 px-4 w-full">
                <homeIcon class="shrink-0" />
                <RouterLink to="/admin" class="transition-opacity duration-300">
                    Dashboard
                </RouterLink>
            </div>

            <div class="flex items-center gap-3 py-3 px-4 w-full">
                <ordersIcon class="shrink-0" />
                <RouterLink to="/admin/Orders" class="transition-opacity duration-300">
                    Orders
                </RouterLink>
            </div>

            <div class="flex items-center gap-3 py-3 px-4 w-full">
                <productsIcon class="shrink-0" />
                <RouterLink to="/admin/products" class="transition-opacity duration-300">
                    Products
                </RouterLink>
            </div>

            <div class="flex items-center gap-3 py-3 px-4 w-full">
                <userIcon class="shrink-0" />
                <RouterLink to="/admin/users" class="transition-opacity duration-300">
                    Users
                </RouterLink>
            </div>

            <div class="flex items-center gap-3 py-3 px-4 w-full">
                <messageIcon class="shrink-0" />
                <RouterLink to="/admin/messages" class="transition-opacity duration-300">
                    Messages
                </RouterLink>
            </div>
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
                <div class="flex items-center gap-3 py-3 px-4 w-full">
                    <homeIcon class="shrink-0" />
                    <RouterLink to="/admin" class="transition-opacity duration-300">
                        Dashboard
                    </RouterLink>
                </div>

                <div class="flex items-center gap-3 py-3 px-4 w-full">
                    <ordersIcon class="shrink-0" />
                    <RouterLink to="/admin/Orders" class="transition-opacity duration-300">
                        Orders
                    </RouterLink>
                </div>

                <div class="flex items-center gap-3 py-3 px-4 w-full">
                    <productsIcon class="shrink-0" />
                    <RouterLink to="/admin/products" class="transition-opacity duration-300">
                        Products
                    </RouterLink>
                </div>

                <div class="flex items-center gap-3 py-3 px-4 w-full">
                    <userIcon class="shrink-0" />
                    <RouterLink to="/admin/users" class="transition-opacity duration-300">
                        Users
                    </RouterLink>
                </div>

                <div class="flex items-center gap-3 py-3 px-4 w-full">
                    <messageIcon class="shrink-0" />
                    <RouterLink to="/admin/messages" class="transition-opacity duration-300">
                        Messages
                    </RouterLink>
                </div>
            </div>
        </div>
    </aside>
</template>
