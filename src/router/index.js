import Vue from "vue";
import VueRouter from "vue-router";

import redirectV from "../views/redirectV.vue";
import loginV from "../views/loginV.vue";
import registerV from "../views/registerV.vue";
import HomeV from "../views/homeV.vue";
import profileV from "../views/profileV.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "/",
    component: redirectV,
  },
  {
    path: "/login",
    name: "login",
    component: loginV,
  },
  {
    path: "/register",
    name: "register",
    component: registerV,
  },
  {
    path: "/home",
    name: "home",
    component: HomeV,
  },
  {
    path: "/profile",
    name: "profile",
    component: profileV,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
