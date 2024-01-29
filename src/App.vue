<template>
  <div class="!scroll-smooth bg-primaryColor">
    <navbar />
  <main>
    <router-view v-slot="{Component}">
      <transition name="slide" made="out-in" :duration="550">
        <Component :is="Component"/>
      </transition>
    </router-view>
  </main>
  <app-footer />

  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";
import { onMounted } from "vue";
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>

<style>
main {
  will-change: transform, opacity;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translatey(300px);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}
</style>
