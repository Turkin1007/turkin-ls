import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Works from './pages/works/works.vue';
import Reviews from './pages/Reviews/reviews.vue';
import Skills from './pages/skills/skills.vue';

const router = new VueRouter({
    router: [
      {path: '/works', component: Works },
      {path: '/reviews', component: Reviews },
      {path: '/skills', component: Skills },
    ]
});

Vue.use(VueRouter);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});