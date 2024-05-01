<template>
    <div class="container">
        <template v-if="loading">
            <div class="skeletons">
                <div class="skeleton poster"></div>
                <div class="specs">
                    <div class="skeleton title"></div>
                    <div class="skeleton btns"></div>
                    <div class="skeleton etc"></div>
                    <div class="skeleton etc"></div>
                    <div class="skeleton skill"></div>
                </div>
            </div>
            <Loader
                :size="3"
                :z-index="9"
                fixed />
        </template>
        <div
            v-else 
            class="port-details">
            <div class="poster"></div>
            <div class="specs">
                <div class="title"></div>
                <div class="btns"></div>
                <div class="etc">
                    <span>웹 제작 : </span>

                </div>
                <div class="etc">
                    <span>제작 페이지 : </span>

                </div>
                <div class="skill">
                    <span>사용 프로그램</span>
                    <div class="icon">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>    
    </div>
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
    },
    computed: {
        loading() {
            return this.$store.
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    padding-top: 40px;
}
.skeletons {
    display: flex;
    .poster {
        flex-shrink: 0;
        width: 500px;
        height: 500px * 2 / 3;
        margin-right: 70px;
    }
    .specs {
        flex-grow: 1;
    }
    .skeleton {
        border-radius: 10px;
        background-color: $gray-200;
        &.title {
            width: 80%;
            height: 70px;
        }
        &.btns {
            width: 50%;
            height: 50px;
            margin-top: 20px;
        }
        &.etc {
            width: 70%;
            height: 50px;
            margin-top: 20px;
        }
        &.skill {
            width: 100%;
            height: 100px;
            margin-top: 20px;
        }
    }    
}
</style>