<script setup>
import { openClose, switchIcon } from '../functions/functions';
import IconHam from '/public/icons/IconHam.vue';
import IconX from '/public/icons/IconX.vue';
import HamMenu from './HamMenu.vue';

import { inject, onMounted } from 'vue';
// import { useRouter } from 'vue-router';

const auth = inject('auth');
const user = auth.user;

onMounted(() => {
    console.log(user.value.email);
});
</script>

<template>
    <div
        class="w-full min-h-10 pr-2 py-2 border border-b-[#dcdddd] shadow-xs font-kanit sticky top-0 nav-bg"
    >
        <div class="flex items-center justify-between w-full px-4">
            <button class="h-full w-[20px] md:hidden flex z-20" @click="switchIcon">
                <Transition name="fade" mode="out-in">
                    <component :is="!openClose ? IconHam : IconX" />
                </Transition>
            </button>
            <HamMenu :class="openClose ? 'h-screen' : 'h-0'" />

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
                v-if="user"
            >
                <i class="fi fi-rr-shopping-cart-notification px-2"
                    ><RouterLink to="/cart" class="bg-none">cart</RouterLink></i
                >
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

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: rotatex(45deg);
}

.fade-enter-active,
.fade-leave- {
    transition: all 0.7s ease-in-out 0.3s;
}
</style>
