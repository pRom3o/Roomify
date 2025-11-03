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
            class="flex items-center justify-center md:flex-row flex-col md:w-[90%] w-full md:h-[550px] md:p-6 pt-4 bg-[#fffcfc] shadow rounded-xl"
            v-if="confirming == false"
        >
            <div class="text-center col-center md:w-1/2 xl:w-[40%] space-y-2 md:h-full">
                <h1 class="md:text-4xl text-2xl headers text-[#7183f8]">New to Roomify?</h1>
                <p class="font-light text-[12px] lg:text-base text-[#333]">
                    <i>Fill in the details to become a customer...</i>
                </p>
                <img
                    src="/Images/Signup-rafiki.png"
                    alt="Signup img"
                    class="md:flex hidden lg:h-[80%] md:h-[60%]"
                />
            </div>
            <div class="vertical-line md:block hidden"></div>
            <form class="center md:w-1/2 h-[80%] xl:px-10 2xl:px-20 lg:h-full w-full p-6 md:px-0">
                <div class="md:w-5/6 w-full h-full col-center space-y-5">
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
                        class="text-[#7183f8] hover:text-[#bdd2ff] hover under underline text-sm"
                    >
                        <i>Already a user?</i> Login here..
                    </button>
                </div>
            </form>
        </div>

        <div
            id="form"
            class="col-center w-full md:w-xl py-6 bg-[#ffebeb] my-10 shadow-xl rounded-xl text-center space-y-4"
            v-else
        >
            <div class="col-center space-y-1">
                <div class="mb-3"><EmailIcon /></div>
                <h1 class="md:text-4xl text-xl font-light">Please check your email</h1>
                <p class="leading-5 font-light text-xs md:text-base p-text">
                    click the link sent to <strong>{{ userEmail }} to confirm signup</strong>
                </p>
            </div>

            <p class="font-light text-xs">Can't find the email?Check your spam folder</p>
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
