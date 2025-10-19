<script setup>
// import { ref } from 'vue';
import IconX2 from '../../public/icons/IconX2.vue';
// import IconDash from '../../public/icons/IconDash.vue';
// import IconPlus from '../../public/icons/IconPlus.vue';

import { getUserCart, userCart } from '../services/cartServices';
import { onMounted } from 'vue';
import { inject } from 'vue';
import { computed } from 'vue';

const auth = inject('auth');
const user = auth.user;

onMounted(async () => {
    await getUserCart(user.value.id);
});

// const handleDelete = () => {
//   try {
//     const
//   }
// };

const total = computed(() =>
    userCart.value.reduce((sum, item) => sum + item.item_price * item.quantity, 0),
);
</script>

<template>
    <div class="min-h-screen flex flex-col items-center w-full md:p-4 space-y-5 primary-bg">
        <div class="lg:w-4/5 w-full h-20 col-center p-4 mt-10">
            <h1 class="text-3xl md:text-5xl font-light">Shopping Cart</h1>
        </div>
        <div
            class="flex md:flex-row flex-col items-center lg:items-start justify-center xl:w-4/5 w-full py-4 gap-14 lg:px-10 px-4"
        >
            <div
                class="flex flex-col gap-5 items-center w-full lg:w-[70%] px-2 border border-[#eccdcd] bg-[#ffffff] shadow py-5 rounded-2xl"
            >
                <div
                    class="px-2 md:px-6 py-2 border border-gray-400/10 flex items-center justify-between rounded-xl w-full bg-[#ffdcdc]"
                >
                    <p class="w-1/2 text-center text-sm md:text-base">Product</p>
                    <div class="flex w-1/2 justify-evenly text-[10px] lg:text-base md:pr-5 pr-10">
                        <p>Price</p>
                        <!-- <p>Quantity</p> -->
                        <p>Subtotal</p>
                    </div>
                </div>
                <transition-group
                    tag="ul"
                    mode="out-in"
                    name="items"
                    class="w-full flex flex-col gap-2"
                >
                    <li
                        class="flex items-center justify-between w-full rounded-2xl bg-[#f5f5f5] h-14 gap-2 py-2 px-2"
                        v-for="items in userCart"
                        :key="items.id"
                    >
                        <div class="w-1/2 flex items-center justify-items-start gap-3">
                            <div class="h-12 w-12 rounded-xl items-center flex">
                                <img :src="items.img" alt="img" class="h-full w-full rounded-xl" />
                            </div>
                            <div class="flex flex-col">
                                <p class="md:text-[12px] text-[12px] md:font-light">
                                    {{ items.item_name }}
                                </p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-evenly gap-3 md:text-base text-[9px]"
                        >
                            <p class="lg:text-base md:text-[12px] text-[10px]">
                                ₦{{ items.item_price }}
                            </p>
                            <!-- <div
                                class="flex items-center gap-1 md:gap-2 lg:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">{{ items.quantity || 0 }}</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div> -->
                            <p class="lg:text-base md:text-[12px] text-[10px]">
                                ₦{{ items.price * (items.quantity || 0) }}
                            </p>
                        </div>
                        <button
                            class="text-red-400 p-1 rounded-full bg-red-200 hover hover:bg-red-100"
                        >
                            <IconX2 />
                        </button>
                    </li>
                </transition-group>
            </div>
            <div class="flex flex-col gap-5 items-center md:w-2/3 w-full px-4 lg:w-[30%]">
                <div
                    class="p-3 border border-[#eccdcd] flex flex-col rounded-xl w-full space-y-4 bg-[#fff6f6] shadow"
                >
                    <h3 class="text-center">Order Summary</h3>
                    <hr class="text-[#eccdcd]" />
                    <div class="space-y-3">
                        <div class="flex w-full justify-between">
                            <p class="text-[#424242]">Items</p>
                            <p>{{ userCart.length }}</p>
                        </div>
                        <hr class="text-[#eccdcd]" />
                        <div class="flex w-full justify-between">
                            <p class="text-[#424242]">Sub Total</p>
                            <p class="price">$740.00</p>
                        </div>
                        <hr class="text-[#eccdcd]" />
                        <div class="flex w-full justify-between">
                            <p class="text-[#424242]">Total</p>
                            <p class="price">= ₦{{ total }}</p>
                        </div>
                    </div>
                    <button
                        class="text-center px-6 font-light text-[0.9rem] py-2 rounded-xl bg-[#ffd3d3] hover:bg-[#fbc1c1] hover"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-enter-from,
.cart-leave-to {
    opacity: 0;
    width: 0px;
}

.cart-enter-active,
.cart-leave-active {
    transition: all 0.5s ease-in-out 0.1s;
}

h3 {
    font-size: large;
}

.price {
    font-size: small;
}

.items-enter-from,
.items-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.items-enter-active,
.items-leave-active {
    transition: all 0.4s ease-in-out 0.1s;
}

.price {
    font-weight: 300;
}
</style>
