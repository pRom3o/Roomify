<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAdminStore } from '../../store/admin';
import { supabase } from '../../lib/supabaseClient';
import { showToast } from '../../services/toastServices';
import {
    toggleDeleteProduct,
    deleteProduct,
    toggleUploadModal,
    uploadModal,
    confirmDelete,
    showConfirm,
} from '../../functions/functions';

import addProductsModal from '../../components/addProductsModal.vue';
import { onMounted, ref } from 'vue';

const adminStore = useAdminStore();

const deleteProductNow = async (productId) => {
    if (!productId) return;

    try {
        const { data, error } = await supabase.from('products').delete().eq('id', productId);

        if (error) throw error;

        showToast('Product deleted', 'success');
        await adminStore.fetchProducts();
        return data;
    } catch (err) {
        showToast(`${err.message}`, 'failed');
    }
};
const options = ref(false);
const showOptions = () => {
    options.value = !options.value;
};

onMounted(async () => {
    await adminStore.fetchProducts();
});
</script>
<template>
    <div
        class="flex flex-col space-y-5 min-h-screen w-full p-2 relative text-neutral-700"
        @click.self="showOptions"
    >
        <div
            class="w-full px-3 md:pl-10 py-3 min-h-14 bg-linear-to-br center from-blue-500 to-blue-100 rounded-xl text-white shadow"
        >
            <h1 class="text-3xl">My Products</h1>
        </div>
        <div class="w-full flex items-center justify-end">
            <div class="center relative">
                <button
                    class="flex items-center gap-1 hover:text-black text-sm rounded-xl border border-neutral-200 hover:bg-blue-50 px-2 py-1"
                    @click="showOptions"
                    v-if="!deleteProduct"
                >
                    Options
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 transition-transform duration-200"
                        :class="options ? 'rotate-180' : ''"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <button
                    class="flex items-center gap-1 hover:text-black text-sm rounded-xl border border-neutral-200 hover:bg-blue-50 px-2 py-1"
                    @click="toggleDeleteProduct"
                    v-else
                >
                    Cancel
                </button>
                <div
                    class="min-h-10 flex flex-col justify-center space-y-3 rounded-xl w-36 absolute -bottom-[98px] z-10 right-2 p-3 bg-white shadow-sm border-[0.1px] border-blue-100 hover"
                    v-if="options"
                >
                    <button
                        class="w-full px-2 py-1 bg-red-200/80 border border-red-400 text-red-400 rounded-lg center gap-1 sm:text-xs text-sm hover:bg-red-100"
                        @click="
                            () => {
                                (toggleDeleteProduct(), showOptions());
                            }
                        "
                    >
                        Delete
                        <span
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-trash text-destructive"
                            >
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg
                        ></span>
                    </button>
                    <button
                        class="px-2 py-1 bg-blue-400 text-white rounded-lg center gap-1 sm:text-xs text-sm hover:opacity-90"
                        @click="
                            () => {
                                (toggleUploadModal(), showOptions());
                            }
                        "
                    >
                        Add product
                        <span class=""
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
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
            </div>
        </div>
        <div class="center">
            <div class="w-[90%] sm:w-full h-full center px-2">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4"
                >
                    <div
                        class="min-h-44 flex flex-col bg-white rounded-b-xl shadow relative"
                        v-for="product in adminStore.products"
                        :key="product.id"
                    >
                        <img :src="product.image_url" alt="" class="w-full h-44" />
                        <div
                            class="absolute inset-0 h-full w-full bg-neutral-500 opacity-40 rounded-b-xl"
                            v-if="deleteProduct"
                        ></div>
                        <div class="p-2 w-full">
                            <h1 class="text-sm">{{ product.name }}</h1>
                            <p class="text-xs text-neutral-600">
                                ₦{{ product.price.toLocaleString() }}
                            </p>
                        </div>
                        <button
                            @click="showConfirm"
                            class="text-red-400 bg-red-50 p-1 rounded-full absolute -top-3 -right-3 shadow-lg"
                            v-if="deleteProduct"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <addProductsModal v-if="uploadModal" class="h-full w-full fixed inset-0" />
        <div
            class="center space-y-3 h-full w-full inset-0 fixed z-10 right-2 p-3 bg-black/40"
            v-if="confirmDelete"
            @click.self="showConfirm"
        >
            <div
                class="min-h-10 w-48 bg-white flex flex-col justify-center p-3 shadow-sm border-[0.1px] rounded-xl border-blue-100 hover space-y-3"
            >
                <p class="text-center">Delete this product?</p>
                <button
                    @click="deleteProductNow(product.id)"
                    class="px-2 py-1 bg-red-200/80 border border-red-400 text-red-400 rounded-lg sm:text-xs text-sm hover:bg-red-100"
                >
                    Yes
                </button>
                <button
                    @click="toggleDeleteProduct"
                    class="px-2 py-1 bg-blue-400 text-white rounded-lg sm:text-xs text-sm hover:opacity-90"
                >
                    No
                </button>
            </div>
        </div>
    </div>
</template>
