<template>
    <div class="container">
        <div
            v-for="port in ports"
            :key="port.title"
            class="port-details">
            <div
                :style="{ backgroundImage: `url(${port.poster})` }"
                class="poster">
            </div>
            <div class="specs">
                <div class="title">{{ port.title }}</div>
                <div class="btns">
                    <button 
                        @click="gotoPage(port.git)"
                        type="button">Git</button>
                    <button 
                        @click="gotoPage(port.view)"
                        type="button">View</button>
                </div>
                <div class="etc">
                    <span>웹 제작 : </span>
                    {{ port.monitor }}
                </div>
                <div class="etc">
                    <span>제작 페이지 : </span>
                    {{ port.page }}
                </div>
                <div class="etc">
                    <span>사용 툴 : </span>
                    {{ port.tool }}
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
            ports: [
                {
                    poster: require('~/assets/spo.jpg').default,
                    title:'대검찰청',
                    git: 'https://github.com/jeunseon/spo',
                    view: 'http://euns420.dothome.co.kr/spo/',
                    monitor: 'Laptop',
                    page: '메인 / 서브페이지', 
                    tool: 'HTML / CSS / JS / API'
                },
                {
                    poster: require('~/assets/save.jpg').default,
                    title:'세이브 더 칠드런',
                    git: 'https://github.com/jeunseon/savethechildren',
                    view: 'https://jeunseon.github.io/savethechildren/',
                    monitor: 'Laptop / Tablet / Mobile',
                    page: '메인 / 서브페이지', 
                    tool: 'HTML / CSS / JS'
                },
                {
                    poster: require('~/assets/montraum.jpg').default,
                    title:'몬트라움',
                    git: 'https://github.com/jeunseon/montraum',
                    view: 'https://jeunseon.github.io/montraum/',
                    monitor: 'Mobile',
                    page: '메인 / 서브페이지', 
                    tool: 'HTML / CSS / JS'
                },
                {
                    poster: '',
                    title:'Vue 포트폴리오',
                    git: 'https://github.com/jeunseon/vue-webpack-template',
                    view: '',
                    monitor: 'Laptop / Tablet / Mobile',
                    page: '메인 / 서브페이지', 
                    tool: 'HTML / SCSS / Bootstrap / VUE'
                },
                {
                    poster: require('~/assets/portfolio.jpg').default,
                    title:'HTML 포트폴리오',
                    git: 'https://github.com/jeunseon/porfoliosite',
                    view: 'https://eunseon-portfolio.netlify.app/',
                    monitor: 'Laptop / Tablet / Mobile',
                    page: '메인페이지', 
                    tool: 'HTML / CSS / Bootstrap / Javascript / Isotope'
                },
                {
                    poster: require('~/assets/cafe.jpg').default,
                    title:'카페베네',
                    git: 'https://github.com/jeunseon/caffebene',
                    view: 'https://caffebene-port.netlify.app/',
                    monitor: 'Laptop',
                    page: '메인페이지', 
                    tool: 'HTML / CSS / Javascript'
                },
            ],
            
        }
    },
    methods: {
        gotoPage(url) {
            window.open(url, "_blank");
        },
        async init() {
            await this.$loadImage(this.poster)
            this.imageLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    padding-top: 40px;
}
.port-details {
    display: flex;
    margin-bottom: 50px;
    .poster {
        flex-shrink: 0;
        width: 500px;
        height: 500px * 2 / 3;
        margin-right: 70px;
        background-color: $gray-200;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .specs {
        flex-grow: 1;
        border-radius: 10px;
        .title {
            font-family: "Oswald", sans-serif;
            font-weight: 700;
            font-size: 30px;
            line-height: 1;
            margin-bottom: 30px;
        }
        .btns {
            button {
                padding: 10px 80px;
                margin-right: 20px;
                border-radius: 10px;
                background-color: rgb(55, 140, 210);
                color: $white;
                border: none;
                transition: .5s;
                font-size: 20px;
                letter-spacing: 5px;
                &:nth-of-type(2) {
                    background-color: $primary;
                }
                &:hover {
                    background-color: blueviolet;
                }
            }
        }
        .etc {
            font-size: 14px;
            color: $gray-600;
            margin-top: 20px;
            span {
                font-size: 16px;
                color: $black;
            }
        }
    }    
}
</style>