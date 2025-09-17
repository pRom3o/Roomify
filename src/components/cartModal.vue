<script setup>
import { ref } from 'vue';
import { isCartOpen, openCartModal } from '../services/cartServices';

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
  <div class="w-full h-full bg-[#666666]/50">
    <div
      class="h-full w-full backdrop-blur-xs flex items-center justify-end"
      @click.self="openCartModal"
    >
      <transition name="cart"
        ><div v-if="isCartOpen" class="md:w-[35%] w-full h-full bg-[#fffffc] pt-20 pb-20 px-5">
          <div class="flex flex-col items-center h-full space-y-10">
            <h1 v-if="cartItems.length > 0" class="text-5xl font-light">Your Cart:</h1>
            <div class="min-h-80 w-full center" v-if="cartItems.length > 0">
              <transition-group name="items" tag="ul" class="w-full p-3">
                <li
                  v-for="items in cartItems"
                  :key="items.id"
                  class="flex items-center justify-between w-full border-b py-3"
                >
                  <div class="flex flex-col space-y-3">
                    <h3>{{ items.name }}</h3>
                    <p class="price">{{ items.price }}</p>
                  </div>
                  <div class="flex flex-col items-center space-y-3">
                    <button
                      @click="deleteFromCart(items.id)"
                      class="w-4 h-4 border rounded-full"
                    ></button>
                    <p class="font-normal">{{ items.qty }}</p>
                  </div>
                </li>
              </transition-group>
            </div>
            <div v-else class="flex items-center justify-center h-full w-full bg-[#fffffc]">
              <h4 class="text-4xl font-light"><i>Cart is empty...</i></h4>
            </div>
          </div>
          <div class="flex items-center justify-end w-full">
            <button
              @click="clearCart"
              class="bg-black p-3 rounded-2xl text-[#ededed] hover:bg-[#333333] hover:text-[#ffffff] hover"
            >
              Clear cart
            </button>
          </div>
        </div>
      </transition>
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
