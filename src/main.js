import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookie from "vue-cookies";

// import tailwind
import "@/assets/css/tailwind.css";

Vue.use(cookie);
Vue.config.productionTip = false;
Vue.prototype.$globalData = Vue.observable({
  user: false,
  server: "http://127.0.0.1:4011/",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
