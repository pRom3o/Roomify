<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAdminStore } from '../../store/admin';
import { toggleEdit, edit } from '../../functions/functions';

// const filters = ['Cakes', 'Doughnuts', 'Others'];

const adminStore = useAdminStore();
</script>
<template>
    <div class="center min-h-screen w-full p-4">
        <div class="w-full h-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
                <div
                    class="min-h-44 flex flex-col bg-white rounded-b-xl shadow relative"
                    :class="edit == false ? 'opacity-65' : 'opacity-100'"
                    v-for="product in adminStore.products"
                    :key="product.id"
                >
                    <img :src="product.image_url" alt="" class="w-full h-44" />
                    <div class="p-2 w-full">
                        <h1>{{ product.name }}</h1>
                        <p>₦{{ product.price }}</p>
                    </div>
                    <span
                        class="text-red-400 bg-red-50 p-1 rounded-full absolute -top-3 -right-3 shadow-lg"
                        :class="edit == false ? 'opacity-100' : 'opacity-100'"
                        v-if="edit == false"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                            /></svg
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>
