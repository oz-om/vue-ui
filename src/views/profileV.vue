<template>
  <div id="profile" class="px-4">
    <div class="grid place-content-center p-3">
      <img src="https://avatars.dicebear.com/api/bottts/ro.svg?background=%23A3D521" alt="photo profile" class="w-36 h-36 border-4 border-indigo-50 rounded-full" />
      <div id="change">
        <label for="change-photo" class="grid place-content-center">
          <i class="bx bx-cloud-upload text-3xl"></i>
        </label>
        <input type="file" id="change-photo" class="hidden" />
      </div>
    </div>
    <div id="details" class="md:flex md:justify-center md:gap-x-4">
      <div id="user-info" class="mb-4 rounded-md p-4 min-h-[215px] bg-indigo-700/25">
        <div id="name">
          <p class="text-white/70">full name:</p>
          <span>Adnane aberahim</span>
        </div>
        <div id="email">
          <p class="text-white/70">email:</p>
          <span>Adnane_aberahim@mail.com</span>
        </div>
      </div>
      <div id="reset-pass" class="rounded-md p-4 min-h-[215px] bg-indigo-700/25">
        <div id="old">
          <label for="old-pass">current password:</label>
          <input type="password" name="old" id="old-pass" placeholder="old password" class="input" />
        </div>
        <div id="new" class="mt-2">
          <label for="new-pass">new password:</label>
          <input type="password" name="new" id="new-pass" placeholder="new password" class="input" />
        </div>
        <div id="update" class="mt-2">
          <button class="bg-indigo-400 py-1 px-4 rounded-md ml-10 mt-3 cursor-pointer">update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileV",
  methods: {},
  mounted() {
    if (this.$globalData.user) {
      console.log("profile info");
    }
  },
};
</script>
