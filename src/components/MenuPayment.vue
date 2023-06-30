<template>
  <header class="h-1/5 w-full flex items-center justify-center bg-[#190C02]">
    <div class="text-6xl font-semibold text-white">PAYMENT</div>
  </header>

  <div class="h-5/6 w-42 flex flex-row border-black border-4 m-6">
    <div class="h-full w-1/3">
      <div
        class="h-1/6 w-full flex items-center justify-center text-3xl font-bold"
      >
        NAME:
      </div>
      <div
        class="h-1/6 w-full flex items-center justify-center text-3xl font-bold"
      >
        HOTEL:
      </div>
      <div
        class="h-1/6 w-full flex items-center justify-center text-3xl font-bold"
      >
        ROOM TYPE:
      </div>
      <div
        class="h-1/6 w-full flex items-center justify-center text-3xl font-bold"
      >
        SERVICES:
      </div>
      <div
        class="h-1/6 w-full flex items-center justify-center text-3xl font-bold"
      >
        CHECK IN:
      </div>
      <div
        class="h-1/6 w-full flex items-center justify-center -2 text-3xl font-bold"
      >
        CHECK OUT:
      </div>
    </div>

    <!-- ikaduha na bahi katunga -->
    <div class="h-full w-2/3">
      <div class="h-1/6 w-full p-6">
        <input type="text" class="w-5/6 h-full border-2 border-black" />
      </div>
      <div class="h-1/6 w-full p-6">
        <input type="text" class="w-5/6 h-full border-2 border-black" />
      </div>
      <div class="h-1/6 w-full p-6">
        <input type="text" class="w-5/6 h-full border-2 border-black" />
      </div>
      <div class="h-1/6 w-full p-6">
        <input type="text" class="w-5/6 h-full border-2 border-black" />
      </div>
      <div class="h-1/6 w-full p-6">
        <input type="text" class="w-5/6 h-full border-2 border-black" />
      </div>
      <div class="h-1/6 w-full p-6">
        <input type="text" class="w-5/6 h-full border-2 border-black" />
      </div>
    </div>
  </div>

  <!-- pinakauna na bahin -->
  <div class="h-1/6 w-42 m-6">
    <div
      class="h-1/2 w-full bg-[#190C02] flex flex-row items-center justify-center"
    >
      <div
        class="h-full w-1/3 flex justify-center items-center text-4xl font-semibold text-white"
      >
        TOTAL:
      </div>
      <div
        class="h-full w-2/3 flex justify-center items-center text-4xl font-semibold text-white"
      >
        PHP 5000
      </div>
    </div>

    <div
      class="h-1/2 w-full flex flex-row items-center justify-center pr-6 pl-6"
    >
      <div
        class="h-full w-1/3 flex justify-start items-center text-4xl font-semibol"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
        >
          <router-link to="/menu/reservation"> Cancel Reservation </router-link>
        </div>
      </div>
      <div
        class="h-full w-2/3 flex justify-end items-center text-4xl font-semibold"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
        >
          <router-link to="/menu/menupaymentnext"> Payment Now </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- border-red-900 border-2 -->
<!-- <div
      class="h-1/2 w-1/2 flex items-center justify-start pr-10 pl-10 border-red-900 border-2"
    >
      <div
        class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
      >
        Cancel Reservation
      </div>
    </div> -->
