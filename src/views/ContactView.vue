<script setup></script>

<template>
    <div class="w-full min-h-[700px] center flex-col main-bg md:px-16 px-8">
        <div class="center w-full lg:w-[95%] h-[580px] p-6 section-bg shadow rounded-xl">
            <div
                class="lg:w-[70%] h-full w-full md:flex items-center justify-between sm:col-center py-6 lg:space-x-5 gap-4"
            >
                <div class="h-[30%] md:h-full col-center text-center w-full lg:w-[50%]">
                    <h1 class="md:text-4xl lg:text-5xl text-3xl mb-3 headers">
                        <i>Get in Touch with Roomify.</i>
                    </h1>
                    <p class="md:text-sm text-xs font-light">
                        <i>If you have any inquires, please use the contact form...</i>
                    </p>
                    <img src="../assets/img/Contact-us.png" alt="" class="lg:flex hidden h-[80%]" />
                </div>

                <div class="vertical-line md:block hidden"></div>
                <form
                    class="flex flex-col items-center space-y-5 md:h-[70%] h-[70%] lg:w-[50%] md:w-full w-full"
                >
                    <div class="col-center w-full h-[88%] space-y-5">
                        <div
                            class="flex lg:flex-row flex-col items-center justify-center w-full space-x-0 lg:space-y-0 space-y-3 gap-x-2 p-1"
                        >
                            <div class="flex flex-col lg:w-1/2 w-full">
                                <label for="firstName">First Name</label
                                ><input type="text" name="firstName" id="firstName" />
                            </div>
                            <div class="flex flex-col lg:w-1/2 w-full">
                                <label for="lastName">Last Name</label
                                ><input type="text" name="lastName" id="lastName" />
                            </div>
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="userEmail">Email</label
                            ><input type="email" name="userEmail" id="userEmail" />
                        </div>

                        <div class="flex flex-col w-full">
                            <label for="userMessage">Message</label>
                            <textarea
                                name="userMessage"
                                id="userMessage"
                                class="resize-none h-30"
                            ></textarea>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-end py-3 h-[12%]">
                        <button
                            class="px-8 py-2 text-black/70 hover submit rounded-lg hover:rounded-2xl"
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
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

input:focus {
    outline: none; /* remove default blue glow */
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, #f7ede3, #e9d4bc, #d2b08a) 1;
    border-radius: 6px; /* optional */
}

input:focus,
textarea:focus {
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
