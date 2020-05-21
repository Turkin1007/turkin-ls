import './styles/main.pcss';
import Vue from 'vue';
import EventBus from './scripts/eventBus';
import './components/talking/talkings'
import './components/skills/skills'

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./index.pug');
}

import './scripts/popup-menu';
import './scripts/parallax';

//////////////////////////////
//          Menu            //
//////////////////////////////
import Menu from './components/menu/menu';

new Vue({
  el: '.header__menu',
  components: {
    vcMenu: Menu
  }
});

new Vue({
  el: '.footer__navigation',
  components: {
    vcMenu: Menu
  }
});

new Vue({
  el: '.popup-menu',
  components: {
    vcMenu: Menu
  }
});

//////////////////////////////
//          Works           //
//////////////////////////////
import WorksSlider from './components/works-slider/works-slider';
import Tags from './components/tags/tags';
import Work from './components/work/work';

new Vue({
  el: '#works',
  components: {
    vcWorksSlider: WorksSlider,
    vcTags: Tags,
    vcWork: Work
  }
});


//////////////////////////////
//          Feedback        //
//////////////////////////////
import Feedback from './components/feedback/feedback';

new Vue({
  el: '#feedback',
  components: {
    vcFeedback: Feedback
  }
});

//////////////////////////////
//          Tooltip         //
//////////////////////////////
import Tooltip from './components/tooltip/tooltip';

new Vue({
  el: '#tooltip',
  components: {
    vcTooltip: Tooltip
  }
});
