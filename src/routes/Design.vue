<template>
    <div class="container">
        <h2><span>B</span>ANNER <span>D</span>ESIGN</h2>
        <div class="banner">
            <div class="imgWrap"
                v-for="banner in bannerdesigns"
                :key="banner.name">
                <img
                    :src="banner.imgSrc" 
                    :alt="banner.name" 
                    @click="gotoPage(banner.imgSrc)" />
            </div>
        </div>
        <h2><span>I</span>NTRO <span>D</span>ESIGN</h2>
        <div class="intro">
            <div class="imgWrap"
                v-for="sns in snsdesigns"
                :key="sns.name">
                <img
                    :src="sns.imgSrc" 
                    :alt="sns.name"
                    @click="gotoPage(sns.imgSrc)">
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            snsdesigns: [
                {name: 'KOMONT intro', imgSrc: "https://eunseon-portfolio.netlify.app/img/11_intro.jpg"},
                {name: 'KOMONT F/W', imgSrc: 'https://eunseon-portfolio.netlify.app/img/ns_fw_intro.jpg'},
                {name: 'Lotte On', imgSrc: 'https://eunseon-portfolio.netlify.app/img/lotteon.jpg'},
                {name: 'KOMONT t-shirt', imgSrc: 'https://eunseon-portfolio.netlify.app/img/st_intro.jpg'},
            ],
            bannerdesigns: [
                {name: '1+1 EVENT', imgSrc: 'https://eunseon-portfolio.netlify.app/img/event.jpg'},
                {name: 'summer lucky day', imgSrc: 'https://eunseon-portfolio.netlify.app/img/shoping.jpg'},
            ],
        }
    },
    methods: {
        gotoPage(imgSrc) {
            window.open(imgSrc, "_blank");
        },
        async init() {
            await this.$loadImage(this.imgSrc)
            this.imageLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.modalWrap {
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, .8);
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    .modalContent {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        width: 550px;
        background-color: white;
    }
}


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
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 40px;
        .imgWrap {
            border-radius: 10px;
            margin-bottom: 40px;
            width: calc(100% / 5 * 2);
            cursor: pointer;
            &:nth-of-type(even) {
                margin-left: 30px;
            }
            img {
                width: 100%;
                border-radius: 10px;
                
            }
        }
        &.banner {
            .imgWrap {
                

            }
        }
        &.intro {
            .imgWrap {
                height: 500px;
                overflow: hidden;
            }
        }
    }
}
</style>