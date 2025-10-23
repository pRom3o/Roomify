<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        },
        { threshold: 0.1 },
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
</script>

<template>
    <footer class="min-h-32 w-full px-3 pt-6 backdrop-blur-lg">
        <div class="grid md:grid-cols-4 grid-cols-2 w-full fade-in">
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4 class="md:font-medium text-sm md:text-md">Shop</h4>
                <p class="text-xs md:font-normal font-light">All Products</p>
                <p class="text-xs md:font-normal font-light">New Arrivals</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4 class="md:font-medium text-sm md:text-md">Contact</h4>
                <p class="text-xs md:font-normal font-light">Contact Us</p>
                <p class="text-xs md:font-normal font-light">FAQ</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4 class="md:font-medium text-sm md:text-md">Company</h4>
                <p class="text-xs md:font-normal font-light">About Us</p>
                <p class="text-xs md:font-normal font-light">Blog</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4 class="md:font-medium text-sm md:text-md">Legal</h4>
                <p class="text-xs md:font-normal font-light">Privacy Policy</p>
                <p class="text-xs md:font-normal font-light">Terms of Service</p>
            </div>
        </div>
        <div class="w-full font-light text-[10px] lg:text-sm lg:font-normal">
            <hr class="text-[#aaaaaa]" />
            <div class="center w-full min-h-10">
                <p>&copy; 2025 ROOMIFY. all rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
    box-shadow:
        0 0 8px 2px #e9bcbc66,
        0 0 16px 4px #d28a8a55;
}
</style>
