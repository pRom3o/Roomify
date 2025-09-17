<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <footer class="min-h-46 w-full px-3 pt-6">
    <div class="footer-content w-full">
      <div class="flex flex-col md:items-center justify-center space-y-4 p-4">
        <h4>Shop</h4>
        <p>All Products</p>
        <p>New Arrivals</p>
        <p>Sale</p>
        <p>Gift Cards</p>
      </div>
      <div class="flex flex-col md:items-center justify-center space-y-4 p-4">
        <h4>Contact</h4>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>Shipping</p>
        <p>Returns</p>
      </div>
      <div class="flex flex-col md:items-center justify-center space-y-4 p-4">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div class="flex flex-col md:items-center justify-center space-y-4 p-4">
        <h4>Legal</h4>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
      </div>
    </div>
    <hr class="text-[#e5e5e5]" />
    <div class="center w-full min-h-20 font-light">
      <p>&copy; 2025 ROOMIFY. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
}
</style>
