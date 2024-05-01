<template>
    <div class="container">
        <div class="skeletons">
            <div class="skeleton poster"></div>
            <div class="specs">
                <div class="skeleton title"></div>
                <div class="skeleton btns"></div>
                <div class="skeleton etc">
                    <span>웹 제작 : </span>
                </div>
                <div class="skeleton etc">
                    <span>제작 페이지 : </span>
                </div>
                <div class="skeleton icons"></div>
            </div>
        </div>
    </div>
    <Loder />
</template>

<script>
import Loader from '../components/Loader.vue'

export default {
    components: {
        Loader
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";


</style>