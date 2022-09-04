<template>
  <div id="register-container" class="grid place-content-center pt-32">
    <div id="register" class="rounded-xl bg-indigo-600/25 px-10 py-2">
      <div id="head" class="grid place-content-center py-4">
        <i class="bx bxs-analyse text-6xl mx-auto mb-3 text-indigo-400"></i>
        <p>create new account</p>
      </div>
      <div id="inputs">
        <div id="user">
          <label class="">full name:</label>
          <input type="text" name="user" placeholder="full name" class="input mb-4" />
        </div>
        <div id="email">
          <label>email:</label>
          <input type="email" name="email" placeholder="email" class="input mb-4" />
        </div>
        <div id="pass">
          <label class="">password:</label>
          <input type="password" name="pass" placeholder="password" class="input mb-4" />
        </div>
        <div class="register">
          <button class="px-4 py-1 bg-violet-500 rounded-md w-28 mx-auto my-5 block">create one</button>
        </div>
      </div>
      <p class="text-indigo-100 py-3">
        you already have one
        <router-link to="/login" class="text-violet-300">login?</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerV",
};
</script>
