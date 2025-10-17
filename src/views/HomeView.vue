<script setup>
import { inject, onMounted, computed } from 'vue';

import pastries from '@/data/pastries.json';

const auth = inject('auth');

const user = auth.user;

const currentPasteries = computed(() => {
    return pastries['items'] || [];
});

onMounted(() => {
    console.log(user.value.email);
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
    <div>
        <div
            class="center min-h-screen p-6 w-full bg-center bg-cover relative"
            style="background-image: url('/Images/hero-6.jpg')"
        >
            <div class="inset-0 absolute bg-black/40"></div>
            <div
                class="col-center text-center text-[#f3f3f3] md:space-y-5 space-y-5 px-4 z-10 absolute md:left-10 md:top-[35%]"
            >
                <div class="fade-in delay-2 space-y-2 hero-text">
                    <h1 class="sm:text-7xl lg:text-[115px] text-4xl font-medium mb-1">
                        Celine's Treats
                    </h1>
                    <h2 class="text-xl md:text-3xl">Simple. Quality. Essential</h2>
                    <p class="md:text-base text-xs px-3 text-[#777777]">
                        <i
                            >Turning simple beginings into timeless flavors, one pastry at a
                            time...</i
                        >
                    </p>
                </div>
                <button
                    class="px-5 py-2 bg-[#87878753] text-center text-sm hover rounded-md hover:bg-[#d0cecedc] hover:text-[#333]"
                >
                    <RouterLink to="/shop">SHOP NOW</RouterLink>
                </button>
            </div>
        </div>
        <section class="min-h-96 w-full primary-bg px-3 py-5 md:py-16">
            <div class="col-center h-full md:p-5 md:py-0 px-0 py-5 space-y-8">
                <h2 class="text-[2.5rem] font-light fade-in">Why Choose Us?</h2>
                <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center fade-in"
                    >
                        <div class="h-20 w-20 rounded-full flex items-center justify-center bg-why">
                            <i class="fi fi-rr-arrow-left text-4xl mt-2"></i>
                        </div>
                        <h3 class="text-[1.6rem]">Easy Returns</h3>
                        <p class="text-[0.8rem] text-[#666666]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, vitae
                            praesentium!
                        </p>
                    </div>
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center fade-in delay-1"
                    >
                        <div class="h-20 w-20 rounded-full flex items-center justify-center bg-why">
                            <i class="fi fi-rr-trophy text-4xl mt-2"></i>
                        </div>
                        <h3 class="text-[1.6rem]">Quality First</h3>
                        <p class="text-[0.8rem] text-[#666666]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
                            maiores corporis!
                        </p>
                    </div>
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center fade-in delay-2"
                    >
                        <div class="h-20 w-20 rounded-full flex items-center justify-center bg-why">
                            <i class="fi fi-rr-headset text-4xl mt-2"></i>
                        </div>
                        <h3 class="text-[1.6rem]">Support</h3>
                        <p class="text-[0.8rem] text-[#666666]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                            accusantium deserunt.
                        </p>
                    </div>
                </section>
            </div>
        </section>

        <section class="min-h-96 w-full px-3 center py-5 md:py-10 secondary-bg">
            <div class="col-center w-full lg:w-[80%] 2xl:w-[70%] h-full space-y-5 p-2">
                <h3 class="text-[2.5rem] font-light text-center">Featured Products</h3>
                <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full fade-in">
                    <div
                        v-for="items in currentPasteries"
                        :key="items.id"
                        class="section-bg prod-cards hover w-full rounded-xl p-2 shadow cards"
                    >
                        <img :src="items.img" :alt="items.name" class="h-36 w-full rounded-t-xl" />
                        <div class="py-4">
                            <p class="text-[14px]">{{ items.name }}</p>
                            <p class="text-[12px] font-light">product synopsis</p>
                            <p class="text-xs font-light">{{ items.price }}</p>
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

.slide-in-left {
    opacity: 0;
    transform: translateY(-50px); /* negative for left */
    transition:
        opacity 0.8s ease-out,
        transform 0.8s ease-out;
}

.slide-in-left.show {
    opacity: 1;
    transform: translateX(0);
}

.slide-in-right {
    opacity: 0;
    transform: translateY(50px); /* positive for right */
    transition:
        opacity 0.8s ease-out,
        transform 0.8s ease-out;
}

.slide-in-right.show {
    opacity: 1;
    transform: translateX(0);
}

.cards {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    transition: all 0.3s ease;
}
</style>
