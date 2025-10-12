<script setup>
import { showToast } from '../services/toastServices';
import { useRouter } from 'vue-router';
import { userEmail, userPassword, signinUser } from '../services/authServices';
import LoadingIcon from '/public/icons/LoadingIcon.vue';
import { ref } from 'vue';
const emit = defineEmits(['switch-form']);

const router = useRouter();

const loading = ref(false);
const handleSignin = async () => {
    loading.value = true;
    try {
        const data = await signinUser(userEmail.value, userPassword.value);

        if (data?.user) {
            showToast(`Welcome back ${data.user.user_metadata.name}`, 'success');

            router.push('/');
        }
    } catch (error) {
        showToast(`${error.message}`, 'failed');
    }
};
</script>

<template>
    <div class="w-full min-h-screen center flex-col main-bg px-4">
        <div
            class="md-center w-full md:w-[90%] md:h-[550px] p-6 lg:gap-6 gap-4 xl:gap-0 section-bg shadow rounded-xl"
        >
            <div class="text-center col-center md:w-[50%] h-[20%] md:h-full">
                <h1 class="lg:text-4xl text-3xl headers">Welcome back to Roomify</h1>
                <p class="font-light"><i>we're happy to have you back...</i></p>
                <img src="../../assets/img/login-bro.png" alt="" class="md:flex hidden h-[80%]" />
            </div>
            <div class="vertical-line md:block hidden"></div>
            <form class="center pb-10 md:w-1/2 h-[80%] lg:h-full w-full p-6 md:px-0">
                <div class="xl:w-2/3 w-full h-full col-center space-y-5">
                    <div class="flex flex-col w-full space-y-3">
                        <label for="userEmail">Email *</label
                        ><input type="email" name="userEmail" id="userEmail" v-model="userEmail" />
                    </div>
                    <div class="flex flex-col w-full space-y-3">
                        <label for="userPassword">Password *</label
                        ><input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            v-model="userPassword"
                        />
                    </div>

                    <button
                        class="w-full px-4 py-2 submit rounded-xl hover:bg-[#efe1d0] hover"
                        @click.prevent="handleSignin"
                        v-if="!loading"
                    >
                        Login
                    </button>
                    <button
                        class="w-full px-4 py-2 submit rounded-xl hover:bg-[#efe1d0] hover center"
                        v-else
                    >
                        <LoadingIcon />
                    </button>
                    <button @click.prevent="emit('switch-form', 'signup')" class="underline">
                        <i>New user?</i> Signup here..
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.vertical-line {
    border-left: 2px solid #fff1e0; /* Adjust thickness, style, and color */
    height: 100%; /* Adjust height as needed */
}

input,
textarea {
    border: 1px solid #e9d4bc;
    border-radius: 3px;
    outline: 1px solid #e9d4bc;
    padding: 5px;
    font-weight: 300;
}

input:focus,
textarea:focus {
    caret-color: #e9d4bc;
}

label {
    font-weight: 300;
}
</style>
