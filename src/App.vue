<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="font-kanit"><NavBar /> <RouterView /><Footer /></div>
</template>

<style scoped></style>
