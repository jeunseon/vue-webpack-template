<template>
    <div class="container">
        <h2><span>S</span>NS <span>D</span>ESIGN</h2>
        <div class="sns">
            <img 
                v-for="sns in snsdesigns"
                :key="sns.name"
                :src="sns.imgSrc" 
                :alt="sns.name">
        </div>
        <h2><span>B</span>ANNER <span>D</span>ESIGN</h2>
        <div class="banner">
            <img
                v-for="banner in bannerdesigns"
                :key="banner.name" 
                :src="banner.imgSrc" 
                :alt="banner.name">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            snsdesigns: [
                {name: 'KOMONT intro', imgSrc: '~/assets/11_intro.jpg'},
                {name: 'KOMONT F/W', imgSrc: '~/assets/fw_intro.jpg'},
                {name: 'Lotte On', imgSrc: '~/assets/lotteon.jpg'},
                {name: 'KOMONT t-shirt', imgSrc: '~/assets/st_intro.jpg'},
            ],
            bannerdesigns: [
                {name: '1+1 EVENT', imgSrc: '~/assets/event.jpg'},
                {name: 'summer lucky day', imgSrc: '~/assets/shoping.jpg'},
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
        &.sns {

        }
        &.banner {
            
        }
    }
}
</style>