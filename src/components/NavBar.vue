<script setup>
import { openClose, switchIcon } from '@/functions/functions';
import IconHam from '/public/icons/IconHam.vue';
import IconX from '/public/icons/IconX.vue';
import HamMenu from './HamMenu.vue';
import { useCartStore } from '../store/cart';
import { inject, onMounted } from 'vue';

const auth = inject('auth');
const user = auth.user;
const cartStore = useCartStore();

onMounted(() => {
    cartStore.fetchCart(user.value.id);
    console.log(user.value.email);
});
</script>

<template>
    <div class="w-full min-h-10 py-2 center shadow-lg font-kanit fixed top-0 z-50 backdrop-blur-lg">
        <div class="flex items-center md:justify-evenly justify-between space-x-5 w-full px-4 pt-1">
            <button class="h-full w-[20px] md:hidden flex z-90" @click="switchIcon">
                <Transition name="fade" mode="out-in">
                    <component :is="!openClose ? IconHam : IconX" />
                </Transition>
            </button>
            <HamMenu :class="openClose ? 'h-screen' : 'h-0'" />

            <h2 class="font-bold md:text-xl text-blue-500/90">
                <RouterLink to="/" class="">CELINE'S TREATS</RouterLink>
            </h2>

            <ul class="md:flex items-center md:space-x-5 hidden">
                <li class="">
                    <RouterLink to="/" class="px-3 py-1 text-sm rounded-2xl hover nav"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/shop" class="px-3 py-1 text-sm rounded-2xl hover nav"
                        >Shop</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/contact" class="px-3 py-1 text-sm rounded-2xl hover nav"
                        >Contact</RouterLink
                    >
                </li>
            </ul>

            <RouterLink
                to="/cart"
                class="hover flex ites-center relative hover:text-[#3B82F6E6]"
                v-if="user"
                >Cart
                <svg
                    stroke="currentColor"
                    fill="#3B82F6E6"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="w-6 h-6 text-purpla"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                    ></path>
                    <path
                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                    ></path>
                </svg>
                <span
                    class="w-5 h-5 text-xs absolute -top-2 -right-2 bg-[#3B82F6E6] rounded-full center text-[#333]"
                    >{{ cartStore.cartCount }}</span
                ></RouterLink
            >

            <RouterLink
                to="/auth"
                class="nav hover:rounded-2xl rounded-lg text-black hover center text-[1em]"
                v-else
                ><i>Login/Signup</i></RouterLink
            >
            <!-- <button
                class="py-2 px-3 rounded-xl text-white bg-[#3B82F6E6] hover:bg-blue-400 hover:text-[#333] hover center text-sm"
                @click="auth.logout()"
                v-if="user"
            >
                Logout
            </button> -->
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
