<script setup>
import { openClose, switchIcon } from '../functions/functions';
import IconHam from '/public/icons/IconHam.vue';
import IconX from '/public/icons/IconX.vue';
import HamMenu from './HamMenu.vue';

import { inject, onMounted } from 'vue';

const auth = inject('auth');
const user = auth.user;

onMounted(() => {
    console.log(user.value.email);
});
</script>

<template>
    <div
        class="w-full min-h-8 pr-2 py-2 center shadow-lg font-kanit fixed top-0 z-50 backdrop-blur-lg"
    >
        <div class="flex items-center justify-between lg:w-[80%] w-full px-4">
            <button class="h-full w-[20px] md:hidden flex z-90" @click="switchIcon">
                <Transition name="fade" mode="out-in">
                    <component :is="!openClose ? IconHam : IconX" />
                </Transition>
            </button>
            <HamMenu :class="openClose ? 'h-screen' : 'h-0'" />

            <h2 class="font-bold md:text-xl text-[#cca3a3]">CELINE'S TREATS</h2>

            <ul class="md:flex items-center md:space-x-5 hidden">
                <li class="">
                    <RouterLink to="/" class="px-3 py-1 text-sm rounded-2xl hover nav"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="shop" class="px-3 py-1 text-sm rounded-2xl hover nav"
                        >Shop</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="contact" class="px-3 py-1 text-sm rounded-2xl hover nav"
                        >Contact</RouterLink
                    >
                </li>
            </ul>
            <button class="cart hover md:flex hidden" v-if="user">
                <RouterLink to="/cart" class="bg-none"
                    ><i class="fi fi-rr-shopping-cart-notification px-2"></i>cart</RouterLink
                >
            </button>
            <button
                class="px-3 py-1 bg-[#87878753] text-center flex md:hidden text-white rounded-3xl hover:bg-[#fbdcdc] hover:text-[#333] hover"
                v-if="user"
            >
                <RouterLink to="/cart" class="bg-none"
                    ><i class="fi fi-rr-shopping-cart-notification text-xs px-1"></i
                    >cart</RouterLink
                >
            </button>
            <button
                class="cart py-1 px-4 hover:rounded-2xl rounded-lg text-black hover center text-[1em]"
                v-else
            >
                <RouterLink to="/auth/login"><i>Login/Signup</i></RouterLink>
            </button>
        </div>
    </div>
</template>

<style scoped>
.bg-none {
    background-color: none;
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
