<script setup>
import SignupForm from '../../components/SignupForm.vue';
import LoginForm from '../../components/LoginForm.vue';

import { ref, onMounted, watch } from 'vue';

import { useRoute } from 'vue-router';
const route = useRoute();

const currentForm = ref('login');
onMounted(() => {
    if (route.query.form === 'signup') {
        currentForm.value = 'signup';
    }
});

// --- Reactively watches for URL changes ---
watch(
    () => route.query.form,
    (form) => {
        currentForm.value = form === 'login' ? 'login' : 'signup';
    },
);
</script>

<template>
    <div class="main-bg h-screen w-full">
        <Transition name="switch-form" mode="out-in">
            <LoginForm v-if="currentForm === 'login'" @switch-form="currentForm = $event" />
            <SignupForm v-else @switch-form="currentForm = $event" />
        </Transition>
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
    transition: all 0.4s ease-in-out 0.1s;
}
</style>
