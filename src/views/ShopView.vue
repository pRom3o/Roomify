<script setup>
import { onMounted, watch, reactive } from 'vue';
import { getProducts, isLoading, products } from '@/services/productServices';
import loadingScreen from '@/components/loadingScreen.vue';
// import { addToCart } from '@/services/cartServices';
import LoadingIcon from '../../public/icons/LoadingIcon.vue';
import { inject, ref } from 'vue';
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();

const auth = inject('auth');
const user = auth.user;

const filters = ['Cakes', 'Doughnuts', 'Others'];
const filter = ref('Cakes');

onMounted(async () => {
    await getProducts(filter.value);
});

watch(filter, (newCategory) => {
    getProducts(newCategory);
    console.log('Products', products.value);
});

const loadingStates = reactive({});
const handleAddToCart = async (item) => {
    loadingStates[item.id] = true;

    try {
        await cartStore.addToCart(
            item.name,
            item.price,
            item.image_url,
            user.value.id,
            user.value.email,
        );
        console.log('Added to cart');
    } catch (error) {
        console.log(error);
    } finally {
        loadingStates[item.id] = false;
    }
};

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
    <div class="w-full min-h-screen flex flex-col justify-between bg-blue-50/50">
        <div class="h-full w-full col-center space-y-5 mt-20">
            <div class="w-full col-center space-y-3 relative">
                <h1 class="text-6xl font-kanit">Shop</h1>
                <select
                    id="filter"
                    v-model="filter"
                    class="rounded-xl px-2 bg-blue-100 text-[#333] focus:outline-none shadow-md border border-[#bdd2ff]"
                >
                    <option
                        v-for="item in filters"
                        :key="item"
                        :value="item"
                        class="border-none bg-blue-50 font-sans hover:bg-[#bdd2ff]"
                    >
                        {{ item }}
                    </option>
                    {{
                        filter
                    }}
                </select>
            </div>
            <div class="min-h-96 w-full flex flex-col items-center justify-center gap-6">
                <loadingScreen v-if="isLoading" />
                <div class="h-[full] md:w-[90%] w-full center md:p-6 p-4" v-else>
                    <div
                        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-6"
                    >
                        <div
                            v-for="items in products"
                            :key="items.id"
                            class="rounded-xl prod-cards transition-all border-none duration-300 ease-in-out delay-100 shadow p-2"
                        >
                            <img
                                :src="items.image_url"
                                :alt="items.name"
                                class="h-44 w-full rounded-t-xl"
                            />

                            <div class="md:py-2 flex flex-col justify-between w-full gap-2">
                                <div>
                                    <p class="text-[14px]">
                                        {{ items.name }}
                                    </p>
                                    <p class="text-[14px] md:text-[11px] font-light">
                                        ₦{{ items.price.toLocaleString() }}
                                    </p>
                                </div>
                                <button
                                    @click="handleAddToCart(items)"
                                    class="px-3 py-2 rounded-xl btn-1 md:flex items-center justify-center hidden hover"
                                >
                                    <p class="text-center">Add to cart</p>
                                </button>
                                <button
                                    @click="handleAddToCart(items)"
                                    class="px-3 py-2 text-[14px] flex items-center justify-center md:hidden rounded-xl btn-1 hover"
                                >
                                    <p v-if="!loadingStates[items.id]">Add to cart</p>
                                    <p v-else><LoadingIcon /></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
select:focus {
    outline: none;
    border: 2px solid #bdd2ff;
}
.prod-cards {
    background-color: #fff;
    border: 1px solid #bdd2ff;
}

.prod-cards:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>
