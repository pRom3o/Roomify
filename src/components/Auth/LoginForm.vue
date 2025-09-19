<script setup>
const emit = defineEmits(['switchform']);
</script>

<template>
  <div class="w-full min-h-screen center flex-col main-bg px-4">
    <div class="md-center w-full lg:h-[650px] md:h-[400px] p-6 section-bg shadow rounded-xl">
      <div class="text-center col-center md:w-[50%] h-[20%] lg:h-full">
        <h1 class="lg:text-5xl text-3xl headers">Welcome back to Roomify</h1>
        <p class="font-light"><i>we're happy to have you back...</i></p>
      </div>
      <div class="vertical-line md:block hidden"></div>
      <form class="center pb-10 md:w-[50%] h-[80%] lg:h-full w-full p-6">
        <div class="xl:w-2/3 w-full h-full col-center space-y-5">
          <div class="flex flex-col w-full space-y-3">
            <label for="userEmail">Email</label
            ><input type="email" name="userEmail" id="userEmail" />
          </div>
          <div class="flex flex-col w-full space-y-3">
            <label for="userPassword">Password</label
            ><input type="password" name="userPassword" id="userPassword" />
          </div>

          <button class="w-full px-4 py-2 submit rounded-xl hover:bg-[#efe1d0] hover">Login</button>
          <button @click="emit('switchform')"><i>New user?</i> Signup here..</button>
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
