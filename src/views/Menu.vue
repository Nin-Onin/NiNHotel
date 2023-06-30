<template>
  <div class="h-screen w-full fixed flex">
    <aside class="w-1/5 h-full bg-[#190C02]">
      <div class="w-full h-fit px-5 py-1">
        <img src="/logo.png" class="h-32 w-24" />
      </div>
      <ul class="h-full w-full px-7 flex flex-col space-y-16 mt-10">
        <li class="h-16 w-full">
          <router-link
            to="/menu/dashboard"
            class="h-full w-full flex items-center"
          >
            <img src="/dashboard.png" class="h-8 w-8 ml-1" />
            <span class="text-white text-3xl font-medium ml-10">Dashboard</span>
          </router-link>
        </li>
        <li class="h-16 w-full">
          <router-link
            to="/menu/profile"
            class="h-full w-full flex items-center"
          >
            <img src="/profile.png" class="h-8 w-8 ml-1" />
            <span class="text-white text-3xl font-medium ml-10">Profile</span>
          </router-link>
        </li>
        <li class="h-16 w-full">
          <router-link
            to="/menu/booknow1"
            class="h-full w-full flex items-center"
          >
            <img src="/book.png" class="h-8 w-8 ml-1" />
            <span class="text-white text-3xl font-medium ml-10">Book Now</span>
          </router-link>
        </li>
        <li class="h-16 w-full">
          <router-link
            to="/menu/reservation"
            class="h-full w-full flex items-center"
          >
            <img src="/reserve.png" class="h-8 w-8 ml-1" />
            <span class="text-white text-3xl font-medium ml-10"
              >Reservation</span
            >
          </router-link>
        </li>
        <li class="h-16 w-full">
          <router-link
            to="/menu/payment"
            class="h-full w-full flex items-center"
          >
            <img src="/payment.png" class="h-8 w-8 ml-1" />
            <span class="text-white text-3xl font-medium ml-10">Payment</span>
          </router-link>
        </li>
        <li class="h-16 w-full">
          <router-link to="/home" class="h-full w-full flex items-center">
            <img src="/logout.png" class="h-8 w-8 ml-1" />
            <span class="text-white text-3xl font-medium ml-10">Log out</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <main class="h-full w-full overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script></script>
