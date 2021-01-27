import Vue from "vue";
import VueRouter from "vue-router";
import recommend from 'components/recommend/recommend.vue'
import search from 'components/search/search.vue'
import singer from 'components/singer/singer.vue'
import rank from 'components/rank/rank.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: recommend,
  },
  {
    path: '/search',
    component: search,
  },
  {
    path: '/singer',
    component: singer,
  },
  {
    path: '/rank',
    component: rank,
  },
];

const router = new VueRouter({
  routes
});

export default router;
