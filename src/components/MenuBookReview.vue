<template>
  <header class="h-1/5 w-full flex items-center justify-center bg-[#190C02]">
    <div class="text-6xl font-semibold text-white">BOOK NOW</div>
  </header>

  <div class="h-1/5 w-full flex flex-row p-6">
    <div
      class="h-full w-full flex items-center justify-center text-6xl bg-white font-bold text-[#190C02]"
    >
      REVIEW INFORMATION
    </div>
  </div>

  <!-- 2 og 3 slice ni -->
  <div class="h-4/5 w-full">
    <div class="h-1/5 w-full flex flex-row bg-[#190C02]">
      <div class="h-full w-1/2 flex items-center justify-center">
        <div class="h-full w-full flex items-center justify-center">
          <img src="/name.png" class="h-16 w-16 mr-24" />
          <span class="text-[#BF9634] text-5xl font-bold">Niño M. Austria</span>
        </div>
      </div>
      <div class="h-full w-1/2 flex items-center justify-center">
        <div class="h-full w-full flex items-center justify-center">
          <img src="/phone.png" class="h-16 w-16 mr-24" />
          <span class="text-[#BF9634] text-5xl font-bold">+639383640190</span>
        </div>
      </div>
    </div>
    <div class="h-1/5 w-full flex flex-row bg-[#190C02]">
      <div class="h-full w-1/2 flex items-center justify-center">
        <div class="h-full w-full flex items-center justify-center">
          <img src="/address.png" class="h-16 w-16 mr-24" />
          <span class="text-[#BF9634] text-5xl font-bold">Cbucgya,Biliran</span>
        </div>
      </div>
      <div class="h-full w-1/2 flex items-center justify-center">
        <div class="h-full w-full flex items-center justify-center">
          <img src="/email1.png" class="h-16 w-16 mr-24" />
          <span class="text-[#BF9634] text-5xl font-bold">aus@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="h-1/5 w-full flex flex-row bg-[#190C02]">
      <div class="h-full w-1/2 flex flex-row">
        <div
          class="h-full w-1/4 flex items-center justify-center text-3xl font-bold text-[#BF9634]"
        >
          HOTEL:
        </div>
        <div class="h-full w-3/4 flex items-center justify-center">
          <input type="text" class="h-16 w-3/4 border-black border-4" />
        </div>
      </div>
      <div class="h-full w-1/2 flex flex-row">
        <div
          class="h-full w-1/4 flex items-center justify-center text-3xl font-bold text-[#BF9634]"
        >
          NO.PERSONS:
        </div>
        <div class="h-full w-3/4 flex items-center justify-center pr-2">
          <input type="text" class="h-16 w-3/4 border-black border-4" />
        </div>
      </div>
    </div>
    <div class="h-1/5 w-full flex flex-row bg-[#190C02]">
      <div class="h-full w-1/2 flex flex-row">
        <div
          class="h-full w-1/4 flex items-center justify-center text-3xl font-bold text-[#BF9634]"
        >
          ROOM TYPE:
        </div>
        <div class="h-full w-3/4 flex items-center justify-center">
          <input type="text" class="h-16 w-3/4 border-black border-4" />
        </div>
      </div>
      <div class="h-full w-1/2 flex flex-row">
        <div
          class="h-full w-1/4 flex items-center justify-center text-3xl font-bold text-[#BF9634]"
        >
          SERVICES:
        </div>
        <div class="h-full w-3/4 flex items-center justify-center pr-2">
          <input type="text" class="h-16 w-3/4 border-black border-4" />
        </div>
      </div>
    </div>
    <div class="h-1/5 w-full flex flex-row bg-[#190C02]">
      <div class="h-full w-1/2 flex flex-row">
        <div
          class="h-full w-1/4 flex items-center justify-center text-3xl font-bold text-[#BF9634]"
        >
          CHECK IN:
        </div>
        <div class="h-full w-3/4 flex items-center justify-center">
          <input type="text" class="h-16 w-3/4 border-black border-4" />
        </div>
      </div>
      <div class="h-full w-1/2 flex flex-row">
        <div
          class="h-full w-1/4 flex items-center justify-center text-3xl font-bold text-[#BF9634]"
        >
          CHECK OUT:
        </div>
        <div class="h-full w-3/4 flex items-center justify-center">
          <input type="text" class="h-16 w-3/4 border-black border-4" />
        </div>
      </div>
    </div>
  </div>

  <!-- last part ni -->
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
          <router-link to="/menu/menubookservices"> Back </router-link>
        </div>
      </div>
      <div
        class="h-full w-1/3 flex justify-end items-center text-4xl font-semibol"
      ></div>
      <div
        class="h-full w-2/4 flex justify-end items-center text-4xl font-semibold"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
        >
          <router-link to="/bookingsuccess"> Book Now </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- border-red-900 border-2 -->
