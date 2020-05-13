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
  },
  computed: {
    currentSpeaker() {
      return this.swiperexamplenavigation[this.currentIndex];
    },
     
    handleSlide(direction) {
      switch(direction) {
        case "button-next" :
          this.currentIndex = this.currentIndex++;
          break;
        case "button-prev" :
          this.currentIndex = this.currentIndex--;
          break; 
      }
    },
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
});