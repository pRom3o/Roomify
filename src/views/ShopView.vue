<script setup>
import { onMounted } from 'vue';
import { fetchProducts } from '../services/productServices';

onMounted(async () => {
    await fetchProducts();
});
</script>

<template>
    <div class="w-full bg-[#fff] center">
        <h1 class="text-6xl font-kanit">Shop</h1>
    </div>
</template>
