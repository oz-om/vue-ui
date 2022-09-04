<template>
  <div class="lg:grid lg:grid-cols-[1fr_auto] relative">
    <!-- room container -->
    <div id="rooms-container" class="mt-2 overflow-hidden">
      <!-- start search bar -->
      <div id="search-bar" class="relative overflow-hidden flex items-center pl-2 backdrop-blur-md shadow-sm shadow-violet-400 w-11/12 mx-auto rounded-md">
        <i class="bx bx-search-alt text-3xl absolute z-[-1] text-violet-500"></i>
        <input type="text" class="w-full bg-transparent outline-none pl-10 py-2" placeholder="search" />
      </div>
      <!-- starts titles bar -->
      <div id="titlesBar" class="hidden md:block rounded-t-lg my-2 py-1 bg-indigo-800">
        <ul class="grid grid-cols-[auto_1fr_1fr] gap-x-2 items-center justify-around">
          <li class="w-16"></li>
          <li class="grid grid-cols-[1fr_auto]">
            <p>name</p>
            <p class="w-16">status</p>
          </li>
          <li class="grid grid-cols-3">
            <p class="text-center">members</p>
            <p class="text-center">max</p>
            <p class="text-center">join</p>
          </li>
        </ul>
      </div>
      <!-- start rooms -->
      <div id="rooms" class="pt-2 grid striped md:gap-y-2 max-h-[548px] min-h-[480px] overflow-hidden">
        <room-comp :groupName="GroupName" :status="status" :count="count" :max="max"></room-comp>
        <!-- <room-comp :groupName="GroupName" :status="status" :count="count" :max="max"></room-comp>
        <room-comp :groupName="GroupName" :status="status" :count="count" :max="max"></room-comp>
        <room-comp :groupName="GroupName" :status="status" :count="count" :max="max"></room-comp>
        <room-comp :groupName="GroupName" :status="status" :count="count" :max="max"></room-comp> -->
      </div>
      <!-- pagination -->
      <div class="flex justify-between items-center py-2 px-2 mt-2 rounded-xl bg-violet-700/25 lg:justify-center">
        <div id="add-room" class="lg:hidden">
          <i class="bx bxs-message-square-add bg-violet-500 text-yellow-300 rounded-full p-2 text-4xl cursor-pointer" @click="addRoom"></i>
        </div>
        <div id="pagination" class="flex items-center gap-x-3">
          <div id="pagination-total">
            <span id="current">1</span>
            of
            <span id="total">321</span>
          </div>
          <div id="arrows" class="text-4xl flex">
            <div id="start" class="">
              <i class="bx bx-chevrons-left cursor-pointer rounded-full hover:bg-indigo-300"></i>
            </div>
            <div id="back">
              <i class="bx bx-chevron-left cursor-pointer rounded-full ml-3 hover:bg-indigo-300"></i>
            </div>
            <div id="front">
              <i class="bx bx-chevron-right cursor-pointer rounded-full ml-3 hover:bg-indigo-300"></i>
            </div>
            <div id="end">
              <i class="bx bx-chevrons-right cursor-pointer rounded-full ml-3 hover:bg-indigo-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- new room block -->
    <div id="create-container" class="hidden absolute w-full h-full top-0 backdrop-blur-md place-content-center pl-2 overflow-hidden bg-black/25 lg:block lg:relative">
      <div id="close" class="absolute top-2 right-2 lg:hidden">
        <i class="bx bx-x-circle text-2xl text-teal-400 cursor-pointer" @click="closeCreate"></i>
      </div>
      <div id="create" class="backdrop-blur-md bg-indigo-800/50 px-3 mt-2 rounded-md shadow shadow-sky-50/50 h-full max-w-sm min-w-[343.41px]">
        <div id="cover" class="relative">
          <img src="https://avatars.dicebear.com/api/bottts/ele.svg?background=%23425ACC" alt="chosen cover" class="w-16 h-16 rounded-full mx-auto border" />
          <label for="upPhoto" class="w-16 h-16 rounded-full mx-auto border flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <i class="bx bxs-camera-plus text-2xl"></i>
          </label>
          <input type="file" id="upPhoto" class="hidden" @change="readPhoto" />
        </div>
        <div id="insertName" class="">
          <h4>Group Name:</h4>
          <input type="text" id="gbName" placeholder="group name" class="input" />
        </div>
        <div id="insertMax" class="">
          <h4>max members:</h4>
          <div id="maxChoices" class="grid grid-cols-3 gap-4">
            <div>
              <input type="radio" name="two" id="two" class="hidden peer" checked="checked" />
              <label for="two" class="checkbox" @click="selectMax">two</label>
            </div>
            <div>
              <input type="radio" name="three" id="three" class="hidden" />
              <label for="three" class="checkbox" @click="selectMax">three</label>
            </div>
            <div>
              <input type="radio" name="four" id="four" class="hidden" />
              <label for="four" class="checkbox" @click="selectMax">four</label>
            </div>
          </div>
        </div>
        <div id="insertState">
          <h4>status:</h4>
          <div class="flex gap-x-2">
            <div class="basis-1/2">
              <input type="radio" id="public" class="peer hidden" checked />
              <label for="public" class="checkbox" @click="selectStat">public</label>
            </div>
            <div class="basis-1/2">
              <input type="radio" id="private" class="peer hidden" />
              <label for="private" class="checkbox" @click="selectStat">private</label>
            </div>
          </div>
        </div>
        <div v-if="statusPrivate" id="Key" class="flex items-center gap-x-3">
          <h4 class="whitespace-nowrap">private Key:</h4>
          <input type="text" id="privatekey" :value="key" readonly class="w-36 bg-transparent px-3 py-1 rounded-md bg-indigo-700" />
          <button class="bg-violet-500 block p-1 text-sm font-light w-16 rounded-xl cursor-pointer">copy</button>
        </div>
        <div id="topic">
          <h4>topic:</h4>
          <input type="text" name="topic" placeholder="topic" class="input" />
        </div>
        <div id="desc" class="">
          <h4>description:</h4>
          <textarea name="desc" placeholder="insert description" class="resize-none input no-scrollbar w-10/12" @input="autoResize"></textarea>
        </div>
        <button class="w-36 bg-pink-500/75 py-2 px-4 mx-auto my-4 rounded-md block" @click="createRoom">create room</button>
      </div>
    </div>
  </div>
