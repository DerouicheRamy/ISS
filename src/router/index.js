import { createRouter, createWebHistory } from 'vue-router';
import homeview from '@/views/homeview.vue';
import Aboutusview from '@/views/Aboutusview.vue';
import Loginview from '@/views/Loginview.vue';
import Listingsview from '@/views/Listingsview.vue';
import addhouseview from '@/views/addhouseview.vue';
import dashboardview from '@/views/dashboardview.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: homeview,
        },
        {
            path: '/Aboutus',
            name: 'Aboutus',
            component: Aboutusview,
        },
        {
            path: '/login',
            name: 'login',
            component: Loginview,
        },
        {
            path: '/list',
            name: 'list',
            component: Listingsview,
        },
        {
            path: '/add',
            name: 'add',
            component: addhouseview,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboardview,
        },
    ],
})
export default router ; 