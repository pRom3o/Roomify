<script setup>
import { RouterView } from 'vue-router';
import { ref, onMounted, provide } from 'vue';
import userProvider from './components/provider/userProvider.vue';
import Toast from './components/Toast.vue';
import { supabase } from './lib/supabaseClient';
import { useCartStore } from '@/store/cart';

const user = ref(null);

onMounted(async () => {
    const cartStore = useCartStore();
    // const cartStore = useCartStore();
    const { data } = await supabase.auth.getSession();
    if (data.session) {
        user.value = data.session.user;
    }
    cartStore.fetchCart(user.value.id);

    supabase.auth.onAuthStateChange((event, session) => {
        user.value = session?.user || null;
    });
});

provide('auth', { user });
</script>

<template>
    <Toast class="z-101" />
    <div class="font-kanit">
        <userProvider> <RouterView class="z-10" /></userProvider>
    </div>

    <!-- Drop this anywhere (like bottom of App.vue) -->
    <div class="fixed bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded z-[9999]">
        <span class="block sm:hidden">default (&lt;640px)</span>
        <span class="hidden sm:block md:hidden">sm (≥640px)</span>
        <span class="hidden md:block lg:hidden">md (≥768px)</span>
        <span class="hidden lg:block xl:hidden">lg (≥1024px)</span>
        <span class="hidden xl:block 2xl:hidden">xl (≥1280px)</span>
        <span class="hidden 2xl:block">2xl (≥1536px)</span>
    </div>
</template>

<style scoped></style>
