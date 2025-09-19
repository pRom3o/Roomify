<script setup>
import cartModal from '../components/cartModal.vue';
import { isCartOpen } from '../services/cartServices';
</script>

<template>
    <div class="main-bg w-full">
        <div class="center h-[400px] p-6 w-full">
            <div class="w-[800px] text-center md:space-y-10 space-y-5 px-4">
                <h1 class="md:text-6xl text-4xl font-light">Simple. Quality. Essential</h1>
                <p class="text-[0.7rem] md:text-base font-light p-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda cum tempore
                    in quos distinctio non impedit illum architecto magnam perferendis.
                </p>
                <button
                    class="px-5 py-2 shop text-[#000000] text-center text-sm hover hover:rounded-xl rounded-md"
                >
                    <span>SHOP NOW</span>
                </button>
            </div>
        </div>
        <section class="min-h-96 w-full section-bg px-3 py-5 md:py-16">
            <div class="center flex-col h-full md:p-5 md:py-0 px-0 py-5 space-y-13">
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

        <section class="min-h-96 w-full px-3 py-5 md:py-10">
            <div class="flex flex-col h-full space-y-5 p-2">
                <h3 class="text-[2.5rem] font-extralight text-center">Featured Products</h3>
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full">
                    <div class="section-bg prod-cards hover w-full rounded-xl p-2">
                        <div
                            class="min-h-60 flex items-center justify-center w-full bg-[#ddd] p-2 rounded-xl"
                        >
                            Product Image
                        </div>
                        <div class="p-4">
                            <p>Product Name</p>
                            <p class="text-xs">product synopsis</p>
                            <p>product price</p>
                        </div>
                    </div>
                    <div class="section-bg prod-cards hover w-full rounded-xl p-2">
                        <div
                            class="min-h-60 flex items-center justify-center w-full bg-[#ddd] p-2 rounded-xl"
                        >
                            Product Image
                        </div>
                        <div class="p-4">
                            <p>Product Name</p>
                            <p class="text-xs">product synopsis</p>
                            <p>product price</p>
                        </div>
                    </div>
                    <div class="section-bg prod-cards hover w-full rounded-xl p-2">
                        <div
                            class="min-h-60 flex items-center justify-center w-full bg-[#ddd] p-2 rounded-xl"
                        >
                            Product Image
                        </div>
                        <div class="p-4">
                            <p>Product Name</p>
                            <p class="text-xs">product synopsis</p>
                            <p>product price</p>
                        </div>
                    </div>
                    <div class="section-bg prod-cards hover w-full rounded-xl p-2">
                        <div
                            class="min-h-60 flex items-center justify-center w-full bg-[#ddd] p-2 rounded-xl"
                        >
                            Product Image
                        </div>
                        <div class="p-4">
                            <p>Product Name</p>
                            <p class="text-xs">product synopsis</p>
                            <p>product price</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <cartModal :class="isCartOpen ? 'fixed top-0 ' : ' hidden'" />
</template>

<style scoped>
.prod-cards:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-8px);
}
</style>
