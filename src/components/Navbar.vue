<template>
  <section class="bg-primaryColor py-9">
    <div class="project-container flex items-center justify-between relative">
      <img
        v-motion-fade
        src="@/assets/images/svg/logo.svg"
        alt="site logo"
        class="w-32 lg:w-40 mr-20"
      />

      <!-- Bars button -->
      <button
        v-motion-fade
        @click="sidebar = !sidebar"
        class="md:hidden float-right"
      >
        <bars3-icon class="w-[30px] text-white" />
      </button>

      <!-- Navigation -->
      <div
        v-motion-fade
        data-className="navbar"
        class="fixed z-50 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.50)] transition-all duration-400 md:visible md:relative md:w-[90%] md:bg-transparent"
        :class="`${sidebar ? 'visible  ' : 'invisible delay-300'}`"
      >
        <div
          class="absolute md:static top-0 transition-all duration-500 delay-100 ease-in-out md:w-full h-full z-50 bg-policeBlue md:bg-transparent flex flex-col md:flex-row md:items-center md:justify-between w-[255px] pt-5 md:pt-0 px-8 md:px-0 lg:right-[0] before:absolute before:right-0 before:bottom-0 before:h-[200px] before:w-24 before:bg-aboutImage7 md:before:hidden"
          :class="`${sidebar ? 'right-0 ' : 'right-[-100%]'}`"
        >
          <button
            @click="sidebar = !sidebar"
            class="text-white ml-auto text-3xl font-medium md:hidden mb-10"
          >
            &times;
          </button>
          <nav
            class="flex flex-col md:flex-row md:items-center mb-9 md:mb-0 md:flex-1 text-white text-[18px] font-semibold"
          >
            <a>
              <router-link
                @click="sidebar = false"
                to="/"
                class="mr-3 duration-200 hover:text-primaryLight inline-block mb-6 md:mb-0"
                >home</router-link
              >
            </a>
            <a>
              <router-link
                @click="sidebar = false"
                to="/about"
                class="duration-200 hover:text-primaryLight"
                >about</router-link
              >
            </a>
          </nav>

          <a>
            <router-link
              @click="sidebar = false"
              to="/contact"
              class="text-white text-center text-[18px] border-2 px-8 py-2 rounded-full duration-200 hover:text-primaryColor hover:bg-white font-semibold"
              >contact</router-link
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const sidebar = ref(false);

window.addEventListener("click", (e) => {
  // console.log(e.target.getAttribute("data-className"));
  const className = e.target.getAttribute("class")

  // className === 'navbar' ? sidebar.value = false : true
  if (className === 'navbar') {
    sidebar.value = false
    console.log(sidebar.value)
  }

});
</script>
