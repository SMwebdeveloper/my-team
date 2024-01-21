<template>
  <section class="bg-primaryColor pb-20 pt-16 md:pb-28 md:pt-20 lg:pb-[120px] relative before:absolute before:hidden before:md:inline before:top-[100px] before:left-0 before:w-[100px] before:h-[200px] before:bg-aboutIcon6 before:bg-no-repeat after:absolute after:bottom-[-110px] after:md:bottom-0 after:right-0 after:w-[100px] after:h-[225px] after:bg-aboutIcon8 after:bg-no-repeat">
    <div class="project-container flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <div class="w-full lg:w-1/2 mb-14 md:mb-16 lg:mb-0">
        <h2
          class="text-[40px] md:text-[64px] font-bold leading-10 md:leading-[56px] lg:leading-[100px] text-white mb-4 md:mb-6 lg:mb-4 text-center lg:text-left"
        >
          Contact
        </h2>
        <h4
          class="text-[32px] font-bold leading-[48px] text-primaryLight text-center lg:text-left mb-10 md:mb-6 lg:mb-8"
        >
          Ask us about
        </h4>
        <ul class="max-w-[570px] mx-auto md:w-auto lg:mx-0">
          <li class="flex items-center mb-6 md:mb-2">
            <img
              src="@/assets/images/cards/cards-1.png"
              alt="card first image"
              class="w-[72px] h-[72px]  mr-6"
            />
            <h4 class="text-[18px] font-bold text-white leading-7">
              The quality of our talent network
            </h4>
          </li>
          <li class="flex items-center mb-6 md:mb-2">
            <img
              src="@/assets/images/cards/cards-2.png"
              alt="card second image"
              class="w-[72px] h-[72px] mr-6"
            />
            <h4 class="text-[18px] font-bold text-white leading-7">
              Usage & implementation of our software
            </h4>
          </li>
          <li class="flex items-center mb-6 md:mb-2">
            <img
              src="@/assets/images/cards/cards-3.png"
              alt="card third image"
              class="w-[72px] h-[72px] mr-6"
            />
            <h4
              class="text-[18px] font-bold text-white leading-7"
            >
              How we help drive innovation
            </h4>
          </li>
        </ul>
      </div>
      <ContactForm/>
    </div>
  </section>
</template>
<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>
