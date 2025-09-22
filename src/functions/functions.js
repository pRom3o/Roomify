import { ref } from 'vue';

export const openClose = ref(false);

export const switchIcon = () => {
    openClose.value = !openClose.value;
    console.log(openClose.value);
};
