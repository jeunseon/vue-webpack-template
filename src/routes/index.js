import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Profile from "./Profile.vue";
import Portfolio from "./Portfolio.vue";
import Design from "./Design.vue";

export default createRouter({
    // Hash 모드
    history: createWebHashHistory(),
    scrollBehavior () {
        return { top: 0 }
    },
    // pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/design',
            component: Design
        }
    ]
})