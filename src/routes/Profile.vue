<template>
    <div class="container">
        <div class="about">
            <div class="photo">
                <img src="~/assets/mine.jpg" alt="내 사진">
            </div>
            <div class="profile">
                <div class="name">
                    {{ name }}
                    <span>{{ ename }}</span>
                </div>
                <div class="birth">
                    {{ birth }}
                </div>
                <div class="lisence">
                    <h3>Lisence</h3>
                    <p v-html="lisence"></p>
                </div>
                <div class="aducation">
                    <h3>Education / Experience</h3>
                    <p v-html="aducation"></p>
                </div>
            </div>
        </div>
        <div class="skills">
            <h2>
                <span>S</span>KILL
            </h2>
            <div class="skill-icon">
                <img
                    v-for="iconImg in icons" 
                    :key="iconImg.name" 
                    :src="iconImg.src" 
                    :alt="iconImg.name" />
                
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '정은선',
            ename: '(Jeong EunSeon)',
            birth: '1994.04.20',
            lisence: `
                &bull; GTQ 1급 <br /> 
                &bull; 웹디자인기능사 과정평가형`,
            aducation: `
                &bull; 순천향대학교 생명시스템학과 졸업 (2013.03~2017.02) <br />
                &bull; 스마트 UI/UX 디자인콘텐츠개발 양성 (2018.04~2019.01) <br />
                &bull; 코몽트 쇼핑몰 웹디자이너 (2019.02~2020.08) <br />
                &bull; 더휴먼컴퓨터아트아카데미 (2022.05~2022.09)`,
            icons: [
                {name: 'HTML', src: 'https://github.com/jeunseon/vue-webpack-template/assets/111102131/313aff63-7ecc-4811-bb91-454c8d9a4658'},
                {name: 'CSS', src: 'https://github.com/jeunseon/vue-webpack-template/assets/111102131/a5083644-a365-48dd-a395-81daa0f68ae9'},
                {name: 'JQuery', src: 'https://github.com/jeunseon/vue-webpack-template/assets/111102131/3422b331-30f7-4e2e-9489-bd810cb3c675'},
                {name: 'Javascript', src: 'https://github.com/jeunseon/vue-webpack-template/assets/111102131/d9a94d46-d882-43b8-a536-58f267428106'},
                {name: 'Figma', src: 'https://eunseon-portfolio.netlify.app/img/figma.svg'},
                {name: 'Bootstrap', src: 'https://eunseon-portfolio.netlify.app/img/bootstrap.svg'},
                {name: 'Photoshop', src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg'},
                {name: 'Illustrator', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/768px-Adobe_Illustrator_CC_icon.svg.png'},
                {name: 'Scss', src: 'https://eunseon-portfolio.netlify.app/img/sass.svg'},
                {name: 'Github', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715'},
                {name: 'Vue', src: 'https://github.com/jeunseon/vue-webpack-template/assets/111102131/abed85f1-1d45-4233-bc34-d791ba82c20e'},
            ]
        }   
    },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    .about {
        display: flex;
        margin-top: 70px;
        .photo {
            width: 500px;
            height: 500px * 6 / 5;
            background-color: gray;
            border-radius: 10px;
            margin-right: 70px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .profile {
            .name {
                font-size: 25px;
                font-weight: 700;
                span {
                    font-weight: normal;
                    font-size: 16px;
                    display: block;
                }
            }
            div {
                h3 {
                    font-size: 25px;
                    font-weight: 700;
                    margin-top: 10px;
                    color: $primary;
                }
                p {
                    font-size: 16px;
                    line-height: 2;
                }
            }
        }
    }
    .skills {
        margin-top: 70px;
        h2 {
            font-family: "Oswald", sans-serif;
            font-weight: 700;
            font-size: 50px;
            span {
                color: $primary;
            }
        }
        .progrss {
            margin-top: 50px;
        }
        .skill-icon {
            display: flex;
            margin-top: 50px;
            img {
                margin-right: 20px;
                border-radius: 10px;
                width: 70px;
            }
        }
    }
}
</style>