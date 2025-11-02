<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { toast_message, toast_type, toast_visible } from '../services/toastServices';
</script>

<template>
    <Transition name="toast"
        ><div
            v-if="toast_visible"
            :class="[
                'fixed top-5 left-[35%] z-50 px-4 py-2 rounded-2xl  transition-all',
                toast_type === 'success'
                    ? 'bg-green-200 border border-green-400'
                    : 'bg-red-200 border border-red-400',
            ]"
        >
            {{ toast_message }}
        </div></Transition
    >
</template>

<style scoped>
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: scale(0.2);
    transform: translateY(-30px);
}

.toast-enter-active,
.toast-leave-active {
    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
}
</style>
