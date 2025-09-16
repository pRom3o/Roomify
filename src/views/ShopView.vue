<script setup>
import cartModal from '../components/cartModal.vue';
import { isCartOpen } from '../services/cartServices';
</script>

<template>
  <div class="w-full bg-[#fff] center">
    <h1 class="text-6xl font-kanit">Shop</h1>
    <cartModal :class="isCartOpen ? 'fixed top-0 ' : ' hidden'" />
  </div>
</template>
