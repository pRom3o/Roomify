<script setup>
import SignupForm from '../components/Auth/SignupForm.vue';
import LoginForm from '../components/Auth/LoginForm.vue';
import { ref } from 'vue';

const currentForm = ref('signup');
</script>

<!-- <template><component :is="route.params.type === 'login' ? LoginForm : SignupForm" /></template> -->

<template>
  <div>
    <Transition name="switch-form"
      ><SignupForm v-if="currentForm === 'signup'" @switch-form="currentForm = $event" />
      <LoginForm v-else @switch-form="currentForm = $event"
    /></Transition>
  </div>
</template>

<style scoped>
.switch-form-enter-from,
.switch-form-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.switch-form-enter-active,
.switch-form-leave-active {
  transition:
    opacity 0.7s ease-in-out,
    transform 0.7s ease-in-out;
}
</style>
