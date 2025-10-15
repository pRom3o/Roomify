<script setup>
import { onMounted, ref, watch } from 'vue';
import { getProducts, isLoading, products } from '../services/productServices';
import loadingScreen from '../components/loadingScreen.vue';
const filters = ['Cakes', 'Doughnuts', 'Others'];
const filter = ref('Cakes');

onMounted(async () => {
    await getProducts(filter.value);
});

watch(filter, (newCategory) => {
    getProducts(newCategory);
    console.log('Products', products.value);
});

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        },
        { threshold: 0.1 },
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
</script>

<template>
    <div class="w-full min-h-screen flex flex-col justify-between primary-bg">
        <div class="h-full w-full col-center space-y-5 mt-20">
            <h1 class="text-6xl font-kanit">Shop</h1>
            <div class="min-h-96 w-full flex flex-col items-center justify-evenly gap-6">
                <select id="filter" v-model="filter">
                    <option v-for="item in filters" :key="item" :value="item">{{ item }}</option>
                    {{
                        filter
                    }}
                </select>
                <loadingScreen v-if="isLoading" />
                <div class="h-full md:w-[80%] w-full center p-6" v-else>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6">
                        <div
                            v-for="items in products"
                            :key="items.id"
                            class="section-bg rounded-xl prod-cards hover shadow"
                        >
                            <img
                                :src="items.image_url"
                                :alt="items.name"
                                class="h-56 w-full rounded-t-xl"
                            />
                            <div class="p-2">
                                <p>{{ items.name }}</p>
                                <p>{{ items.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.prod-cards:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-8px);
}
</style>
