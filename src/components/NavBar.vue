<script setup>
import { ref } from 'vue';

const cartItemsCount = ref(0);

// const route = useRoute
// const isActive = (path) => route.path === path
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
        class="bg-black p-3 rounded-2xl text-[#ededed] hover:bg-[#333333] hover:text-[#ffffff] hover"
      >
        Cart ({{ cartItemsCount }})
      </button>
    </div>
  </div>
</template>

<style scoped>
.hover {
  transition: all 0.3s ease-in-out 0.1s;
}
</style>
