<script setup>
import { ref, inject } from 'vue';
import { openClose, switchIcon } from '../functions/functions';

const routeLinks = ref([
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'shop', path: 'shop' },
    { id: 2, name: 'contact', path: 'contact' },
]);

const auth = inject('auth');
</script>

<template>
    <div class="fixed top-0 left-0 w-full z-80 shadow">
        <transition name="nav"
            ><div
                v-if="openClose"
                class="w-full bg-[#fffffc] flex flex-col items-center justify-between p-4"
                :class="openClose ? 'h-screen' : 'h-0'"
            >
                <div class="h-[90%] w-full col-center gap-5" v-if="routeLinks.length > 0">
                    <transition-group
                        name="items"
                        tag="ul"
                        class="w-full p-3 flex flex-col items-center justify-between space-y-6 text-xl"
                    >
                        <li v-for="items in routeLinks" :key="items.id" @click="switchIcon">
                            <router-link :to="items.path" class="px-5 py-2 rounded-2xl">{{
                                items.name
                            }}</router-link>
                        </li>
                    </transition-group>
                    <button
                        class="py-2 px-4 hover:rounded-2xl rounded-lg text-black btn-2 hover center text-[1em]"
                        @click="auth.logout()"
                        v-if="auth.user"
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
