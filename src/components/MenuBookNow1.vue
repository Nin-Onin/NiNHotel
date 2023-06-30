<template>
  <header class="h-1/5 w-full flex items-center justify-center bg-[#190C02]">
    <div class="text-6xl font-semibold text-white">BOOK NOW</div>
  </header>
  <div class="h-1/3 w-full">
    <div
      class="h-1/2 w-full flex items-center justify-center text-8xl font-semibold text-[#190C02]"
    >
      MAKE RESERVATION
    </div>
    <div
      class="h-1/2 w-full flex items-center justify-center text-6xl font-semibold text-[#BF9634]"
    >
      RIGHT NOW!
    </div>
  </div>

  <div class="h-2/3 w-full p-6">
    <div class="h-full w-full bg-[#190C02] rounded-[28px]">
      <div class="h-1/3 w-full flex items-center justify-center">
        <img src="/g.png" />
      </div>

      <div class="h-1/3 w-full space-y-2">
        <div class="h-1/2 w-full flex flex-row">
          <div
            class="h-full w-1/3 text-5xl font-semibold text-[#BF9634] flex items-center pl-24"
          >
            CHECK IN:
          </div>
          <div
            class="h-full w-2/3 flex items-center justify-center bg-white pl-12 mr-36 border-[#190C02] border-8"
          >
            <div
              class="h-full w-3/4 text-[#190C02] flex items-center font-semibold text-5xl"
            >
              DATE/MONTH/YEAR
            </div>

            <div class="h-full w-1/4 flex items-center justify-center">
              <img src="/calendar.png" class="h-20 w-20" />
            </div>
          </div>
        </div>

        <div class="h-1/2 w-full flex flex-row">
          <div
            class="h-full w-1/3 text-5xl font-semibold text-[#BF9634] flex items-center pl-24"
          >
            CHECK OUT:
          </div>
          <div
            class="h-full w-2/3 flex items-center justify-center bg-white pl-12 mr-36 border-[#190C02] border-8"
          >
            <div
              class="h-full w-3/4 text-[#190C02] flex items-center font-semibold text-5xl"
            >
              DATE/MONTH/YEAR
            </div>

            <div class="h-full w-1/4 flex items-center justify-center">
              <img src="/calendar.png" class="h-20 w-20" />
            </div>
          </div>
        </div>
      </div>

      <div class="h-1/3 w-full flex items-start justify-center mt-14">
        <div
          class="text-5xl font-semibold bg-[#BF9634] ml-40 flex justify-center hover:bg-yellow-700"
        >
          <router-link to="/hotels"> CHECK AVAILABILITY </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- border-red-900 border-2 -->
