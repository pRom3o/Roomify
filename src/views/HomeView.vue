<script setup>
import { inject, onMounted, ref, computed } from 'vue';
import { Motion } from '@motionone/vue';

import pastries from '@/data/pastries.json';

const auth = inject('auth');

const user = auth.user;

const filter = ref('Cakes');

const currentPasteries = computed(() => {
    return pastries[filter.value] || [];
});

onMounted(() => {
    console.log(user.value.email);
});
</script>

<template>
    <div>
        <div
            class="center min-h-screen p-6 w-full bg-center bg-cover relative"
            style="background-image: url('/Images/pastries-hero.jpg')"
        >
            <div class="w-full absolute inset-0 bg-black/40 opacity-50"></div>
            <div class="col-center w-full text-center md:space-y-5 space-y-5 px-4 z-10">
                <Motion
                    class="space-y-2"
                    :initial="{ opacity: 0, y: 70 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ duration: 0.7, easing: 'ease-in' }"
                >
                    <h1 class="md:text-7xl lg:text-8xl text-4xl font-medium mb-1">
                        Celine's Treats
                    </h1>
                    <h2 class="text-2xl md:text-3xl">Simple. Quality. Essential</h2>
                    <p class="md:text-base text-xs px-3 p-text">
                        <i
                            >Turning simple beginings into timeless flavors, one pastry at a
                            time...</i
                        >
                    </p>

                    <button
                        class="px-5 py-2 bg-[#ecdac6] text-[#000000] text-center text-sm hover hover:rounded-md hover:bg-[#f2d0a8]"
                    >
                        <RouterLink to="/shop">SHOP NOW</RouterLink>
                    </button>
                </Motion>
            </div>
        </div>
        <section class="min-h-96 w-full section-bg px-3 py-5 md:py-16">
            <div class="col-center h-full md:p-5 md:py-0 px-0 py-5 space-y-13">
                <h2 class="text-[2.5rem] font-extralight">Why Choose Us?</h2>
                <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center"
                    >
                        <div class="h-20 w-20 rounded-full shop flex items-center justify-center">
                            <i class="fi fi-rr-arrow-left text-4xl"></i>
                        </div>
                        <h3 class="text-[1.6rem]">Easy Returns</h3>
                        <p class="text-[0.9rem] text-[#666666]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, vitae
                            praesentium!
                        </p>
                    </div>
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center"
                    >
                        <div class="h-20 w-20 rounded-full shop flex items-center justify-center">
                            <i class="fi fi-rr-trophy text-4xl"></i>
                        </div>
                        <h3 class="text-[1.6rem]">Quality First</h3>
                        <p class="text-[0.9rem] text-[#666666]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
                            maiores corporis!
                        </p>
                    </div>
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center"
                    >
                        <div class="h-20 w-20 rounded-full shop flex items-center justify-center">
                            <i class="fi fi-rr-headset text-4xl"></i>
                        </div>
                        <h3 class="text-[1.6rem]">Support</h3>
                        <p class="text-[0.9rem] text-[#666666]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                            accusantium deserunt.
                        </p>
                    </div>
                </section>
            </div>
        </section>

        <section class="min-h-96 w-full px-3 center py-5 md:py-10 featureds">
            <div class="col-center w-full md:w-[80%] h-full space-y-5 p-2">
                <h3 class="text-[2.5rem] font-extralight text-center">Featured Products</h3>
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full">
                    <div
                        v-for="items in currentPasteries"
                        :key="items.id"
                        class="section-bg prod-cards hover w-full rounded-xl p-2"
                    >
                        <img :src="items.img" :alt="items.name" class="h-56 w-full rounded-t-xl" />
                        <div class="py-4">
                            <p>{{ items.name }}</p>
                            <p class="text-xs">product synopsis</p>
                            <p>{{ items.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.prod-cards:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-8px);
}
</style>
