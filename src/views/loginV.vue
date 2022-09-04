<template>
  <div id="login-container" class="grid place-content-center py-32">
    <div id="login" class="rounded-xl bg-indigo-600/25 px-10 py-2">
      <div id="head" class="grid place-content-center py-4">
        <i class="bx bxs-plug bx-rotate-180 text-5xl"></i>
      </div>
      <div id="inputs">
        <div id="user">
          <label class="">user name/email:</label>
          <input type="text" name="user" placeholder="user name or email" class="input mb-4" />
        </div>
        <div id="pass">
          <label class="">password:</label>
          <input type="password" name="pass" placeholder="password" class="input mb-4" />
        </div>
        <button class="px-4 py-1 bg-violet-500 rounded-md w-28 mx-auto my-5 block" @click="login">login</button>
      </div>
      <p class="text-indigo-100 py-3">
        you don't have one
        <router-link to="/register" class="text-violet-300">create one?</router-link>
      </p>
    </div>
  </div>
</template>

<script>
let server = "http://127.0.0.1:4011/";
export default {
  name: "loginV",
  methods: {
    async login() {
      let user = document.querySelector("#user input").value;
      let pass = document.querySelector("#pass input").value;
      if (user.trim().length && pass.trim().length) {
        let req = await fetch(server + "login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            user,
            pass,
          }),
        });
        let res = await req.json();
        if (res.res) {
          this.$cookies.set("token", res.token);
          this.$router.push("home");
        } else {
          console.log(res.msg);
        }
      } else {
        console.log("requi");
      }
    },
  },
  mounted() {},
};
</script>
