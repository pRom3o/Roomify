<script setup>
import { ref } from 'vue';

import { showToast } from '../services/toastServices';
import LoadingIcon from '/public/icons/LoadingIcon.vue';
import { userEmail, userPassword, signUpUser, userName, userPhone } from '../services/authServices';
import EmailIcon from '/public/icons/EmailIcon.vue';
const emit = defineEmits(['switch-form']);

const loadingicon = ref(false);
const confirming = ref(false);

const handleSignup = async () => {
    loadingicon.value = true;
    try {
        const { user } = await signUpUser(userEmail.value, userPassword.value);

        if (user) {
            confirming.value = true;
        }
    } catch (error) {
        showToast('error signing up: ', error.message);
    } finally {
        loadingicon.value = false;
    }
};
</script>

<template>
    <div class="w-full min-h-screen center flex-col primary-bg px-4">
        <div
            class="col-center w-full sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[35%] p-6 bg-[#fffcfc] shadow rounded-xl"
            v-if="confirming == false"
        >
            <div class="text-center col-center w-full h-[20%] mb-10">
                <h1 class="md:text-4xl text-2xl headers text-[#3B82F6E6]">New here?</h1>
                <p class="font-light text-[12px] text-[#333]">
                    <i>Fill in the details to become a customer...</i>
                </p>
            </div>

            <form class="center h-[80%] w-full">
                <div class="w-full h-full col-center space-y-5">
                    <div class="flex flex-col w-full space-y-3">
                        <label for="userName" class="text-xs lg:text-sm xl:text-base">Name *</label
                        ><input type="text" name="userName" id="userName" v-model="userName" />
                    </div>
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
                    <div class="flex flex-col w-full space-y-3">
                        <label for="userPhone" class="text-xs lg:text-sm xl:text-base"
                            >Phone Number *</label
                        ><input type="text" name="userPhone" id="userPhone" v-model="userPhone" />
                    </div>
                    <button
                        class="w-full px-4 py-2 rounded-lg btn-2 hover text-sm xl:text-base text-[#4b4b4b]"
                        v-if="loadingicon == false"
                        @click="handleSignup"
                    >
                        Signup
                    </button>
                    <button class="w-full px-4 py-2 btn-2 rounded-xl hover center" v-else>
                        <LoadingIcon />
                    </button>
                    <button
                        @click.prevent="emit('switch-form', 'login')"
                        class="text-[#3B82F6E6] hover:text-[#7183f8] hover under underline text-sm"
                    >
                        <i>Already a user?</i> Login here..
                    </button>
                </div>
            </form>
        </div>

        <div
            id="form"
            class="col-center w-full md:w-xl py-6 px-3 bg-white my-10 shadow-md rounded-xl text-center space-y-4"
            v-else
        >
            <div class="col-center space-y-1">
                <div class="mb-3"><EmailIcon /></div>
                <h1 class="md:text-4xl text-2xl font-light">
                    Confirmation link sent to your email.
                </h1>
                <p class="leading-5 font-light text-sm md:text-base p-text">
                    click the link sent to
                    <strong>{{ userEmail }} to confirm your signup before logging in.</strong>
                </p>
            </div>

            <p class="font-light text-xs">Can't find the email? Check your spam folder</p>
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
    outline: none;
    border: 2px solid #bdd2ff;
    border-radius: 7px;
    box-shadow:
        0 0 2px 2px #bdd2ff,
        0 0 2px 2px #7183f855;
}

label {
    font-weight: 300;
}
</style>
