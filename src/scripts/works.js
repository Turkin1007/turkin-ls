import Vue from "vue";


const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"],
};

const display = {
  template: "#slider-display",
  components: { thumbs },
  props: ["currentWork", "works", "currentIndex"],
  computed: {
    indexStart() {
      return this.currentIndex == 0;
    },
    indexEnd() {
      return this.currentIndex == this.works.length -1;
    },
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
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
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequireImages(data);
  },
});
