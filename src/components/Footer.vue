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
    <footer class="min-h-46 w-full px-3 pt-6 bg-red-50">
        <div class="grid md:grid-cols-4 grid-cols-2 w-full fade-in">
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4>Shop</h4>
                <p>All Products</p>
                <p>New Arrivals</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4>Contact</h4>
                <p>Contact Us</p>
                <p>FAQ</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4>Company</h4>
                <p>About Us</p>

                <p>Blog</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 p-4">
                <h4>Legal</h4>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
        <div class="fade-in w-full">
            <hr class="text-[#464545]" />
            <div class="center w-full min-h-20 font-light">
                <p>&copy; 2025 ROOMIFY. All rights reserved.</p>
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
}

h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 1rem;
}

p {
    font-size: smaller;
}
</style>
