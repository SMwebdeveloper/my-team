<template>
  <div class="!scroll-smooth bg-primaryColor overflow-x-hidden">
    <navbar />
  <main>
    <router-view v-slot="{Component}">
      <transition name="route" made="out-in" :duration="500">
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
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
