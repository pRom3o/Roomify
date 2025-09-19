<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();

const hideLayout = computed(() => route.path !== '/auth/login' && route.path !== '/auth/signup' && route.path !== '/confirmation');
console.log(hideLayout.value);
</script>

<template>
  <div class="font-kanit" v-if="hideLayout">
    <NavBar />
    <RouterView /><Footer />
  </div>
  <div class="font-kanit" v-if="!hideLayout">
    <RouterView />
  </div>
  <!-- Drop this anywhere (like bottom of App.vue) -->
  <div class="fixed bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded z-[9999]">
    <span class="block sm:hidden">default (&lt;640px)</span>
    <span class="hidden sm:block md:hidden">sm (≥640px)</span>
    <span class="hidden md:block lg:hidden">md (≥768px)</span>
    <span class="hidden lg:block xl:hidden">lg (≥1024px)</span>
    <span class="hidden xl:block 2xl:hidden">xl (≥1280px)</span>
    <span class="hidden 2xl:block">2xl (≥1536px)</span>
  </div>
</template>

<style scoped></style>
