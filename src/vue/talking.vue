<template lang="pug">
  swiper.swiper(:options="swiperOptions")
    .swiper-menu(slot="pagination")
      .swiper-title Что обо мне говорят
      .swiper-control
        button.swiper-btn.swiper-button-prev(slot="button-prev")
        button.swiper-btn.swiper-button-next(slot="button-next")
    swiper-slide Slide 1
    swiper-slide Slide 2
    swiper-slide Slide 3
    swiper-slide Slide 4
    swiper-slide Slide 5
</template>
 
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

  export default {
    name: 'swiperexamplenavigation',
    title: 'Navigation',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    created() {
    const data = require("../data/talking.json");
    this.speakers = this.makeArrWithRequireImages(data);
    },
  }
</script> 

<style lang="pcss" scoped>
  @import "../styles/blocks/style.pcss";
</style>