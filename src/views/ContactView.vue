<script setup></script>

<template>
    <div class="w-full min-h-screen center bg-[#fff1f1] md:px-16 px-8 text-[#424242]">
        <div
            class="center w-full lg:w-[90%] min-h-[580px] p-6 bg-[#fff8f8] shadow rounded-xl mt-20 mb-10 md:mb-0 md:my-10"
        >
            <div
                class="lg:w-[85%] h-full w-full md:flex items-center justify-between sm:col-center py-6 lg:space-x-5 gap-4"
            >
                <div
                    class="h-[30%] md:h-full col-center text-center w-full lg:w-[50%] md:mb-0 mb-5"
                >
                    <h1 class="lg:text-4xl text-2xl mb-1 headers">
                        <i>Get in Touch with Roomify.</i>
                    </h1>
                    <p class="font-light text-[12px] lg:text-base">
                        <i>If you have any inquires, please use the contact form...</i>
                    </p>
                    <img
                        src="/Images/contact-us.png"
                        alt="contact"
                        class="md:flex hidden h-[80%]"
                    />
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
                                <label for="firstName" class="text-xs lg:text-sm xl:text-base"
                                    >First Name *</label
                                ><input type="text" name="firstName" id="firstName" />
                            </div>
                            <div class="flex flex-col lg:w-1/2 w-full">
                                <label for="lastName" class="text-xs lg:text-sm xl:text-base"
                                    >Last Name *</label
                                ><input type="text" name="lastName" id="lastName" />
                            </div>
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="userEmail" class="text-xs lg:text-sm xl:text-base"
                                >Email *</label
                            ><input type="email" name="userEmail" id="userEmail" />
                        </div>

                        <div class="flex flex-col w-full">
                            <label for="userMessage" class="text-xs lg:text-sm xl:text-base"
                                >Message *</label
                            >
                            <textarea
                                name="userMessage"
                                id="userMessage"
                                class="resize-none h-24"
                            ></textarea>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-end py-3 h-[12%]">
                        <button class="px-8 py-2 btn-2 rounded-md">submit</button>
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
    border: 1px solid #e9bcbc;
    border-radius: 3px;
    outline: 1px solid #e9bcbc;
    padding: 5px;
    font-weight: 300;
}

input:focus,
textarea:focus {
    caret-color: #ffa2a2;
}

input:focus,
textarea:focus {
    outline: none;
    border: 2px solid #e9bcbc;
    border-radius: 7px;
    box-shadow:
        0 0 8px 2px #e9bcbc66,
        0 0 16px 4px #d28a8a55;
}

label {
    font-weight: 300;
    color: black;
}
</style>
