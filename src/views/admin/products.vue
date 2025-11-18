<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAdminStore } from '../../store/admin';

const adminStore = useAdminStore();
</script>
<template>
    <div class="center min-h-screen w-full p-4">
        <div class="w-full h-full">
            <div class="grid grid-cols-4 w-full gap-4">
                <div
                    class="flex flex-col bg-white rounded-b-xl shadow"
                    v-for="product in adminStore.products"
                    :key="product.id"
                >
                    <img :src="product.image_url" alt="" class="w-full h-44" />
                    <div class="p-2 w-full">
                        <h1>{{ product.name }}</h1>
                        <p>₦{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
