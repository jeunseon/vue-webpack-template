<template>
    <footer>
        <Logo />
        <p>본 사이트는 상업적 용도가 아닌 개인 포트폴리오 용으로 제작되었습니다.</p>
        <a 
            href="https://github.com/jeunseon" 
            target="_blank">
            (c){{ new Date().getFullYear() }} by JEONG EUN SEON  All right reserved.
        </a>
    </footer>
</template>

<script>
import Logo from "~/components/Logo.vue"

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>

</style>