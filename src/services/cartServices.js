import { ref } from 'vue';

export const isCartOpen = ref(false);

export const openCartModal = () => {
  isCartOpen.value = !isCartOpen.value;
  console.log(isCartOpen.value);
};
