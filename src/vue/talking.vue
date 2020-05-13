<template lang="pug">
  swiper.swiper(:options="swiperOptions")
    .swiper-menu(slot="pagination")
      .swiper-title Что обо мне говорят
      .swiper-control
        button.swiper-btn.swiper-button-prev(slot="button-prev")
        button.swiper-btn.swiper-button-next(slot="button-next")
    swiper-slide 
      .talking__content-left
        //- +icon("quote", "quote-img") 
        .talking__content-text
          p Этот парень проходил обучение
          p веб-разработке не где-то, а в LoftSchool!
          p 4,5 месяца только самых тяжелых
          p испытаний и бессонных ночей!
        .talking__content-autor
          .talking__content-autor__avatar
            img(src=("../images/content/dmitriy.png"), "dmitriy-img")
          .talking__content-autor__desc
            .talking__content-autor__name
              p Ковальчук Дмитрий
            .talking__content-autor__rank
              p Основатель LoftSchool
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
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed:{
    makeArrWithRequireImages(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
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