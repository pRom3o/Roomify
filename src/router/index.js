import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('../views/ShopView.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue'),
        },
        {
            path: '/auth/:type',
            name: 'auth',
            component: () => import('../views/AuthView.vue'),
        },
        {
            path: '/auth/confirmation',
            name: 'confirmation',
            component: () => import('../views/ConfirmationView.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/CartView.vue'),
        },
    ],
});

export default router;
