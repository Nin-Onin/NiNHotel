<script></script>
<template>
  <div
    class="h-screen w-full bg-landing bg-no-repeat bg-center bg-cover overflow-y-auto"
  >
    <header class="h-44">
      <nav class="bg-white border-gray-20 0 px-4 lg:px-6 py-2.5 bg-transparent">
        <div
          class="flex flex-wrap justify-between items-center mx-auto px-32 w-full"
        >
          <img src="/logo.png" class="h-44" />

          <div class="flex items-center lg:order-2">
            <router-link
              to="/signin"
              class="text-lg text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
              >LOGIN</router-link
            >
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-20 lg:mt-0"
            >
              <li>
                <router-link
                  to="/home"
                  class="block py-2 pr-4 pl-3 text-white lg:p-0 text-3xl hover:bg-[#BF9634]"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/hotels"
                  class="block py-2 pr-4 pl-3 text-white lg:p-0 text-3xl hover:bg-[#BF9634]"
                  >Hotels</router-link
                >
              </li>
              <li>
                <router-link
                  to="/services"
                  class="block py-2 pr-4 pl-3 text-white lg:p-0 text-3xl hover:bg-[#BF9634]"
                  >Services</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="block py-2 pr-4 pl-3 text-white lg:p-0 text-3xl hover:bg-[#BF9634]"
                  >About</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="block py-2 pr-4 pl-3 text-white lg:p-0 text-3xl hover:bg-[#BF9634]"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- display ang router link to -->
    <div class="h-full w-full p-10">
      <router-view />
    </div>
  </div>
</template>
