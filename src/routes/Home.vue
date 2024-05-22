<template>
    <div class="container">
        <div class="photo">
            <img src="~/assets/imgLogo.png" :alt="name">
        </div>
        <div class="name">{{ name }}</div>
        <div>{{ email }}</div>
        <div>{{ phone }}</div>
        <img 
            @click="gotoPage(github)"
            class="gotoGit"
            :src="gitIcon"
            :alt="github" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageLoading: true,
            name: '정은선',
            email: 'euns420@naver.com',
            github: 'https://github.com/',
            gitIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715',
            phone: '010-8221-5539'
        }
    },
    mounted() {

    },
    methods: {
        gotoPage(github) {
            window.open(github, "_blank");
        },
        async init() {
            await this.$loadImage(this.gitIcon)
            this.imageLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    text-align: center;
    .photo {
        width: 300px;
        margin: 70px auto 20px;
        padding: 30px;
        border: 10px solid $gray-300;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: $gray-200;
        img {
            width: 100%;
        }
    }
    .name {
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 20px;
    }
    .gotoGit {
        width: 60px;
    }
}
</style>