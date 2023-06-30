<template>
  <header class="h-1/5 w-full flex items-center justify-center bg-[#190C02]">
    <div class="text-6xl font-semibold text-white">BOOK NOW</div>
  </header>

  <div class="h-1/6 w-full flex flex-row p-6">
    <div
      class="h-full w-1/2 flex items-center justify-end text-6xl font-bold text-[#190C02]"
    >
      AVAILABLE HOTELS
    </div>
    <div class="h-full w-1/2 flex items-center justify-center">
      <img src="/roomlogo.png" class="h-32 w-32" />
    </div>
  </div>

  <!-- 2 og 3 slice ni -->
  <div class="h-4/6 w-full overflow-y-auto flex flex-row bg-[#190C02]">
    <div class="h-full w-4/6">
      <img src="/deluxe.jpg" class="h-full w-full p-8" />
    </div>
    <div class="h-full w-3/6">
      <div
        class="h-2/5 w-full flex items-center justify-center text-4xl font-medium text-[#BF9634]"
      >
        DELUXE ROOM
      </div>

      <div class="h-2/5 w-full flex flex-row">
        <div
          class="h-full w-1/2 flex items-start justify-end text-2xl font-medium text-white"
        >
          Good for 2 - 3 persons
        </div>
        <div class="h-full w-1/2 flex items-center justify-start">
          <ul>
            <li class="text-2xl flex font-medium text-white">
              - 2 double beds
            </li>
            <li class="text-2xl font-medium text-white">
              - 2 toilets and baths
            </li>
            <li class="text-2xl font-medium text-white">- 2 cabinets</li>
            <li class="text-2xl font-medium text-white">- 1 Balcony</li>
          </ul>
        </div>
        <!-- <ul>
                <li
                  class="text-2xl font-medium text-white flex items-start justify-start space-x-4"
                >
                  Good for 1 person only
                </li>
                <li class="text-2xl font-medium text-white flex justify-center">
                  - 1 single bed
                </li>
                <li class="text-2xl font-medium text-white flex justify-center">
                  - 1 toilete and bath
                </li>
                <li class="text-2xl font-medium text-white flex justify-center">
                  - 1 cabinet
                </li>
              </ul> -->
      </div>

      <div class="h-1/5 w-full flex items-center justify-center">
        <div class="text-2xl text-[#190C02] font-bold bg-white py-2 px-10">
          PHP 2000 PER NIGHT
        </div>
      </div>
    </div>
  </div>

  <!-- last part ni -->
  <div class="h-1/6 w-full flex items-center justify-center bg-[#190C02]">
    <div
      class="h-1/2 w-full flex flex-row items-center justify-center pr-6 pl-6"
    >
      <div
        class="h-full w-1/3 flex justify-start items-center text-4xl font-semibol"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
        >
          <router-link to="/menu/booknow4"> Back </router-link>
        </div>
      </div>
      <div
        class="h-full w-1/3 flex justify-end items-center text-4xl font-semibol"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
        >
          <router-link to="/menu/booknow6"> Next </router-link>
        </div>
      </div>
      <div
        class="h-full w-2/4 flex justify-end items-center text-4xl font-semibold"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
        >
          <router-link to="/menu/menubookservices"> Book Now </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- border-red-900 border-2 -->
