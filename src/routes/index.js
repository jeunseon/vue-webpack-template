import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";

export default createRouter({
    // Hash 모드
    history: createWebHashHistory(),
    // pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
    ]
})