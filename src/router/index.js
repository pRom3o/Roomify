import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import AuthView from '@/views/auth/AuthView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                { path: '', name: 'home', component: HomeView },
                { path: 'shop', name: 'shop', component: () => import('@/views/ShopView.vue') },
                { path: 'cart', name: 'cart', component: () => import('@/views/CartView.vue') },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('@/views/ContactView.vue'),
                },
                {
                    path: 'checkout',
                    name: 'checkout',
                    component: () => import('@/views/CheckoutView.vue'),
                },
            ],
        },
        {
            path: '/auth',
            component: AuthLayout,
            children: [
                { path: '', name: 'auth', component: AuthView },
                {
                    path: 'confirmation',
                    name: 'confirmation',
                    component: () => import('@/views/auth/ConfirmationView.vue'),
                },
            ],
        },
    ],
});

export default router;
