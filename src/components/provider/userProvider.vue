<script setup>
import { ref, onMounted, provide, reactive } from 'vue';
import { supabase } from '../../lib/supabaseClient.js';

import { useRouter } from 'vue-router';

const user = ref({});
const loading = ref(true);
const userDetails = reactive({
    email: '',
    name: '',
    number: null,
    id: '',
});

const router = useRouter();

const logout = () => {
    supabase.auth.signOut();
    router.push('/auth/login');
    user.value = null;
    console.log(user.value);
};

onMounted(async () => {
    const { data } = await supabase.auth.getSession();
    if (data && data.session) {
        user.value = data.session.user;
        userDetails.email = data.session.user.email;
        userDetails.name = data.session.user.name;
        userDetails.bio = data.session.user.bio;
        userDetails.id = data.session.user.id;
        console.log(user.value);
    } else {
        user.value = data;
    }
    loading.value = false;

    supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null;
    });
});

provide('auth', { user, loading, userDetails, logout });
</script>

<template>
    <slot />
</template>
