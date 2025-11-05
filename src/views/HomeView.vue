<script setup>
import { inject, onMounted, computed } from 'vue';

import pastries from '@/data/pastries.json';

const auth = inject('auth');

const user = auth.user;

const currentPasteries = computed(() => {
    return pastries['items'] || [];
});

onMounted(() => {
    console.log('user', user.value);
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
    <div class="min-h-screen w-full">
        <div
            class="center md:h-screen w-full h-[500px] relative text-[#e8e8e8] bg-center bg-cover"
            style="background-image: url('/Images/bg-img.jpg')"
        >
            <div class="inset-0 absolute bg-black/40 z-10"></div>
            <!-- <img src="/Images/bg-img.jpg" alt="" class="w-full h-full" /> -->
            <div class="center w-full h-full z-50">
                <div
                    class="col-center text-center space-y-2 sm:px-4 absolute lg:right-10 xl:right-30 lg:top-[35%]"
                >
                    <div class="fade-in space-y-2">
                        <h1 class="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium mb-1">
                            Celine's Treats
                        </h1>
                        <h2 class="text-xl md:text-3xl">Simple. Quality. Essential</h2>
                        <p class="md:text-sm text-xs md:px-3 px-6 text-[#a9a9a9]">
                            <i
                                >Turning simple beginings into timeless flavors, one pastry at a
                                time...</i
                            >
                        </p>
                    </div>
                    <RouterLink
                        to="/shop"
                        class="px-3 py-1 border border-white/30 rounded-lg hover:text-[#000] backdrop-blur-3xl text-xl md:text-base hover flex items-center hover:bg-[#d0d0d032] gap-1"
                        >SHOP NOW
                        <span
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentcolor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                /></svg></span
                    ></RouterLink>
                </div>
            </div>
        </div>
        <section
            id="About"
            class="fade-in min-h-[300px] w-full flex flex-col items-center gap-3 p-4 secondary-bg"
        >
            <h1 class="items-start text-3xl md:text-5xl lg:text-6xl py-4 fade-in font-sans">
                About Celine's treats
            </h1>
            <div
                class="flex lg:flex-row flex-col items-center justify-evenly space-y-8 w-full lg:w-[80%] xl:w-[60%] py-4 px-2 h-full"
            >
                <div
                    class="h-full flex justify-center md:w-[40%] lg:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105"
                >
                    <div
                        class="md:flex hidden h-80 w-80 border rounded-full bg-cover bg-center"
                        style="background-image: url('/Images/celine.jpg')"
                    ></div>
                    <div
                        class="flex md:hidden h-60 w-60 border rounded-full bg-cover bg-center"
                        style="background-image: url('/Images/celine.jpg')"
                    ></div>
                </div>
                <div class="w-full lg:w-1/2 slide-in-right">
                    <p class="md:text-base text-sm text-center">
                        <span class="text-lg">&quot;</span>I never actually planned on starting a
                        business. Most times when I get an idea, I focus too much on the big picture
                        — the finished product I imagine, that often made me stall, and many of my
                        ideas ended up being set aside, but this time was different. When the idea
                        for Celine’s Treats came, I realized that big things happen when you’re bold
                        enough to start small, so here I am. I’ve always been passionate about
                        pastries and food. In a world where so many things come and go, food remains
                        — it brings comfort, joy, and connection. For me, pastries are more than
                        just desserts; they’re little pieces of happiness, and through Celine’s
                        Treats, I want to share that happiness with as many people as possible.<span
                            class="text-xl"
                            >&quot;</span
                        >
                    </p>
                </div>
            </div>
        </section>
        <div class="col-center w-full min-h-96 primary-bg">
            <section class="min-h-96 w-full px-3 py-5 md:py-16">
                <div class="col-center h-full md:p-5 md:py-0 px-0 py-5 space-y-8">
                    <h2 class="md:text-[2.5rem] text-3xl fade-in font-sans font-medium">
                        Why Choose Us?
                    </h2>
                    <section class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div
                            class="center flex-col justify-center space-y-5 max-w-[350px] md:max-w-[280px] p-2 text-center shadow-lg rounded-2xl fade-in prod-cards"
                        >
                            <div
                                class="group h-20 w-20 rounded-full flex items-center justify-center bg-blue-100 hover:bg-[#3B82F6E6] transition-transform duration-700 hover:scale-x-[-1] text-[#3B82F6E6] hover:text-blue-100"
                            >
                                <i
                                    class="fi fi-rr-arrow-left text-4xl mt-2 transition-transform duration-700"
                                ></i>
                            </div>
                            <h3 class="text-[1.6rem]">Easy Returns</h3>
                            <p class="text-[0.8rem] text-[#666666]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
                                vitae praesentium!
                            </p>
                        </div>
                        <div
                            class="center flex-col justify-center space-y-5 max-w-[350px] md:max-w-[280px] p-2 text-center shadow-lg rounded-2xl fade-in prod-cards"
                        >
                            <div
                                class="group h-20 w-20 rounded-full flex items-center justify-center bg-blue-100 hover:bg-[#3B82F6E6] transition-transform duration-700 hover:scale-x-[-1] text-[#3B82F6E6] hover:text-blue-100"
                            >
                                <i
                                    class="fi fi-rr-trophy text-4xl mt-2 transition-transform duration-700"
                                ></i>
                            </div>
                            <h3 class="text-[1.6rem]">Quality First</h3>
                            <p class="text-[0.8rem] text-[#666666]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Consequuntur, maiores corporis!
                            </p>
                        </div>
                        <div
                            class="prod-cards center flex-col justify-center space-y-5 max-w-[350px] md:max-w-[280px] p-2 text-center shadow-lg rounded-2xl fade-in"
                        >
                            <div
                                class="group h-20 w-20 rounded-full flex items-center justify-center bg-blue-100 hover:bg-[#3B82F6E6] transition-transform duration-700 hover:scale-x-[-1] text-[#3B82F6E6] hover:text-blue-100"
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

            <section class="min-h-92 w-full px-3 center py-5 md:py-10 secondary-bg">
                <div class="col-center w-[90%] lg:w-[80%] 2xl:w-[70%] h-full space-y-5 p-2">
                    <h3 class="md:text-[2.5rem] text-3xl font-medium text-center font-sans">
                        Featured Products
                    </h3>
                    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
                        <div
                            v-for="items in currentPasteries"
                            :key="items.id"
                            class="fade-in prod-cards hover w-full rounded-xl p-2 shadow"
                        >
                            <img
                                :src="items.img"
                                :alt="items.name"
                                class="h-36 w-full rounded-t-xl"
                            />
                            <div
                                class="pt-2 pb-1 flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:items-center justify-between w-full"
                            >
                                <div>
                                    <p class="text-[14px]">{{ items.name }}</p>
                                    <p class="text-xs font-light">
                                        {{ items.price.toLocaleString() }}
                                    </p>
                                </div>
                                <button class="px-3 py-2 rounded-3xl btn-1 hover text-sm">
                                    <RouterLink to="/shop">Shop Now</RouterLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.prod-cards {
    background-color: #ffffff;
    /* border: 1px solid #98c0ff; */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.prod-cards:hover {
    cursor: pointer;
    /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
    /* border: 1px solid #5b95f2e6; */
    transform: translateY(-5px);
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
