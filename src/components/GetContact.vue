<template>
  <section
    class="bg-primaryLight py-[83px] md:py-[84px] lg:py-[76px] relative before:absolute before:z-0 before:bottom-[-80px] before:lg:bottom-[-56px] before:left-0 before:w-[200px] before:h-[200px] before:bg-aboutIcon4 before:bg-no-repeat"
  >
    <div
      class="project-container flex flex-col md:flex-row items-center justify-around"
    >
      <h2
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: { duration: 600, delay: 200 },
        }"
        class="text-darkGreen text-[32px] lg:text-5xl w-[327px] md:w-auto text-center mb-6 md:mb-0 font-bold leading-[32px] lg:leading-[48px]"
      >
        Ready to get started?
      </h2>
      <router-link
        v-motion
        :initial="{ opacity: 0, y: '200px' }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 300, delay: 400 },
        }"
        to="/contact"
        class="text-darkGreen text-center text-[18px] border-2 border-darkGreen px-8 py-2 rounded-full duration-200 hover:text-white hover:bg-darkGreen font-semibold"
        >contact us</router-link
      >
    </div>
  </section>
</template>
