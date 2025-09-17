<script setup>
import cartModal from '../components/cartModal.vue';
import { isCartOpen } from '../services/cartServices';
</script>

<template>
  <div class="w-full min-h-screen center flex-col main-bg">
    <cartModal :class="isCartOpen ? 'fixed top-0 ' : ' hidden'" />
    <h1 class="text-4xl">Welcome to Roomify</h1>
    <div class="center w-full h-[600px] p-6">
      <form
        class="flex flex-col items-center space-y-5 shadow min-h-full md:w-lg w-full p-6 section-bg rounded-xl"
      >
        <div class="flex flex-col w-full">
          <label for="userEmail">Email</label><input type="email" name="userEmail" id="userEmail" />
        </div>
        <div class="flex flex-col w-full">
          <label for="userPassword">Email</label
          ><input type="email" name="userEmail" id="userEmail" />
        </div>
      </form>
    </div>
  </div>
</template>
