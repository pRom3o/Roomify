<script setup>
// import { ref } from 'vue';
import { openCartModal } from '../services/cartServices';

import { inject, onMounted, ref } from 'vue';
// import { useRouter } from 'vue-router';

const auth = inject('auth');
const user = ref({});

onMounted(() => {
    user.value = auth.user;
});
</script>

<template>
    <div
        class="w-full min-h-10 p-2 border border-b-[#dcdddd] shadow-xs font-kanit sticky top-0 z-100 nav-bg"
    >
        <div class="flex items-center justify-between w-full px-4">
            <h2 class="font-bold text-xl text-[#e4c199]">
                <RouterLink to="/" class="bg-none">ROOMIFY</RouterLink>
            </h2>
            <ul class="md:flex items-center md:space-x-5 hidden">
                <li class="">
                    <RouterLink to="/" class="px-3 py-2 hover:bg-[#e7c9a6] rounded-2xl hover"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/shop" class="px-3 py-2 hover:bg-[#e7c9a6] rounded-2xl hover"
                        >Shop</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/contact" class="px-3 py-2 hover:bg-[#e7c9a6] rounded-2xl hover"
                        >Contact</RouterLink
                    >
                </li>
            </ul>
            <button
                class="bg-[#ecdac6] py-2 px-4 hover:rounded-2xl rounded-lg text-black hover:bg-[#e7ccae] hover center text-[1em]"
                @click="auth.logout()"
                v-if="user?.value"
            >
                Logout
            </button>
            <button
                class="bg-[#ecdac6] py-2 px-4 hover:rounded-2xl rounded-lg text-black hover:bg-[#e7ccae] hover center text-[1em]"
                @click="openCartModal"
                v-if="user?.value"
            >
                <i class="fi fi-rr-shopping-cart-notification px-2">cart</i>
            </button>
            <button
                class="bg-[#ecdac6] py-2 px-4 hover:rounded-2xl rounded-lg text-black hover:bg-[#e7ccae] hover center text-[1em]"
                v-else
            >
                <RouterLink to="/auth/login"><i>Login/Signup</i></RouterLink>
            </button>
        </div>
    </div>
</template>

<style scoped>
.bg-none {
    background-color: inherit;
}
</style>
