<template>
  <header
    class="bg-white max-w-1600 m-auto px-155 -md-px-39 -sm-px-15 grid grid-columns-3 align-items-center -sm-flex -sm-justify-content-between position-fixed w-full z-2000"
  >
    <router-link to="/">
      <img :src="HeaderLogo" alt="" />
    </router-link>
    <div class="grid">
      <div class="search-bar">
        <input
          type="text"
          class="py-12 pl-43 pr-12 rounded-12 border-none border text-input font-lato font-h6 font-normal w-570 -md-hidden"
          placeholder="Search benefits"
        />
      </div>
      <img :src="Searchicon" alt="" class="hidden -md-block justify-self-end" />
    </div>
    <div class="grid">
      <div
        class="justify-self-end border-red bg-white rounded-12 px-18 py-12 text-red font-h6 font-semibold"
      >
        Benefit finder
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderLogo from "@/assets/images/HeaderLogo.svg";
import Searchicon from "@/assets/images/Searchicon.svg";
</script>

<style scoped>
.search-bar {
  position: relative;
}

.search-bar::before {
  content: "";
  position: absolute;
  background-image: url("../assets/images/Searchicon.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 18px;
  line-height: 43px;
  top: 0;
  left: 18px;
  z-index: 2;
}
</style>
