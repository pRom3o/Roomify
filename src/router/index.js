import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import AuthView from '@/views/auth/AuthView.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import { useUserStore } from '../store/user';

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
                {
                    path: '',
                    name: 'admin',
                    component: () => import('@/views/admin/dashboard.vue'),
                    meta: { requiresAdmin: true },
                },
                {
                    path: '/admin/Orders',
                    name: 'Orders',
                    component: () => import('@/views/admin/orders.vue'),
                    meta: { requiresAdmin: true },
                },
                {
                    path: '/admin/messages',
                    name: 'messages',
                    component: () => import('@/views/admin/messages.vue'),
                    meta: { requiresAdmin: true },
                },
                {
                    path: '/admin/products',
                    name: 'products',
                    component: () => import('@/views/admin/products.vue'),
                    meta: { requiresAdmin: true },
                },
                {
                    path: '/admin/users',
                    name: 'users',
                    component: () => import('@/views/admin/users.vue'),
                    meta: { requiresAdmin: true },
                },
            ],
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    await userStore.getUser();
    await userStore.getUserRole();

    if (to.meta.requiresAdmin && !userStore.isAdmin) {
        return next('/');
    }

    next();
});

export default router;
