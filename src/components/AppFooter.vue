<template>
  <footer class="bg-darkGreen py-12 relative z-10">
    <div class="project-container flex flex-col md:flex-wrap md:flex-row  items-center justify-center md:items-start md:justify-between">
      <div v-motion :initial="{opacity:0, y:-100}" :visibleOnce="{opacity:1, y:0, transition:{duration:500, delay:900}}" class="w-auto md:w-1/2 lg:w-auto md:mr-36 mb-4 md:mb-0">
        <img src="@/assets/images/svg/logo.svg" alt="site logo" class="mb-4 md:mb-6 w-24 md:w-40 mx-auto md:mx-0 md:mr-auto"/>
        <nav
          class="flex items-center justify-center sm:justify-start md:flex-1 text-white text-[18px] font-semibold"
        >
          <a>
            <router-link
              to="/"
              class="mr-3 duration-200 hover:text-primaryLight inline-block"
              >home</router-link
            >
          </a>
          <a>
            <router-link
              to="/about"
              class="duration-200 hover:text-primaryLight"
              >about</router-link
            >
          </a>
        </nav>
      </div>
      <ul v-motion :initial="{opacity:0, y:-100}" :visibleOnce="{opacity:1, y:0, transition:{duration:500, delay:700}}" class="w-auto mb-4 md:mb-0 md:w-1/2 lg:w-auto sm:flex-1 text-center md:text-right lg:text-left text-base text-slate-300 font-medium">
        <li class="mb-1">987 Hillcrest Lane</li>
        <li class="mb-1">Irvine, CA</li>
        <li class="mb-1">California 92714</li>
        <li>Call Us : 949-833-7432</li>
      </ul>
      <div v-motion :initial="{opacity:0, y:-100}" :visibleOnce="{opacity:1, y:0, transition:{duration:500, delay:500}}" class="w-auto md:w-full lg:w-auto flex flex-col md:flex-row md:items-center md:justify-between lg:flex-col md:mt-6 lg:mt-0">
        <ul class="mx-auto md:mx-0 lg:ml-auto w-[104px] flex items-end mb-3 lg:mb-[51px] ">
          <li class="mr-3">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 text-white duration-200 hover:text-primaryLight"
              >
                <path
                  d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="mr-3">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 text-white duration-200 hover:text-primaryLight"
              >
                <path
                  d="M13.3717 2.09442C8.42512 1.41268 3.73383 4.48505 2.38064 9.29256C1.02745 14.1001 3.42711 19.1692 8.00271 21.1689C7.94264 20.4008 7.99735 19.628 8.16502 18.8761C8.34964 18.0374 9.46121 13.4132 9.46121 13.4132C9.23971 12.9173 9.12893 12.379 9.13659 11.8359C9.13659 10.3509 9.99353 9.24295 11.0597 9.24295C11.4472 9.23718 11.8181 9.40028 12.0758 9.68981C12.3335 9.97934 12.4526 10.3667 12.402 10.751C12.402 11.6512 11.8236 13.0131 11.5228 14.2903C11.4014 14.7656 11.5131 15.2703 11.8237 15.65C12.1343 16.0296 12.6069 16.2389 13.0967 16.2139C14.9944 16.2139 16.2675 13.7825 16.2675 10.9126C16.2675 8.71205 14.8098 7.0655 12.1243 7.0655C10.826 7.01531 9.56388 7.4996 8.63223 8.40543C7.70057 9.31126 7.18084 10.5595 7.19423 11.859C7.16563 12.5722 7.39566 13.2717 7.84194 13.8287C8.01361 13.9564 8.07985 14.1825 8.00425 14.3827C7.9581 14.5673 7.84194 15.0059 7.79578 15.1675C7.77632 15.278 7.70559 15.3728 7.60516 15.4228C7.50473 15.4729 7.38651 15.4724 7.28654 15.4214C5.9019 14.8674 5.24957 13.3439 5.24957 11.6051C5.24957 8.75822 7.63424 5.3497 12.4036 5.3497C16.1998 5.3497 18.723 8.1273 18.723 11.0972C18.723 15.0059 16.5468 17.9451 13.3298 17.9451C12.3526 17.9761 11.4273 17.5061 10.8759 16.6986C10.8759 16.6986 10.2974 19.0146 10.1835 19.4531C9.95101 20.2099 9.60779 20.9281 9.16505 21.5844C10.0877 21.8643 11.0471 22.0044 12.0113 22C14.6636 22.0017 17.2078 20.9484 19.0829 19.072C20.958 17.1957 22.0099 14.6504 22.0069 11.9975C22.004 7.00306 18.3183 2.77616 13.3717 2.09442Z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 text-white duration-200 hover:text-primaryLight"
              >
                <path
                  d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <p class="text-sm text-slate-300 font-medium">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
</script>
