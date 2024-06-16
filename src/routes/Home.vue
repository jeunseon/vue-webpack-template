<template>
    <div class="container">
        <swiper class="intro"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :loop="true"
            :autoplay="{delay: 3000, disableOnInteraction : false,}"
            :effect="fade"
        >
            <swiper-slide><p>WELCOME TO MY <br /><span>PORTFOLIO</span> : )</p></swiper-slide>
            <swiper-slide><p>I AM JEONG<br /><span>EUNSEON</span></p></swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/css/effect-fade';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, EffectFade],
      };
    },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
    height: 70vh;
    position: relative;
    background-image: url("https://github.com/jeunseon/Doit-vue/assets/111102131/9287807d-6606-4de3-8b11-fb58839377ea");
    background-repeat: no-repeat;
    background-size: cover;
    .intro {
        top: 40%;
        right: 0%;
        p {
            font-size: 40px;
            text-align: center;
            color: $white;
            span {
                color: $primary;
                font-weight: 700;
                font-size: 80px;
                letter-spacing: 5px;
            }
        }
    }
}
@keyframes circle {
    0% {
        border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    }
    50% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        background-color: rgba(253, 192, 0, .1);
    }
    100% {
        border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    }
}
@keyframes circle2 {
    0% {
        border-radius: 52% 68% 80% 40% / 55% 55% 65% 65%;
    }
    50% {
        border-radius: 50% 50% 40% 60% / 70% 40% 80% 50%;
        background-color: rgba(255, 206, 47, 0.1);
    }
    100% {
        border-radius: 52% 68% 80% 40% / 55% 55% 65% 65%;
    }
}
@keyframes circle3 {
    0% {
        border-radius: 30% 54% 70% 65% / 45% 75% 60% 42%;
    }
    50% {
        border-radius: 64% 57% 49% 53% / 48% 55% 61% 46%;
        background-color: rgba(246, 255, 71, 0.2);
    }
    100% {
        border-radius: 30% 54% 70% 65% / 45% 75% 60% 42%;
    }
}

</style>