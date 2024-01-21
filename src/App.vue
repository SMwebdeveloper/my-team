<template>
  <navbar />
  <main>
    <router-view />
  </main>
  <app-footer />
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style scoped></style>
