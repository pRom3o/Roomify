<script setup>
import { inject } from 'vue';
import { openClose, switchIcon } from '../functions/functions';

const auth = inject('auth');
const user = auth.user;
</script>

<template>
    <div class="fixed top-0 left-0 w-full z-80 shadow">
        <transition name="nav"
            ><div
                v-if="openClose"
                class="w-full bg-[#e8efff] flex flex-col items-center justify-between p-4"
                :class="openClose ? 'h-screen shadow-md' : 'h-0'"
            >
                <div class="h-[90%] w-full col-center gap-5">
                    <ul
                        class="w-full p-3 flex flex-col items-center justify-between space-y-6 text-xl"
                    >
                        <li @click="switchIcon">
                            <router-link to="/" class="px-5 py-2 rounded-2xl">Home</router-link>
                        </li>
                        <li @click="switchIcon">
                            <router-link to="/shop" class="px-5 py-2 rounded-2xl">Shop</router-link>
                        </li>
                        <li @click="switchIcon">
                            <router-link to="/contact" class="px-5 py-2 rounded-2xl"
                                >Contact</router-link
                            >
                        </li>
                        <li @click="switchIcon" v-if="user">
                            <router-link to="/orders" class="px-5 py-2 rounded-2xl"
                                >My Orders</router-link
                            >
                        </li>
                    </ul>
                    <button
                        class="py-2 px-4 hover:rounded-2xl rounded-lg text-black btn-2 hover center text-[1em]"
                        @click="auth.logout()"
                        v-if="user"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.nav-enter-from,
.nav-leave-to {
    opacity: 0;
    width: 0px;
}

.nav-enter-active,
.nav-leave-active {
    transition: all 0.5s ease-in-out 0.1s;
}

h3 {
    font-size: large;
}

.items-enter-from,
.items-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.items-enter-active,
.items-leave-active {
    transition: all 0.4s ease-in-out 0.1s;
}
</style>
