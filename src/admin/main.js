import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";

const router = new VueRouter({
    routes: [
      {
        path: '/',
        components: {
          default: () => import('./pages/skills/skills.vue'),
          tabs: Tabs,
          header: Header
        }
      },
      {
        path: '/works',
        components: {
          default: () => import('./pages/works/works.vue'),
          tabs: Tabs,
          header: Header
        }
      },
      {
        path: '/reviews',
        components: {
          default: () => import('./pages/reviews/reviews.vue'),
          header: Header,
          tabs: Tabs
        }
      },
      {
        path: '/login',
        components: {
          default: () => import('./pages/login/login.vue'),
        }
      }
    ]
});

Vue.use(VueRouter);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});