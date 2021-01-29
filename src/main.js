import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import VueLazyLoad from "vue-lazyload";

Vue.use(VueLazyLoad, {
  error: require("common/image/default.png"),
  loading: require("common/image/loading.gif") 
});

// CSS
import "common/stylus/index.styl";

fastclick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
