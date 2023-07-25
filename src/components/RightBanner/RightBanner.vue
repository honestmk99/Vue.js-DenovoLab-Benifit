<template>
  <div
    class="max-w-1600 m-auto px-155 -md-px-39 -sm-px-15 pb-120 -md-pb-90 -sm-pb-60 grid gap-98 grid-order"
  >
    <div
      class="image grid justify-content-between gap-500 -md-gap-32 px-32 -md-px-64 -sm-px-0 py-18 rounded-16 align-items-center template-area"
    >
      <h1
        class="view-text m-0 font-h3 -sm-font-h4 font-nomal font-lato text-white -md-text-center text-right -md-text-center"
      >
        Free Mobile Service and Free Device
        <span class="text-blue">Affordable Connectivity Program</span>
      </h1>
      <div class="m-auto">
        <div
          class="view-button bg-blue text-white rounded-12 px-18 py-12 font-h6 font-lato font-semibold text-nowrap"
        >
          View more
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script setup lang="ts">
</script>
    
    <style scoped>
.image {
  background-image: linear-gradient(#0e1825cc, #0e1825cc),
    url("../../assets/images/Mini_banner_right.jpg");
  background-position: center;
  background-size: cover;
}
.view-button {
  grid-area: button;
}
.view-text {
  grid-area: text;
}
.template-area {
  grid-template-areas: "button text";
}
@media (max-width: 768px) {
  .template-area {
    grid-template-areas: "text" "button";
  }
}
</style>
      