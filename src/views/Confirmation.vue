<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import EmailIcon from '../components/icons/EmailIcon.vue';
</script>

<template>
    <div class="w-full min-h-screen center flex-col main-bg px-4">
        <div
            id="form"
            class="col-center w-full md:w-xl py-6 section-bg shadow-xl rounded-xl text-center space-y-4"
        >
            <div class="col-center space-y-1">
                <div class="mb-3"><EmailIcon /></div>
                <h1 class="md:text-4xl text-3xl headers font-light">Please check your email</h1>
                <p class="leading-5 font-light text-xs md:text-base p-text">
                    enter the code sent to <strong>userEmail@gmail.com</strong>
                </p>
            </div>

            <form class="col-center w-full p-2">
                <div class="flex flex-col items-center w-full space-y-3">
                    <input
                        type="text"
                        name="signupToken"
                        id="signupToken"
                        placeholder="please enter 6 digit code"
                        class="p-2 md:w-60 hover"
                    />
                </div>
            </form>
            <p class="font-light p-text">Can't find the email?Check your spam folder</p>
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
