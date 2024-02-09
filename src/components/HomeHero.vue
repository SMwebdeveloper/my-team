<template>
  <section
    class="bg-primaryColor pt-10 md:pt-20 relative before:hidden before:lg:inline-block before:absolute before:top-[80px] before:left-0 before:w-[100px] before:h-[200px] before:bg-headerCircle before:bg-no-repeat before:bg-contain"
  >
    <div
      class="project-container flex flex-col pb-48 md:pb-64 lg:pb-72 lg:flex-row items-center justify-center lg:items-center lg:justify-between relative after:absolute after:bottom-[-100px] after:lg:right-0 after:w-[358px] after:h-[200px] after:bg-headerCircle2 after:bg-no-repeat"
    >
      <h2
        v-motion
        :initial="{ opacity: 0, y:-100 }"
        :enter="{ opacity: 1, y:0, transition: { duration: 400} }"
        class="max-w-[635px] header-title mb-5 md:mb-6 lg:mb-0"
      >
        Find the <br />
        best <span class="text-primaryLight">talent</span>
      </h2>
      <div v-motion
        :initial="{ opacity: 0, x:100}"
        :visibleOnce="{ opacity: 1, x:0, transition: { duration: 400,  } }"
        class="max-w-[445px] lg:h-[195px] lg:flex lg:flex-col items-start justify-between"
      >
        <span class="hidden lg:inline-block bg-raptureBlue w-12 h-1"></span>
        <p class="header-subtitle">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
