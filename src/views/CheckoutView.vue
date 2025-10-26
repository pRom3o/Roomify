<script setup>
import { inject, onMounted } from 'vue';
import { getUserCart, userCart, total } from '../services/cartServices';

const auth = inject('auth');
const user = auth.user;

onMounted(async () => {
    await getUserCart(user.value.id);
    console.log('cart: ', userCart.value);
});
</script>

<template>
    <div class="min-h-screen w-full center md:bg-[#f3f8ff] bg-[#f5f9fe]">
        <div class="flex items-center justify-center md:flex-row flex-col h-full w-full">
            <div
                class="flex flex-col md:items-end items-center gap-3 md:w-1/2 w-full border-r border-r-zinc-200 md:py-30 pt-10 sm:px-10 md:px-5 lg:px-10 px-5 md:min-h-screen"
            >
                <div class="flex flex-col space-y-5 h-full w-full lg:w-[80%] py-10 px-3">
                    <h2 class="text-xl">Checkout</h2>
                    <div class="flex flex-col h-full w-full pt-3 space-y-5">
                        <!-- <div class="flex-col flex">
                            <h2>Shipping Information</h2>
                            <div class="flex items-center justify-between gap-3 w-full mt-2">
                                <div class="w-1/2 p-2 border border-gray-400 rounded-md flex gap-4">
                                    <input type="checkbox" name="delivery" id="delivery" />
                                    <p class="text-sm">Delivery</p>
                                </div>
                                <div class="w-1/2 p-2 border border-gray-400 rounded-md flex gap-4">
                                    <input type="checkbox" name="pickUp" id="pickUp" />
                                    <p class="text-sm">Pick up</p>
                                </div>
                            </div>
                        </div> -->
                        <div class="flex flex-col">
                            <label for="fullName" class="text-gray-700 text-sm"
                                >Full name <span class="text-red-400">*</span></label
                            >
                            <input
                                type="text"
                                id="fullName"
                                class="w-full outline-none border py-1 px-2 rounded-md border-gray-400"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="text-gray-700 text-sm"
                                >Email address <span class="text-red-400">*</span></label
                            >
                            <input
                                type="email"
                                id="email"
                                class="w-full outline-none border py-1 px-2 rounded-md border-gray-400"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label for="phone" class="text-gray-700 text-sm"
                                >Phone number <span class="text-red-400">*</span></label
                            >
                            <input
                                type="text"
                                id="phone"
                                class="w-full outline-none border py-1 px-2 rounded-md border-gray-400"
                                placeholder="Enter phone number"
                            />
                        </div>
                        <div class="w-full flex items-center gap-2">
                            <input
                                type="checkbox"
                                name=""
                                id="agreed"
                                class="checked:border checked:border-blue-200"
                            />
                            <p class="text-xs text-gray-700">
                                I have read and agree to the Terms and Conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-col md:items-start items-center gap-3 md:w-1/2 w-full md:py-28 lg:px-10 py-10 px-5 md:min-h-screen bg-blue-50"
            >
                <div
                    class="flex flex-col space-y-5 h-full lg:w-[80%] xl:w-[70%] w-full md:py-10 py-5 px-3"
                >
                    <h2 class="text-xl">Review your cart</h2>
                    <div class="" v-for="items in userCart" :key="items.id">
                        <div class="flex items-center gap-5">
                            <img
                                :src="items.img"
                                alt=""
                                class="h-12 w-12 rounded-lg border border-gray-400"
                            />
                            <div class="">
                                <p class="flex flex-col text-sm mb-1">
                                    {{ items.item_name }}
                                    <span class="text-[10px] font-light"
                                        >x{{ items.quantity }}</span
                                    >
                                </p>
                                <p class="text-xs font-light">₦{{ items.item_price }}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="w-full flex flex-col justify-center text-xs space-y-1">
                        <div class="flex items-center justify-between w-full">
                            <p class="text-gray-400">Subtotal</p>
                            <p>₦{{ total }}</p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <p class="text-gray-400">Shipping</p>
                            <p>₦0</p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <p>Total</p>
                            <p>₦{{ total }}</p>
                        </div>
                    </div>

                    <button class="w-full rounded-md border p-2">Pay Now</button>
                    <div class="flex flex-col w-full">
                        <p class="flex items-center text-sm">Secure Checkout</p>
                        <p class="font-light text-xs">
                            Ensuring your financial and personal details are secure during every
                            transaction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input::placeholder {
    opacity: 0.7;
    padding: 2px;
    font-size: small;
}
</style>
