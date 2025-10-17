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

    document
        .querySelectorAll('.fade-in, .slide-in-right, .slide-in-left')
        .forEach((el) => observer.observe(el));
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
                <div class="fade-in space-y-2 hero-text">
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
                    class="fade-in delay-2 px-5 py-2 bg-[#87878753] text-center text-sm hover rounded-md hover:bg-[#d0cecedc] hover:text-[#333]"
                >
                    <RouterLink to="/shop">SHOP NOW</RouterLink>
                </button>
            </div>
        </div>
        <section
            id="About"
            class="fade-in min-h-[350px] w-full flex flex-col items-center gap-3 p-4 bg-[#fff2f2]"
        >
            <h1 class="items-start text-3xl md:text-5xl lg:text-6xl py-4 fade-in">
                About Celine's treats
            </h1>
            <div
                class="flex lg:flex-row flex-col items-center justify-evenly space-y-8 w-full lg:w-[80%] xl:w-[60%] p-4 h-full"
            >
                <div
                    class="h-full flex justify-center md:w-[40%] lg:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105"
                >
                    <div
                        class="h-80 w-80 border rounded-full bg-cover bg-center"
                        style="background-image: url('/Images/celine.jpg')"
                    ></div>
                </div>
                <div class="w-full lg:w-1/2 font-heading text-xl slide-in-right">
                    <p class="md:text-lg">
                        <span class="text-3xl">&quot;</span>I never actually planned on starting a
                        business. Most times when I get an idea, I focus too much on the big picture
                        — the finished product I imagine. That often made me stall, and many of my
                        ideas ended up being set aside, but this time was different. When the idea
                        for Celine’s Treats came, I realized that big things happen when you’re bold
                        enough to start small. So here I am. I’ve always been passionate about
                        pastries and food. In a world where so many things come and go, food remains
                        — it brings comfort, joy, and connection. For me, pastries are more than
                        just desserts; they’re little pieces of happiness, and through Celine’s
                        Treats, I want to share that happiness with as many people as possible.<span
                            class="text-3xl"
                            >&quot;</span
                        >
                    </p>
                </div>
            </div>
        </section>
        <section class="min-h-96 w-full bg-[#fff3f3] px-3 py-5 md:py-16">
            <div class="col-center h-full md:p-5 md:py-0 px-0 py-5 space-y-8">
                <h2 class="text-[2.5rem] fade-in">Why Choose Us?</h2>
                <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center bg-[#fffcfc] shadow-lg rounded-2xl fade-in"
                    >
                        <div
                            class="group h-20 w-20 rounded-full flex items-center justify-center bg-why transition-transform duration-700 hover:scale-x-[-1] text-[#f87171] hover:text-[#333]"
                        >
                            <i
                                class="fi fi-rr-arrow-left text-4xl mt-2 transition-transform duration-700"
                            ></i>
                        </div>
                        <h3 class="text-[1.6rem]">Easy Returns</h3>
                        <p class="text-[0.8rem] text-[#666666]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, vitae
                            praesentium!
                        </p>
                    </div>
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center bg-[#fffcfc] shadow-lg rounded-2xl fade-in delay-1"
                    >
                        <div
                            class="group h-20 w-20 rounded-full flex items-center justify-center bg-why transition-transform duration-700 hover:scale-x-[-1] text-[#f87171] hover:text-[#333]"
                        >
                            <i
                                class="fi fi-rr-trophy text-4xl mt-2 transition-transform duration-700"
                            ></i>
                        </div>
                        <h3 class="text-[1.6rem]">Quality First</h3>
                        <p class="text-[0.8rem] text-[#666666]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
                            maiores corporis!
                        </p>
                    </div>
                    <div
                        class="center flex-col justify-center space-y-5 max-w-[280px] p-2 text-center bg-[#fffcfc] shadow-lg rounded-2xl fade-in delay-2"
                    >
                        <div
                            class="group h-20 w-20 rounded-full flex items-center justify-center bg-why transition-transform duration-700 hover:scale-x-[-1] text-[#f87171] hover:text-[#333]"
                        >
                            <i
                                class="fi fi-rr-headset text-4xl mt-2 transition-transform duration-700"
                            ></i>
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

        <section class="min-h-96 w-full px-3 center py-5 md:py-10 bg-[#ffe8e8]">
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
