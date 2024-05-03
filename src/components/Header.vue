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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    padding: 0 40px 0 0;
    display: flex;
    align-items: center;
    .logo {
        margin-right: 40px;
    }
}
</style>