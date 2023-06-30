<template>
  <div class="h-screen w-full fixed flex bg-[#190C02]">
    <div class="w-full h-4/5 px-5 py-5">
      <img src="/logo.png" class="h-32 w-24" />
      <div
        class="h-1/5 w-full bg-white flex items-center justify-center font-bold text-[#190C02] text-8xl"
      >
        BOOKING SUCCESS!!!
      </div>
      <div class="h-full w-full bg-white">
        <div
          class="h-1/3 w-full flex items-center justify-center font-semibold text-[#190C02] text-5xl"
        >
          Thank you for booking with us.
        </div>
        <div
          class="h-1/3 w-full flex items-start justify-center font-semibold text-[#190C02] text-5xl"
        >
          You can now proceed to Reservation to check your Reservation
          Information.
        </div>
        <div class="h-1/3 w-full flex justify-center items-center">
          <div
            class="text-4xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 hover:bg-yellow-700"
          >
            <router-link to="/menu/reservation"> OK </router-link>
          </div>
        </div>

        <!-- <div
          class="h-1/3 w-full flex items-start justify-center font-semibold text-[#190C02] text-5xl"
        >
          You can now proceed to Reservation to check your Reservation
          Information.
        </div> -->
      </div>
    </div>
  </div>
</template>

<script></script>
