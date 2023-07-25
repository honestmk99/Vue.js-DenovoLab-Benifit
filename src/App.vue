<template>
  <Header />

  <router-view />

  <Footer />
</template>

<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

// import '@/assets/styles/titles.scss'
</script>
