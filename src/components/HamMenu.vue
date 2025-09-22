<script setup>
import { ref, inject } from 'vue';
import { openClose, switchIcon } from '../functions/functions';

const routeLinks = ref([
    { id: 0, name: 'Home', path: '/', qty: 1 },
    { id: 1, name: 'shop', path: '/shop', qty: 1 },
    { id: 2, name: 'contact', path: '/contact', qty: 1 },
]);

const auth = inject('auth');
</script>

<template>
    <div class="w-full h-full bg-[#666666]/50">
        <div
            class="h-full w-full backdrop-blur-xs flex items-center justify-end"
            @click.self="switchIcon"
        >
            <transition name="cart"
                ><div
                    v-if="!openClose"
                    class="md:w-[35%] w-full h-full bg-[#fffffc] pt-20 pb-20 px-5"
                >
                    <div class="min-h-80 w-full center" v-if="routeLinks.length > 0">
                        <transition-group name="items" tag="ul" class="w-full p-3">
                            <li
                                v-for="items in routeLinks"
                                :key="items.id"
                                class="flex items-center justify-between w-full border-b py-3"
                            >
                                <router-link :to="items.path">{{ items.name }}</router-link>
                            </li>
                            <button
                                class="bg-[#ecdac6] py-2 px-4 hover:rounded-2xl rounded-lg text-black hover:bg-[#e7ccae] hover center text-[1em]"
                                @click="auth.logout()"
                                v-if="user"
                            >
                                Logout
                            </button>
                        </transition-group>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.cart-enter-from,
.cart-leave-to {
    opacity: 0;
    width: 0px;
}

.cart-enter-active,
.cart-leave-active {
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
