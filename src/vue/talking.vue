<template lang="pug">
  swiper.swiper(:options="swiperOptions")
    .swiper-menu(slot="pagination")
      .swiper-title Что обо мне говорят
      .swiper-control
        button.swiper-btn.swiper-btn-prev(slot="button-prev")
        button.swiper-btn.swiper-btn-next(slot="button-next")
    swiper-slide(v-for ="review in speakers") 
      .talking__content-left
        .talking__content-text {{review.text}}
        .talking__content-autor
          .talking__content-autor__avatar
            img(:src="review.photo").talking-img
          .talking__content-autor__desc
            .talking__content-autor__name {{review.name}}
            .talking__content-autor__rank {{review.occ}}
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
      speakers: [],
      currentIndex: 0,
      swiperOptions: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        }
      }
    }
  },
  methods:{
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