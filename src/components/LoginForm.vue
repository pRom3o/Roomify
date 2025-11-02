<script setup>
import { showToast } from '../services/toastServices';
import { useRouter } from 'vue-router';
import { userEmail, userPassword, signinUser, insertProfiles } from '../services/authServices';
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
            await insertProfiles(
                data.user.id,
                data.user.user_metadata.name,
                data.user.user_metadata.phone,
                data.user.email,
            );
            router.push('/');
        }
    } catch (error) {
        showToast(`${error.message}`, 'failed');
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="w-full min-h-screen center flex-col primary-bg px-4">
        <div
            class="flex items-center justify-center md:flex-row flex-col w-full md:w-[90%] md:h-[550px] md:p-6 pt-4 lg:gap-6 gap-4 xl:gap-0 bg-[#fffcfc] shadow rounded-xl"
        >
            <div class="text-center col-center md:w-[50%] h-[20%] md:h-full">
                <h1 class="lg:text-4xl text-2xl headers text-[#7183f8]">Welcome back to Roomify</h1>
                <p class="font-light text-[12px] lg:text-base text-[#333]">
                    <i>we're happy to have you back...</i>
                </p>
                <img src="/Images/login.png" alt="" class="md:flex hidden h-[80%]" />
            </div>
            <div class="vertical-line md:block hidden"></div>
            <form class="center md:w-1/2 h-[80%] lg:h-full w-full p-6 md:px-0">
                <div class="xl:w-2/3 w-full h-full col-center space-y-5">
                    <div class="flex flex-col w-full space-y-3">
                        <label for="userEmail" class="text-xs lg:text-sm xl:text-base"
                            >Email *</label
                        ><input type="email" name="userEmail" id="userEmail" v-model="userEmail" />
                    </div>
                    <div class="flex flex-col w-full space-y-3">
                        <label for="userPassword" class="text-xs lg:text-sm xl:text-base"
                            >Password *</label
                        ><input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            v-model="userPassword"
                        />
                    </div>

                    <button
                        class="w-full px-4 py-2 rounded-lg btn-2 hover text-sm xl:text-base text-[#4b4b4b] hover"
                        @click.prevent="handleSignin"
                        v-if="!loading"
                    >
                        Login
                    </button>
                    <button
                        class="w-full px-4 py-2 rounded-lg btn-2 hover text-sm xl:text-base text-[#4b4b4b] hover center"
                        v-else
                    >
                        <LoadingIcon />
                    </button>
                    <button
                        @click.prevent="emit('switch-form', 'signup')"
                        class="underline under text-[#7183f8] hover:text-[#bdd2ff] hover text-sm"
                    >
                        <i>New user?</i> Signup here..
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
input,
textarea {
    border: 1px solid #bdd2ff;
    border-radius: 3px;
    outline: 1px solid #bdd2ff;
    padding: 5px;
    font-weight: 300;
}

input:focus,
textarea:focus {
    caret-color: #7183f8;
}

input:focus,
textarea:focus {
    outline: none;
    border: 2px solid #bdd2ff;
    border-radius: 7px;
    box-shadow:
        0 0 8px 2px #bdd2ff66,
        0 0 16px 4px #7183f855;
}

label {
    font-weight: 300;
}
</style>
