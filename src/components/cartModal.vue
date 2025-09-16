<script setup>
import { isCartOpen, openCartModal } from '../services/cartServices';
</script>

<template>
  <div class="w-full h-full bg-black/50">
    <div
      class="h-full w-full backdrop-blur-xs flex items-center justify-end"
      @click.self="openCartModal"
    >
      <transition name="cart"
        ><div v-if="isCartOpen" class="md:w-[35%] w-full h-full bg-[#e5e5e5] pt-20 pb-10 px-5">
          <div class="flex flex-col items-center justify-between h-full space-y-10">
            <h1 class="text-5xl font-light">Your Cart:</h1>
            <div class="min-h-80 w-full center">
              <transition-group name="items" tag="ul" v-if="isCartOpen" class="w-full p-3">
                <li
                  v-for="n in 4"
                  :key="n"
                  class="flex items-center justify-between w-full border-b py-3"
                >
                  <div class="flex flex-col space-y-3">
                    <h3>Product Name</h3>
                    <p class="price">product price</p>
                  </div>
                  <div class="flex flex-col items-center space-y-3">
                    <button @click="deleteFromCart" class="w-4 h-4 border rounded-full"></button>
                    <p class="font-normal">item amount</p>
                  </div>
                </li>
              </transition-group>
            </div>
            <div class="flex items-center justify-end w-full">
              <button class="p-3">Clear cart</button>
            </div>
          </div>
        </div></transition
      >
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
