<template>
  <div id="nav" class="flex justify-between shadow border-b-[1px] border-b-white/2">
    <div id="logo" class="w-36">
      <router-link to="/">
        <!-- https://svgshare.com/i/m9r.svg  https://svgshare.com/i/m7D.svg-->
        <img src="https://svgshare.com/i/m9r.svg" alt="logo" />
      </router-link>
    </div>
    <div v-if="user" id="user-info" class="relative grid place-content-center">
      <div id="profile" class="w-12 h-12 rounded-full overflow-hidden cursor-pointer" @click="toggleMenu">
        <img src="https://avatars.dicebear.com/api/bottts/ro.svg" alt="user avatar" />
      </div>
      <ul id="menu" class="absolute top-full right-0 bg-indigo-300 w-36 border border-indigo-400 rounded topArrow hidden z-10">
        <li><router-link to="/profile" class="link">view profile</router-link></li>
        <li class="link" @click="logout">logout</li>
      </ul>
    </div>
    <div v-else class="grid place-content-center text-3xl text-pink-500">
      <router-link to="/register">
        <i class="bx bxs-log-in-circle"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      user: this.$globalData.user,
    };
  },
  methods: {
    toggleMenu() {
      document.getElementById("menu").classList.toggle("hidden");
    },
    logout() {
      this.$cookies.remove("token");
      location.reload();
    },
  },
  mounted() {},
};
</script>
