<template>
  <navbar />
  <router-view />
  <app-footer/>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style scoped></style>
