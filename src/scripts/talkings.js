import Vue from "vue";


const titles = {
  template: "#talking-titles",
};

const info = {
  template: "#talking-info",
  components: { titles },
  props: ["currentIndex"],
  computed: {
    indexStart() {
      return this.currentIndex == 0;
    },
    indexEnd() {
      return this.currentIndex == 6;
    },
  }  
};

const display = {
  template: "#talking-display",
  props: ["currentSpeaker" , "nextSpeaker" , "currentIndex"],
};


new Vue({
  el: "#talking-component",
  template: "#taking-container",
  components: { info, display },
  data() {
    return {
      speakers: [],
      currentIndex: 0,
    }
  },
  computed: {
    currentSpeaker() {
      return this.speakers[this.currentIndex];
    },
    nextSpeaker() {
      return this.speakers[this.currentIndex + 1];
    },
  },
  // watch: {
  //   currentIndex(value) {
  //     this.makeInfiniteLoopForIndex(value);
  //   } 
  // },
  methods: {
    // makeInfiniteLoopForIndex(value) {
    //   const spikersAmountFromZero = this.speakers.length -1;
    //   if (value > spikersAmountFromZero) this.currentIndex = 0;
    //   if (value < 0) this.currentIndex = spikersAmountFromZero;

    // },
    handleSlide(direction) {
      switch(direction) {
        case "next" :
          this.currentIndex = this.currentIndex +2;
          break;
        case "prev" :
          this.currentIndex = this.currentIndex -2;
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