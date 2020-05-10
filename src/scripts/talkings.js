import Vue from "vue";


const titles = {
  template: "#talking-titles",
};

const btns = {
  template: "#talking-btns",
};

const info = {
  template: "#talking-info",
  components: { titles, btns },
};

const left = {
  template: "#talking-left",
  props: ["currentSpeaker"],
};

const right = {
  template: "#talking-right",
  props: ["currentSpeaker"],
};

const display = {
  template: "#talking-display",
  components: { right, left },
};


new Vue({
  el: "#talking-component",
  template: "#taking-container",
  components: { info, display },
  data() {
    return {
      speakers: [],
      currentSpeaker: {}
    }
  },
  created() {
    const  data = require("../data/talking.json");
    this.speakers = data;
    this.currentSpeaker = data[1];
  }
});