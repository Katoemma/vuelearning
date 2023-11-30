import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'Home',
            component : () => import('../views/home-page.vue'),
            meta:{
                title: "Home",
            },
        },
        {
            path: '/about',
            name:'About',
            component : () => import('../views/About-page.vue'),
            meta:{
                title: "About us"
            },
        },
        {
            path: '/login',
            name:'Login',
            component : () => import('../views/login-page.vue')
        },
        {
            path: '/register',
            name:'Register',
            component : () => import('../views/register-user.vue')
        },
        {
            path: '/contact',
            name:'Contact',
            component : () => import('../views/contact-page.vue')
        },
        {
            path: '/singlePost/:id/:title',
            name:'Post',
            component : () => import('../views/singlePost.vue'),

        }
    ]
});

export default router;