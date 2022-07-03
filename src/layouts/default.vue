<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="flex flex-row">
      <div class="basis-2/8">
        <SideBar />
      </div>
      <div class="px-4 pt-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style>
body {
  background-color: #f7f8fa;
}
</style>
