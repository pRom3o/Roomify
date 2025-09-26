import { ref } from 'vue';

export const products = ref({});

export const fetching = ref(false);

export const fetchProducts = async () => {
    fetching.value = true;

    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories/3/products');
        const data = await response.json();
        console.log(fetching.value);

        products.value = data;
        console.log('Products found: ', products.value);
    } catch (err) {
        console.log('Error fetching: ', err.message);
    } finally {
        fetching.value = false;
    }
};
