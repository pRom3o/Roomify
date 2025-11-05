import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import AuthView from '@/views/auth/AuthView.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import { inject } from 'vue';

const auth = inject('auth');
const user = auth.user;

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
                    path: 'checkout/:ref',
                    name: 'checkout',
                    component: () => import('@/views/CheckoutView.vue'),
                },
                {
                    path: 'payment-success',
                    name: 'payment-success',
                    component: () => import('@/views/paymentSuccess.vue'),
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: () => import('@/views/userOrders.vue'),
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
        {
            path: '/admin',
            component: AdminLayout,
            children: [
                { path: '', name: 'admin', component: () => import('@/views/AdminDashboard.vue') },
            ],
        },
    ],
});

router.beforeEach(async (to, from) => {
    if (
        // make sure the user is authenticated
        !user.value &&
        // ❗️ Avoid an infinite redirect
        to.name !== 'Login'
    ) {
        // redirect the user to the login page
        return { name: 'Login' };
    }
});

export default router;
