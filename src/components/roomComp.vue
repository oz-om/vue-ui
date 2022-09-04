<template>
  <div id="room" class="grid grid-cols-[auto_1fr_1fr] gap-x-2 items-center justify-around p-1 rounded-lg max-h-28">
    <div class="w-16 h-16 overflow-hidden">
      <img src="https://avatars.dicebear.com/api/bottts/ro.svg?background=%23A3D521" alt="room cover" class="rounded-full" />
    </div>
    <div class="md:grid grid-cols-[1fr_auto]">
      <h4 class="line-clamp-2 py-2">{{ groupName }}</h4>
      <p class="font-normal text-md relative w-16 greenPill md:grid md:items-center">{{ status }}</p>
    </div>
    <div id="room-details" class="grid md:grid-cols-3">
      <div id="count" class="col-span-1 text-center md:col-auto">
        <span class="text-xs text-gray-100/50 font-light md:hidden">members</span>
        <p class="text-xl text-cyan-400">{{ count }}</p>
      </div>
      <div id="max" class="col-span-1 text-center md:col-auto">
        <span class="text-xs text-gray-100/50 font-light md:hidden">max</span>
        <p class="text-xl text-orange-400">{{ max }}</p>
      </div>
      <div id="join" class="col-span-2 py-1 md:col-auto">
        <button class="bg-violet-500 block p-2 w-6/12 mx-auto rounded-xl cursor-pointer">join</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "roomComp",
  props: ["groupName", "status", "count", "max"],
};
</script>