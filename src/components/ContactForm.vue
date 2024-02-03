<template>
  <form
    @submit.prevent="addContact"
    class="w-full sm:w-[542px] lg:w-1/2 mx-auto"
  >
    <div class="relative w-full mb-6 group">
      <input
        v-motion
        :initial="{ opacity: 0, y: 100, scaleZ: -3 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scaleZ: 1,
          transition: { duration: 500, delay: 1500 },
        }"
        v-model="contact.name"
        type="text"
        class="block pt-2.5 pb-4 px-2 w-full text-[15px] font-semibold text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-raptureBlue placeholder:text-[15px] placeholder:font-semibold placeholder:text-white placeholder:opacity-[0.6]"
        :class="{
          'placeholder:text-primaryLight border-primaryLight':
            errMessage.errorName,
        }"
        placeholder="Name"
      />
      <span
        v-if="errMessage.errorName"
        class="text-[10px] font-bold text-primaryLight italic"
        >This field is required</span
      >
    </div>
    <div class="relative w-full mb-6 group">
      <input
        v-motion
        :initial="{ opacity: 0, y: 100, scaleZ: -3 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scaleZ: 1,
          transition: { duration: 500, delay: 1800 },
        }"
        v-model="contact.email"
        type="email"
        class="block pt-2.5 pb-4 px-2 w-full text-[15px] font-semibold text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-raptureBlue placeholder:text-[15px] placeholder:font-semibold placeholder:text-white placeholder:opacity-[0.6]"
        :class="{
          'placeholder:text-primaryLight border-primaryLight':
            errMessage.errorEmail,
        }"
        placeholder="Email"
      />
      <span
        v-if="errMessage.errorEmail"
        class="text-[10px] font-bold text-primaryLight italic"
        >This field is required</span
      >
    </div>
    <div class="relative w-full mb-6 group">
      <input
        v-motion
        :initial="{ opacity: 0, y: 100, scaleZ: -3 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scaleZ: 1,
          transition: { duration: 500, delay: 2100 },
        }"
        v-model="contact.companyName"
        type="text"
        class="block pt-2.5 pb-4 px-2 w-full text-[15px] font-semibold text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-raptureBlue placeholder:text-[15px] placeholder:font-semibold placeholder:text-white placeholder:opacity-[0.6]"
        :class="{
          'placeholder:text-primaryLight border-primaryLight':
            errMessage.errorCompanyName,
        }"
        placeholder="Company Name"
      />
      <span
        v-if="errMessage.errorCompanyName"
        class="text-[10px] font-bold text-primaryLight italic"
        >This field is required</span
      >
    </div>
    <div class="relative w-full mb-6 group">
      <input
        v-motion
        :initial="{ opacity: 0, y: 100, scaleZ: -3 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scaleZ: 1,
          transition: { duration: 500, delay: 2400 },
        }"
        v-model="contact.title"
        type="text"
        class="block pt-2.5 pb-4 px-2 w-full text-[15px] font-semibold text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-raptureBlue placeholder:text-[15px] placeholder:font-semibold placeholder:text-white placeholder:opacity-[0.6]"
        :class="{
          'placeholder:text-primaryLight border-primaryLight':
            errMessage.errorTitle,
        }"
        placeholder="Title"
      />
      <span
        v-if="errMessage.errorTitle"
        class="text-[10px] font-bold text-primaryLight italic"
        >This field is required</span
      >
    </div>
    <div class="relative w-full mb-6 group">
      <textarea
        v-motion
        :initial="{ opacity: 0, y: 100, scaleZ: -3 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scaleZ: 1,
          transition: { duration: 500, delay: 2700 },
        }"
        v-model="contact.message"
        type="text"
        class="block pt-2.5 pb-4 px-2 w-full min-h-[100px] text-[15px] font-semibold text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-raptureBlue placeholder:text-[15px] placeholder:font-semibold placeholder:text-white placeholder:opacity-[0.6]"
        :class="{
          'placeholder:text-primaryLight border-primaryLight':
            errMessage.errorMessage,
        }"
        placeholder="Message"
      ></textarea>
      <span
        v-if="errMessage.errorMessage"
        class="text-[10px] font-bold text-primaryLight italic"
        >This field is required</span
      >
    </div>
    <button
      v-motion
      :initial="{ opacity: 0, scaleZ: -3 }"
      :visibleOnce="{
        opacity: 1,
        scaleZ: 1,
        transition: { duration: 500, delay: 2900 },
      }"
      type="submit"
      class="text-primaryColor bg-white hover:bg-primaryColor hover:text-white duration-150 border-2 border-white focus:ring-4 focus:outline-none focus:ring-white focus:bg-primaryColor focus:text-white font-semibold rounded-3xl text-[18px] sm:w-auto px-5 py-2.5 text-center"
    >
      submit
    </button>
  </form>
</template>
<script setup>
import { ref } from "vue";

const contact = ref({
  name: "",
  email: "",
  companyName: "",
  title: "",
  message: "",
});
const errMessage = ref({
  errorName: false,
  errorEmail: false,
  errorCompanyName: false,
  errorTitle: false,
  errorMessage: false,
});
const addContact = () => {
  const { name, email, companyName, title, message } = contact.value;
  if (companyName && email && message && name && title) {
    console.log("add");
    name = "";
    email = "";
    companyName = "";
    title = "";
    message = "";
  } else {
    name === ""
      ? (errMessage.value.errorName = true)
      : (errMessage.value.errorName = false);
    email === ""
      ? (errMessage.value.errorEmail = true)
      : (errMessage.value.errorEmail = false);
    companyName === ""
      ? (errMessage.value.errorCompanyName = true)
      : (errMessage.value.errorCompanyName = false);
    title === ""
      ? (errMessage.value.errorTitle = true)
      : (errMessage.value.errorTitle = false);
    message === ""
      ? (errMessage.value.errorMessage = true)
      : (errMessage.value.errorMessage = false);
  }
  setTimeout(() => {
    errMessage.value.errorName = false;
    errMessage.value.errorEmail = false;
    errMessage.value.errorMessage = false;
    errMessage.value.errorTitle = false;
    errMessage.value.errorCompanyName = false;
  }, 3000);
};
</script>
