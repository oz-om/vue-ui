<template>
  <div id="app" @click="closeMenu" class="myContainer">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/Global/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {
    closeMenu(e) {
      let profile = document.querySelector("#profile img");
      if (e.target != profile) {
        if (document.getElementById("menu")) {
          document.getElementById("menu").classList.add("hidden");
        }
      }
    },
  },
};
</script>
<style></style>
