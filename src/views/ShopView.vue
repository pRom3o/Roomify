<script setup>
import { onMounted } from 'vue';
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

const selectFilter = (item) => {
    filter.value = item;
    getProducts(filter.value);
};

const handleAddToCart = async (item) => {
    cartStore.loadingStates[item.id] = true;

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
        cartStore.loadingStates[item.id] = false;
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
    <div
        class="w-full min-h-screen flex flex-col justify-between primary-bg lg:pb-4 pb-4 md:pb-0 pt-12"
    >
        <div class="h-full w-full col-center space-y-2">
            <div
                class="center relative h-40 w-full col-center text-white bg-cover mb-8"
                style="background-image: url('/Images/bg-img.jpg')"
            >
                <div class="inset-0 absolute bg-black/40 z-10"></div>
                <h1 class="text-6xl font-kanit z-50">Shop</h1>
            </div>

            <ul
                class="flex items-center gap-3 p-1 bg-[#b7cdfd] border border-blue-500/90 rounded-3xl mb-5"
            >
                <li
                    v-for="item in filters"
                    :key="item"
                    :value="item"
                    class="py-1 px-3 rounded-3xl hover"
                    :class="
                        filter === item
                            ? 'bg-blue-500/90 text-white hover:text-[#333]'
                            : 'hover:text-blue-500/90'
                    "
                    @click="selectFilter(item)"
                >
                    {{ item }}
                </li>
            </ul>

            <div class="min-h-42 w-full flex flex-col items-center justify-center gap-6">
                <loadingScreen v-if="isLoading" />
                <div class="md:w-[95%] lg:w-[70%] xl:w-[60%] w-full center p-2" v-else>
                    <div
                        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full md:gap-6 gap-3"
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

                            <div class="flex flex-col justify-between w-full gap-2">
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
                                    class="px-3 py-2 rounded-xl btn-2 md:flex items-center justify-center hidden hover"
                                >
                                    <p
                                        v-if="!cartStore.loadingStates[items.id]"
                                        class="text-center"
                                    >
                                        Add to cart
                                    </p>
                                    <p v-else><LoadingIcon /></p>
                                </button>
                                <button
                                    @click="handleAddToCart(items)"
                                    class="px-3 py-2 text-[14px] flex items-center justify-center md:hidden rounded-xl btn-1 hover"
                                >
                                    <p v-if="!cartStore.loadingStates[items.id]">Add to cart</p>
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
.prod-cards {
    background-color: #fff;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
}

.prod-cards:hover {
    cursor: pointer;
    /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4); */
}

li {
    cursor: pointer;
}
</style>
