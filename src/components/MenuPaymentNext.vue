<template>
  <header class="h-1/5 w-full flex items-center justify-center bg-[#190C02]">
    <div class="text-6xl font-semibold text-white">PAYMENT</div>
  </header>

  <div class="h-1/6 w-full flex flex-row">
    <div class="h-full w-1/3 flex items-center justify-center">
      <img src="/visa.jpg" class="h-36 w-36" />
    </div>
    <div class="h-full w-1/3 flex items-center justify-center">
      <img src="/paymaya.png" class="h-52 w-52" />
    </div>
    <div class="h-full w-1/3 flex items-center justify-center">
      <img src="/ae.png" class="h-32 w-32" />
    </div>
  </div>

  <!-- 2nd -->
  <div class="h-1/6 w-full flex flex-row border-2">
    <div
      class="h-full w-1/4 flex items-center justify-center font-bold text-4xl text-[#190C02]"
    >
      NAME ON CARD
    </div>
    <div class="h-full w-3/4 flex items-center justify-center">
      <input type="text" class="w-2/3 h-1/2 border-2 border-black" />
    </div>
  </div>
  <!-- 3rd -->
  <div class="h-1/6 w-full">
    <div class="h-1/2 w-full flex flex-row">
      <div
        class="h-full w-1/3 flex items-center justify-center font-bold text-4xl text-[#190C02]"
      >
        CARD NUMBER
      </div>
      <div
        class="h-full w-1/3 flex items-center justify-center font-bold text-4xl text-[#190C02]"
      >
        EXPIRATION DATE(MM/YY)
      </div>
      <div
        class="h-full w-1/3 flex items-center justify-center font-bold text-4xl text-[#190C02]"
      >
        SECURITY CODE (CVV)
      </div>
    </div>

    <div class="h-1/2 w-full flex flex-row">
      <div class="h-full w-1/3 flex items-center justify-center">
        <div class="h-full w-5/6 flex items-center justify-center">
          <input type="text" class="w-4/5 h-16 border-2 border-black" />
        </div>
      </div>
      <div class="h-full w-1/3 flex items-center justify-center">
        <div class="h-full w-5/6 flex items-center justify-center">
          <input type="text" class="w-4/5 h-16 border-2 border-black" />
        </div>
      </div>
      <div class="h-full w-1/3 flex items-center justify-center">
        <div class="h-full w-5/6 flex items-center justify-center">
          <input type="text" class="w-4/5 h-16 border-2 border-black" />
        </div>
      </div>
    </div>
  </div>
  <!-- 4rd -->
  <div class="h-1/6 w-full flex flex-row border-2">
    <div
      class="h-full w-1/4 flex items-center justify-center font-bold text-4xl text-[#190C02]"
    >
      EMAIL ADDRESS
    </div>
    <div class="h-full w-3/4 flex items-center justify-center">
      <input type="text " class="w-2/3 h-1/2 border-2 border-black" />
    </div>
  </div>
  <div class="h-1/6 w-full flex flex-row border-2">
    <div
      class="h-full w-1/4 flex items-center justify-center font-bold text-4xl text-[#190C02]"
    >
      AMOUNT TO PAY
    </div>
    <div class="h-full w-3/4 flex items-center justify-center">
      <input type="text " class="w-2/3 h-1/2 border-2 border-black" />
    </div>
  </div>
  <div class="h-1/6 w-full flex">
    <p
      class="flex items-center justify-start font-semibold text-3xl text-[#190C02] pl-10"
    >
      By checking the checkbox below, you agree to our Terms of Use, Privacy
      Statement
    </p>
  </div>
  <div class="h-1/6 w-full flex">
    <div class="h-full w-1/2 flex items-start justify-start">
      <div class="flex items-center pl-10 text-3xl font-bold text-[#190C02]">
        <input type="checkbox" class="form-checkbox w-10 h-10" id="checkbox" />
        <label for="checkbox" class="ml-2">I Agree</label>
      </div>
    </div>
    <div
      class="h-1/6 w-full flex justify-end items-start text-4xl font-semibold"
    >
      <div
        class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10 mr-12 hover:bg-yellow-700"
      >
        <router-link to="/paymentsuccess"> Payment Now </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- border-black border-2 -->
<!-- <div
        class="h-1/2 w-1/2 flex items-center justify-start pr-10 pl-10 border-red-900 border-2"
      >
        <div
          class="text-2xl text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
        >
          Cancel Reservation
        </div>
      </div> -->
