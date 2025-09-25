<script setup>
// import { ref } from 'vue';
import IconX2 from '../../public/icons/IconX2.vue';
import IconDash from '../../public/icons/IconDash.vue';
import IconPlus from '../../public/icons/IconPlus.vue';
</script>

<template>
    <div class="min-h-96 flex flex-col items-center w-full md:p-4 space-y-10 nav-bg">
        <div class="lg:w-4/5 w-full h-20 col-center p-4">
            <h1 class="text-5xl font-light">Shopping Cart</h1>
        </div>
        <div
            class="flex lg:flex-row flex-col items-center lg:items-start justify-center xl:w-4/5 w-full py-4 gap-14 lg:px-10 md:px-4"
        >
            <div class="flex flex-col gap-5 items-center w-full lg:w-[70%] px-2">
                <div
                    class="px-6 py-2 border border-gray-400/10 flex items-center justify-between rounded-xl w-full bg-[#f6dab7]"
                >
                    <p>Product</p>
                    <div class="flex w-1/2 justify-between text-[10px] mg:text-base">
                        <p>Price</p>
                        <p>Quantity</p>
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
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                    <li
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                    <li
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                    <li
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                    <li
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                    <li
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                    <li
                        class="flex items-center justify-between w-full border-b border-gray-400/50 pb-2"
                    >
                        <div class="w-1/2 flex items-center justify-items-start md:gap-6 gap-3">
                            <button><IconX2 /></button>
                            <div class="h-12 w-10 rounded-xl bg-gray-400/50"></div>
                            <div class="flex flex-col">
                                <p class="md:text-base text-[9px]">Wooden Sofa Chair</p>
                                <p class="text-[9px] text-gray-600/80">Color : Grey</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-between pr-8 md:text-base text-[9px]"
                        >
                            <p class="">$80</p>
                            <div
                                class="flex items-center gap-3 md:gap-5 md:px-3 border border-gray-400/50 rounded-2xl text-base"
                            >
                                <button class="border-r border-gray-400/50 p-1">
                                    <IconDash />
                                </button>
                                <p class="">4</p>
                                <button class="border-l border-gray-400/50 p-1">
                                    <IconPlus />
                                </button>
                            </div>
                            <p>$320</p>
                        </div>
                    </li>
                </transition-group>
            </div>
            <div class="flex flex-col gap-5 items-center md:w-2/3 w-full px-4 lg:w-[30%]">
                <div
                    class="p-3 border border-gray-400/30 flex flex-col nav-bg rounded-xl w-full space-y-4"
                >
                    <h3>Order Summary</h3>
                    <hr class="text-gray-400/30" />
                    <div class="space-y-3">
                        <div class="flex w-full justify-between">
                            <p class="text-gray-600/80">Items</p>
                            <p>9</p>
                        </div>
                        <div class="flex w-full justify-between">
                            <p class="text-gray-600/80">Sub Total</p>
                            <p>$740.00</p>
                        </div>
                        <div class="flex w-full justify-between">
                            <p class="text-gray-600/80">Shipping</p>
                            <p>$00.00</p>
                        </div>
                        <div class="flex w-full justify-between">
                            <p class="text-gray-600/80">Taxes</p>
                            <p>$00.00</p>
                        </div>
                        <div class="flex w-full justify-between">
                            <p class="text-gray-600/80">Cupon Discount</p>
                            <p>-$100.00</p>
                        </div>
                        <hr class="text-gray-400/30" />
                        <div class="flex w-full justify-between">
                            <p class="text-gray-600/80">Total</p>
                            <p>= $640.00</p>
                        </div>
                    </div>
                    <button
                        class="text-center px-6 py-3 rounded-4xl cart bg-[#f6dab7] hover:bg-[#e7ccae] hover hover:rounded-full"
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
</style>
