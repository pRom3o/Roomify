<script setup>
import { computed, onMounted, ref } from 'vue';
import { getProducts, loadingScreen, products } from '../services/productServices';
import pastries from '@/data/pastries.json';

const filters = ['Cakes', 'Doughnuts', 'Others'];
const filter = ref('Doughnuts');

const currentPasteries = computed(() => {
    return pastries[filter.value] || [];
});

onMounted(async () => {
    await getProducts();
    console.log('Products', products.value);
});
</script>

<template>
    <div class="w-full min-h-screen bg-[#fff] center">
        <div class="h-full w-full flex flex-col items-center justify-evenly gap-6">
            <h1 class="text-6xl font-kanit">Shop</h1>
            <select id="filter" v-model="filter">
                <option v-for="item in filters" :key="item" :value="item">{{ item }}</option>
            </select>
            <div class="h-full w-[80%] center">
                <div class="grid grid-cols-4 w-full h-full gap-6">
                    <div v-for="items in currentPasteries" :key="items.id" class="border">
                        <img :src="items.img" :alt="items.name" class="h-full" />
                        <p>{{ items.name }}</p>
                        <p>{{ items.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
