<script></script>
<template>
  <div class="h-full w-full bg-white rounded">
    <div class="w-full h-4/5 flex justify-center space-x-20 p-7">
      <div class="w-1/3 h-full">
        <div class="w-full h-4/5 rounded overflow-hidden">
          <img
            src="/Austria.jpg"
            class="h-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <h1 class="relative -mt-16 ml-12 text-3xl font-medium">
            AUSTRIA HOTEL
          </h1>
        </div>
        <div class="h-1/5 w-full text-clip p-4">
          <p class="text-4xl font-medium">
            229 San Vincente Street Cabucgayan, Biliran Philippines
          </p>
        </div>
      </div>
      <div class="w-1/3 h-full">
        <div class="w-full h-4/5 rounded overflow-hidden">
          <img
            src="/Dadap.jpg"
            class="h-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <h1 class="relative -mt-16 ml-12 text-3xl font-medium">
            DADAP HOTEL
          </h1>
        </div>
        <div class="h-1/5 w-full text-clip p-4">
          <p class="text-4xl font-medium">
            334 Real Street Silago Southern Leyte, Philippines
          </p>
        </div>
      </div>
      <div class="w-1/3 h-full">
        <div class="w-full h-4/5 rounded overflow-hidden">
          <img
            src="/Legaspi.jpg"
            class="h-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <h1 class="relative -mt-16 ml-12 text-3xl font-medium">
            LEGASPI HOTEL
          </h1>
        </div>
        <div class="h-1/5 w-full text-clip p-4">
          <p class="text-4xl font-medium">
            123 Rizal Street Hilongos Leyte, Philippines
          </p>
        </div>
      </div>
    </div>
    <div class="w-full h-1/5 flex items-center justify-center">
      <router-link
        to="/menu/booknow2"
        class="bg-[#BF9634] px-10 py-2 rounded-full text-xl font-bold hover:bg-yellow-700"
        >BOOK NOW</router-link
      >
    </div>
  </div>
</template>
