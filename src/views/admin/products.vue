<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAdminStore } from '../../store/admin';
import { toggleEdit, edit, toggleUploadModal, uploadModal } from '../../functions/functions';
import addProductsModal from '../../components/addProductsModal.vue';
import { onMounted } from 'vue';

const adminStore = useAdminStore();

onMounted(async () => {
    await adminStore.fetchProducts();
});
</script>
<template>
    <div class="flex flex-col space-y-5 min-h-screen w-full p-4 relative">
        <div
            class="w-full px-3 md:pl-10 py-3 min-h-14 bg-linear-to-br center from-blue-500 to-blue-100 rounded-xl text-white shadow"
        >
            <h1 class="text-3xl">My Products</h1>
        </div>
        <div class="w-full flex items-center justify-end gap-3">
            <button
                class="px-3 py-1 bg-red-200 border border-red-400 text-red-400 rounded-xl"
                @click="toggleEdit"
            >
                Delete
            </button>
            <button
                class="px-3 py-1 bg-blue-400 text-white rounded-xl flex items-center gap-1"
                @click="toggleUploadModal"
            >
                Add new product
                <span
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.478 9.011h.022c2.485 0 4.5 2.018 4.5 4.508c0 2.32-1.75 4.232-4 4.481m-.522-8.989q.021-.248.022-.5A5.505 5.505 0 0 0 12 3a5.505 5.505 0 0 0-5.48 5.032m10.958.98a5.5 5.5 0 0 1-1.235 3.005M6.52 8.032A5.006 5.006 0 0 0 2 13.018a5.01 5.01 0 0 0 4 4.91m.52-9.896q.237-.023.48-.023c1.126 0 2.165.373 3 1.002M12 13v8m0-8c-.7 0-2.008 1.994-2.5 2.5M12 13c.7 0 2.008 1.994 2.5 2.5"
                        /></svg
                ></span>
            </button>
        </div>
        <div class="center">
            <div class="w-full h-full">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4"
                >
                    <div
                        class="min-h-44 flex flex-col bg-white rounded-b-xl shadow relative"
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
                            :class="edit ? 'opacity-100' : 'opacity-100'"
                            v-if="edit"
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
        <addProductsModal v-if="uploadModal" class="h-full w-full fixed inset-0" />
    </div>
</template>
