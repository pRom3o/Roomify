<script setup>
// import { ref } from 'vue';
import IconX2 from '../../public/icons/IconX2.vue';
import IconDash from '../../public/icons/IconDash.vue';
import IconPlus from '../../public/icons/IconPlus.vue';
import { onMounted } from 'vue';
import { inject } from 'vue';
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const auth = inject('auth');
const user = auth.user;

const refreshCart = async () => {
    await cartStore.fetchCart(user.value.id);
};

const handleDelete = async (id) => {
    try {
        await cartStore.removeItem(id);
    } catch (error) {
        console.log(error);
    } finally {
        refreshCart();
    }
};

const handleUpdate = async (id, qty) => {
    try {
        await cartStore.updateQuantity(id, qty);
        await refreshCart();
        const item = cartStore.userCart.find((i) => i.id === id);
        if (item.quantity === 0) {
            console.log('deleting');
            await cartStore.handleDelete(item.id);
            console.log('deleted');
            refreshCart();
        }
    } catch (error) {
        console.log(error);
    }
};

onMounted(async () => {
    // refreshCart();
    cartStore.fetchCart(user.value.id);
    console.log('user cart', cartStore.userCart);
});
</script>

<template>
    <div class="min-h-screen flex flex-col items-center w-full py-4 space-y-5 primary-bg pt-12">
        <!-- <div class="lg:w-4/5 w-full h-20 col-center p-4 mt-10">
            <h1 class="text-3xl md:text-5xl md:font-light">Shopping Cart</h1>

        </div> -->
        <div
            class="center relative h-40 w-full col-center text-white bg-cover"
            style="background-image: url('/Images/bg-img.jpg')"
        >
            <div class="inset-0 absolute bg-black/30 z-10"></div>
            <div class="col-center z-50">
                <h1 class="text-3xl md:text-6xl">Shopping Cart</h1>
            </div>
        </div>
        <div
            class="flex lg:flex-row flex-col items-center lg:items-start justify-center xl:w-4/5 w-full gap-14 lg:px-10 md:px-4 px-2"
        >
            <div
                class="flex flex-col gap-5 items-center w-full sm:w-[80%] px-2 border border-gray-200 bg-[#ffffff] shadow py-2 rounded-2xl"
            >
                <div
                    class="px-2 lg:px-6 py-2 border border-gray-400/10 flex items-center justify-between rounded-xl w-full bg-blue-500/90 gap-2 text-white"
                >
                    <p class="sm:w-1/2 w-[42%] text-sm md:text-base">Product</p>
                    <div
                        class="flex sm:w-1/2 w-[58%] items-center justify-between text-[12px] lg:text-base pr-3"
                    >
                        <p class="">Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                </div>
                <transition-group
                    tag="ul"
                    mode="out-in"
                    name="items"
                    class="w-full flex flex-col gap-2"
                    v-if="cartStore.cartCount > 0"
                >
                    <li
                        class="flex items-center justify-between w-full rounded-4xl bg-[#f2f6ff] h-14 gap-2 py-2 px-2"
                        v-for="items in cartStore.userCart"
                        :key="items.id"
                    >
                        <div class="w-1/2 flex items-center justify-items-start gap-3">
                            <div
                                class="md:h-12 md:w-12 h-10 w-8 rounded-full items-center relative"
                            >
                                <img
                                    :src="items.img"
                                    loading="lazy"
                                    alt="img"
                                    class="h-full w-full rounded-full absolute inset-0"
                                />
                            </div>
                            <div class="flex flex-col">
                                <p class="md:text-[12px] lg:text-base text-[12px] md:font-light">
                                    {{ items.item_name }}
                                </p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 flex items-center justify-evenly sm:justify-around md:justify-evenly md:gap-0 gap-3 md:text-base text-[9px]"
                        >
                            <p class="lg:text-base md:text-[12px] text-[11px]">
                                ₦{{ items.item_price.toLocaleString() }}
                            </p>
                            <div
                                class="flex items-center gap-1 md:gap-2 lg:gap-5 md:px-3 rounded-2xl text-base"
                            >
                                <button
                                    class="hover hover:bg-red-100 bg-red-200 text-red-400 p-1 rounded-full"
                                    @click="handleUpdate(items.id, items.quantity - 1)"
                                >
                                    <IconDash />
                                </button>
                                <p
                                    class="hover py-1 px-2 rounded-full bg-green-200 text-xs md:text-sm text-green-800"
                                >
                                    {{ items.quantity }}
                                </p>
                                <button
                                    class="hover hover:bg-blue-100 bg-blue-200 text-blue-400 p-1 rounded-full"
                                    @click="handleUpdate(items.id, items.quantity + 1)"
                                >
                                    <IconPlus />
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <p class="lg:text-base md:text-[12px] text-[11px] px-1">
                                ₦{{ (items.item_price * items.quantity).toLocaleString() }}
                            </p>
                            <button
                                class="text-red-600 p-1 rounded-full bg-red-300 hover hover:bg-red-200"
                                @click="handleDelete(items.id)"
                            >
                                <IconX2 />
                            </button>
                        </div>
                    </li>
                </transition-group>
                <div v-else class="center">
                    <h3><i>No items in cart</i></h3>
                </div>
                <button
                    class="text-red-400 p-1 rounded-full text-sm bg-red-200 hover hover:bg-red-100 flex items-center justify-center"
                    @click="cartStore.clearCart(user.id)"
                    v-if="cartStore.cartCount > 0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-x-circle-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
                        /></svg
                    ><span class="px-1 text-center">Clear cart</span>
                </button>
            </div>
            <div class="flex flex-col gap-5 items-center md:w-2/3 w-full px-2 lg:w-[30%] min-h-10">
                <div
                    class="p-2 flex flex-col rounded-xl w-full space-y-4 border border-gray-200 bg-[#ffffff] shadow"
                >
                    <h3 class="text-center">Order Summary</h3>
                    <hr class="text-[#dae6ff]" />
                    <div class="space-y-3">
                        <div class="flex w-full justify-between">
                            <p class="text-[#424242]">Items</p>
                            <p>{{ cartStore.cartCount }}</p>
                        </div>
                        <hr class="text-[#dae6ff]" />
                        <div class="flex w-full justify-between">
                            <p class="text-[#424242]">Sub Total</p>
                            <p class="price">₦{{ cartStore.total.toLocaleString() }}</p>
                        </div>
                        <hr class="text-[#dae6ff]" />
                        <div class="flex w-full justify-between">
                            <p class="text-[#424242]">Total</p>
                            <p class="price">= ₦{{ cartStore.total.toLocaleString() }}</p>
                        </div>
                    </div>
                    <RouterLink
                        to="/checkout"
                        class="text-center px-6 font-light text-[0.9rem] py-2 rounded-xl btn-2 hover"
                        ><button>Proceed to Checkout</button></RouterLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-enter-from,
.cart-leave-to {
    opacity: 0;
    width: 40px;
}

.cart-enter-active,
.cart-leave-active {
    transition: all 0.5s ease-in-out;
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
