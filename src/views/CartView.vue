<script setup>
import { ref } from 'vue';

const cartItems = ref([
    { id: 0, name: 'Product A', price: '$20', qty: 1 },
    { id: 1, name: 'Product B', price: '$20', qty: 1 },
    { id: 2, name: 'Product C', price: '$20', qty: 1 },
    { id: 3, name: 'Product D', price: '$20', qty: 1 },
]);

const deleteFromCart = (id) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const clearCart = () => {
    cartItems.value = [];
};
</script>

<template>
    <div class="min-h-screen flex flex-col items-center w-full p-4 space-y-10 nav-bg">
        <div class="w-full h-40 col-center border p-4">
            <h1>Shopping Cart</h1>
        </div>
        <div class="flex justify-center w-full border p-4 gap-5 px-10">
            <div class="flex flex-col gap-5 items-center md:w-[70%]">
                <div
                    class="px-8 py-2 border border-gray-400/10 flex items-center justify-between rounded-xl w-full bg-[#f6dab7]"
                >
                    <p>Product</p>
                    <div class="flex w-1/2 justify-between">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-5 items-center md:w-[30%]">
                <div
                    class="p-3 border border-gray-400/30 flex flex-col nav-bg rounded-xl w-full space-y-4"
                >
                    <h3>Order Summary</h3>
                    <hr class="text-gray-400/30" />
                    <div class="space-y-3">
                        <div class="flex w-full justify-between">
                            <p>Items</p>
                            <strong>9</strong>
                        </div>
                        <div class="flex w-full justify-between">
                            <p>Sub Total</p>
                            <strong>$740.00</strong>
                        </div>
                        <div class="flex w-full justify-between">
                            <p>Shipping</p>
                            <strong>$00.00</strong>
                        </div>
                        <div class="flex w-full justify-between">
                            <p>Taxes</p>
                            <strong>$00.00</strong>
                        </div>
                        <div class="flex w-full justify-between">
                            <p>Cupon Discount</p>
                            <strong>-$100.00</strong>
                        </div>
                        <hr class="text-gray-400/30" />
                        <div class="flex w-full justify-between">
                            <p>Total</p>
                            <strong>$640.00</strong>
                        </div>
                    </div>
                    <button
                        class="text-center px-6 py-3 rounded-4xl cart hover:bg-[#e7ccae] hover hover:rounded-full"
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
