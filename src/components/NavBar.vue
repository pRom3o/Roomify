<script setup>
// import { ref } from 'vue';
import { openCartModal } from '../services/cartServices';
</script>

<template>
  <div
    class="w-full min-h-10 p-2 border border-b-[#dcdddd] shadow-xs font-kanit sticky top-0 z-100 bg-[#fff]"
  >
    <div class="flex items-center justify-between w-full px-4">
      <h2 class="font-bold text-xl">STORE</h2>
      <ul class="md:flex items-center md:space-x-5 hidden">
        <li class="">
          <RouterLink to="/" class="px-3 py-2 hover:bg-[#e5e5e5] rounded-2xl hover"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/shop" class="px-3 py-2 hover:bg-[#e5e5e5] rounded-2xl hover"
            >Shop</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="px-3 py-2 hover:bg-[#e5e5e5] rounded-2xl hover"
            >Contact</RouterLink
          >
        </li>
      </ul>
      <button
        class="bg-black py-2 px-4 rounded-2xl text-[#ededed] hover:bg-[#333333] hover:text-[#ffffff] hover flex items-center text-[1em]"
        @click="openCartModal"
      >
        <i class="fi fi-rr-shopping-cart-notification px-2"></i>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
