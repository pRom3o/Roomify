<script setup></script>

<template>
  <div class="w-full min-h-screen center flex-col main-bg">
    <div class="center w-full h-[600px] p-6">
      <form
        class="flex flex-col items-center space-y-5 pb-10 shadow min-h-full md:w-lg w-full p-6 section-bg rounded-xl"
      >
        <h1 class="text-4xl">Welcome to Roomify</h1>
        <div class="flex flex-col w-full">
          <label for="userEmail">Email</label><input type="email" name="userEmail" id="userEmail" />
        </div>
        <div class="flex flex-col w-full">
          <label for="userPassword">Password</label
          ><input type="password" name="userPassword" id="userPassword" />
        </div>
        <div class="flex flex-col w-full">
          <label for="userPassword">Password</label
          ><input type="password" name="userPassword" id="userPassword" />
        </div>
      </form>
    </div>
  </div>
</template>
