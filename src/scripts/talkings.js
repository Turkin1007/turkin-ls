import Vue from "vue";
import swiperexamplenavigation from '../vue/talking.vue';


new Vue({
  el: "#talking-component",
  components: {swiperexamplenavigation},
  data() {
    return {
      swiperexamplenavigation: [],
      currentIndex: 0,
    }
  }
});