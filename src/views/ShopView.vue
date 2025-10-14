<script setup>
import { onMounted, ref, watch } from 'vue';
import { getProducts, loadingScreen, products } from '../services/productServices';

const filters = ['Cakes', 'Doughnuts', 'Others'];
const filter = ref('Cakes');

onMounted(async () => {
    await getProducts(filter.value);
});

watch(filter, (newCategory) => {
    getProducts(newCategory);
    console.log('Products', products.value);
});
</script>

<template>
    <div class="w-full min-h-screen bg-[#fff] center">
        <div class="h-full w-full flex flex-col items-center justify-evenly gap-6">
            <h1 class="text-6xl font-kanit">Shop</h1>
            <select id="filter" v-model="filter">
                <option v-for="item in filters" :key="item" :value="item">{{ item }}</option>
                {{
                    filter
                }}
            </select>
            <div class="h-full w-[80%] center">
                <div class="grid grid-cols-4 w-full h-full gap-6">
                    <div v-for="items in products" :key="items.id" class="border">
                        <img :src="items.image_url" :alt="items.name" class="h-full" />
                        <p>{{ items.name }}</p>
                        <p>{{ items.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
