<script setup>
import { toggleUploadModal } from '../functions/functions';
</script>

<template>
    <div class="center w-full min-h-screen p-4 bg-black/40" @click.self="toggleUploadModal">
        <div class="min-h-96 sm:w-[50%] w-full lg:w-[40%] bg-white rounded-xl"></div>
    </div>
</template>