</template>

<script>
import roomComp from "../components/roomComp.vue";

export default {
  name: "homeV",
  data() {
    return {
      GroupName: "group Name for watching",
      status: "private",
      count: 2,
      max: 4,
      statusPrivate: false,
      key: "",
      newRoom: {
        name: String,
        cover: "https://avatars.dicebear.com/api/bottts/ele.svg?background=%23425ACC",
        max: Number,
        stat: false,
        key: null,
        topic: String,
        desc: String,
      },
    };
  },

  components: { roomComp },
  methods: {
    autoResize(e) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    },
    readPhoto(e) {
      let img = document.querySelector("#cover img");
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        img.src = reader.result;
      };
    },
    toggle(e) {
      let current = e.target.previousSibling;
      let choices = e.target.parentElement.parentElement.children;
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].querySelector("input") != current) {
          choices[i].querySelector("input").classList.remove("peer");
          choices[i].querySelector("input").removeAttribute("checked");
        } else {
          choices[i].querySelector("input").classList.add("peer");
          choices[i].querySelector("input").setAttribute("checked", "checked");
        }
      }
    },
    selectMax(e) {
      let nums = { two: 2, three: 3, four: 4, five: 5, six: 6 };
      let current = e.target.previousSibling;
      this.toggle(e);

      this.newRoom.max = nums[current.id];
    },
    selectStat(e) {
      let stat = {
        private: true,
        public: false,
      };
      let current = e.target.previousSibling;
      this.statusPrivate = stat[current.id];
      this.toggle(e);

      this.newRoom.stat = stat[current.id];
      if (stat[current.id]) {
        let key = this.randomKey();
        this.key = key;
        this.newRoom.key = key;
      }
    },
    randomKey() {
      let str = "QWERTYUIOPASDFGHJKLZXCVBNM",
        nums = "1234567890".split(""),
        symbols = "!@#$%^&*){}[]".split(""),
        upper = str.split(""),
        lower = str.toLowerCase().split("");

      let mix = [...nums, ...symbols, ...upper, ...lower];
      let key = "";
      for (let i = 0; i < 8; i++) {
        key += mix[Math.floor(Math.random() * mix.length)];
      }
      return key;
    },
    createRoom() {
      let name = document.querySelector("#insertName input").value;
      let topic = document.querySelector("#topic input").value;
      let desc = document.querySelector("#desc textarea").value;
      if (name.trim().length && topic.trim().length && desc.trim().length) {
        this.newRoom.name = name;
        this.newRoom.topic = topic;
        this.newRoom.desc = desc;

        console.log(this.newRoom);
      } else {
        console.log("error");
      }
    },
    addRoom() {
      document.getElementById("create-container").classList.remove("hidden");
      document.getElementById("create-container").classList.add("grid");
    },
    closeCreate() {
      console.log("method home start ");
      document.getElementById("create-container").classList.add("hidden");
      document.getElementById("create-container").classList.remove("grid");
    },
  },
  mounted() {},
};
</script>
