<template>
    <div class="container">
        <h2><span>B</span>ANNER <span>D</span>ESIGN</h2>
        <div class="banner">
            <img
                v-for="banner in bannerdesigns"
                :key="banner.name" 
                :src="require(`~/assets/${banner.imgSrc}.jpg`).default" 
                :alt="banner.name">
        </div>
        <h2><span>S</span>NS <span>D</span>ESIGN</h2>
        <div class="sns">
            <img 
                v-for="sns in snsdesigns"
                :key="sns.name"
                :src="require(`~/assets/${sns.imgSrc}.jpg`).default" 
                :alt="sns.name">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            snsdesigns: [
                {name: 'KOMONT intro', imgSrc: "11_intro"},
                {name: 'KOMONT F/W', imgSrc: 'fw_intro'},
                {name: 'Lotte On', imgSrc: 'lotteon'},
                {name: 'KOMONT t-shirt', imgSrc: 'st_intro'},
            ],
            bannerdesigns: [
                {name: '1+1 EVENT', imgSrc: 'event'},
                {name: 'summer lucky day', imgSrc: 'shoping'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    h2 {
        font-family: "Oswald", sans-serif;
        font-weight: 700;
        font-size: 50px;
        margin-top: 70px;
            span {
                color: $primary;
            }
    }
    div {
        display: flex;
        &.banner {
            img {
                width: 500px;
            }
        }
        &.sns {
            img {
                width: 300px;
            }
        }
    }
}
</style>