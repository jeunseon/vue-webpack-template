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
                {name: '8월 위메프X코몽트 세일', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/3d3cc40a-8c45-470f-8a55-d13272daab2a'},
                {name: 'KOMONT 블랙프라이데이', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/1767ece0-b1b4-43e0-9e4e-b8ab6bc097e6'},
                {name: 'KOMONT 추석 인트로', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/7e130f61-0b35-4db6-bc20-f85f7b94112b'},
                {name: '카카오톡 플친 추가 상세페이지', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/2f677cc2-d9e6-436d-8780-43d21803045c'},
                {name: '롯데아이몰 X KOMONT 주말 쇼핑 세일', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/1c1af8cb-6d8b-46db-a23d-a78e6b0644da'},
                {name: '위메프 X KOMONT 이벤트', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/92596b6e-c127-4a27-ac4c-74701f0cab79'},
            ],
            bannerdesigns: [
                {name: '1+1 EVENT', imgSrc: 'https://eunseon-portfolio.netlify.app/img/event.jpg'},
                {name: 'summer lucky day', imgSrc: 'https://eunseon-portfolio.netlify.app/img/shoping.jpg'},
                {name: 'KOMONT best banner', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/1241499c-63f0-4818-adfd-f636e6e13ca1'},
                {name: '카카오톡 플친 추가', imgSrc: 'https://github.com/jeunseon/react/assets/111102131/aaac5ebd-b40c-42ac-b3ce-34e34cb93a19'},
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
        &.intro {
            .imgWrap {
                height: 500px;
                overflow: hidden;
            }
        }
    }
}
</style>