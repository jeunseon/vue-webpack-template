<template>
    <header class="container">
        <Logo />
        <div class="nav nav-pills">
            <div 
                v-for="nav in navigations" 
                :key="nav.name"
                class="nav-item">
                <RouterLink
                    :to="nav.href"
                    active-class="active"
                    class="nav-link">
                    {{ nav.name }}
                </RouterLink>
            </div>
        </div>
    </header>
    <button id="topbtn" v-show="!isVisible" @click="toTop">
        <p>TOP</p>
        <img src="~/assets/imgLogo.png" alt="이미지로고">
    </button>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name: 'HOME',
                    href:'/'
                },
                {
                    name: 'PROFILE',
                    href:'/profile'
                },
                {
                    name: 'PORTFOLIO',
                    href:'/portfolio'
                },
                {
                    name: 'DESIGN',
                    href:'/design'
                }
            ],
            isVisible : false,
            pageLink: '/profile'
        }
    },
    methods: {
        onScroll () {
            this.isVisible = window.scrollY < 50
        },
        toTop () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    beforeMount() {
        window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";


header {
    height: 70px;
    padding: 0 40px 0 0;
    display: flex;
    align-items: center;
    .logo {
        margin-right: 40px;
    }
    .nav-link {
        color: $black;
    }
    .nav-pills .nav-link.active {
        border-radius: 10px;
    }
}
#topbtn {
    position: fixed;
    right: 30px;
    bottom: 30px;
    background-color: $primary;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    transition: 1s;
    z-index: 9;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .5);
    &:hover {
        img {
            animation: circle 1s linear infinite;
        }
    }
    p {
        font-size: 10px;
        letter-spacing: 1px;
        color: $black;
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        animation: updown 1s ease-in-out infinite;
        transition: .5s;
        &::before {
            content: '<';
            font-size: 10px;
            font-weight: 700;
            transform: translateX(-50%) rotate(90deg);
            position: absolute;
            top: -10px;
            left: 50%;
        }
    }
    img {
        width: 30px;
        display: block;
    }
}
@keyframes updown {
    0% {
        top: -12px;
    }
    50% {
        top: -17px;
    }
    100% {
        top: -12px;
    }
}
@keyframes circle {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>