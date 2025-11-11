<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { showToast } from '@/services/toastServices';
import { useRouter } from 'vue-router';

const router = useRouter();
// const auth = inject('auth');
const user = ref({});

onMounted(async () => {
    try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            console.log('user not found');
        }
        user.value = data.user;
    } catch (err) {
        console.log('error', err.message);
    }
});

const handleConfirm = async () => {
    try {
        if (!user.value) {
            throw new Error('No user available');
        }

        // Insert profile
        const { error: insertError } = await supabase.from('').insert([
            {
                id: user.value.id,
                name: user.value.user_metadata.name,
                phone: user.value.user_metadata.phone,
                email: user.value.user_metadata.email,
            },
        ]);

        if (insertError) throw insertError;

        showToast('inserted', 'success');

        router.push('/');
    } catch (err) {
        console.error('Error:', err.message);
    }
};
</script>

<template>
    <div class="w-full min-h-screen center flex-col primary-bg px-4">
        <div
            id="form"
            class="col-center w-full md:w-xl py-6 bg-[#fff] shadow-xl rounded-xl text-center space-y-4"
        >
            <div class="col-center space-y-1">
                <h1 class="md:text-4xl text-3xl headers font-light">Welcome to Roomify</h1>
                <p class="leading-5 font-light text-xs md:text-base p-text">
                    Please enjoy your stay, <strong>{{ user.email }}</strong>
                </p>
            </div>

            <button
                class="px-4 py-2 submit rounded-xl hover:bg-[#efe1d0] hover center"
                @click="handleConfirm"
            >
                <RouterLink to="/">Go to homepage</RouterLink>
            </button>
        </div>
    </div>
</template>

<style scoped>
input {
    border: 1px solid #e9d4bc;
    border-radius: 3px;
    outline: 1px solid #e9d4bc;
    font-weight: 300;
}

input::placeholder {
    font-weight: light;
}

input:focus {
    outline: none; /* remove default blue glow */
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, #f7ede3, #e9d4bc, #d2b08a) 1;
    border-radius: 6px; /* optional */
}

input:focus,
#form {
    outline: none;
    border: 2px solid #e9d4bc;
    box-shadow:
        0 0 8px 2px #e9d4bc66,
        0 0 16px 4px #d2b08a55;
}

label {
    font-weight: 300;
}
</style>
