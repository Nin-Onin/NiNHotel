<template>
  <div
    class="h-screen w-full bg-landing bg-no-repeat bg-center bg-cover overflow-y-auto flex"
  >
    <div class="h-full w-1/2 p-10">
      <form class="h-full w-4/5">
        <div class="h-1/6 w-full bg-[#190C02] flex items-center px-5">
          <img src="/logo.png" class="h-32 w-24" />
        </div>
        <div class="h-5/6 w-full bg-white py-5">
          <ul
            class="h-full w-full flex flex-col items-center justify-center space-y-10"
          >
            <li class="h-11 w-4/5">
              <label>First Name</label>
              <input type="text" class="w-full h-full border-2 border-black" />
            </li>
            <li class="h-11 w-4/5">
              <label>Last Name</label>
              <input type="text" class="w-full h-full border-2 border-black" />
            </li>
            <li class="h-11 w-4/5">
              <label>User Name</label>
              <input type="text" class="w-full h-full border-2 border-black" />
            </li>
            <li class="h-11 w-4/5">
              <label>Contact</label>
              <input type="text" class="w-full h-full border-2 border-black" />
            </li>
            <li class="h-11 w-4/5">
              <label>Email</label>
              <input type="text" class="w-full h-full border-2 border-black" />
            </li>
            <li class="h-11 w-4/5">
              <label>Create Password</label>
              <input
                type="password"
                class="w-full h-full border-2 border-black"
              />
            </li>
            <li class="h-11 w-4/5">
              <label>Password</label>
              <input
                type="password"
                class="w-full h-full border-2 border-black"
              />
            </li>
            <li
              class="text-lg text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
            >
              <!-- <input type="submit" value="Sign Up" class="w-full h-full" /> -->
              <router-link to="/signin" class="w-full h-full"
                >Sign Up</router-link
              >
            </li>
          </ul>
        </div>
      </form>
    </div>

    <div class="h-full w-1/2 p-5">
      <div class="h-1/2 w-full flex justify-end">
        <router-link
          to="/home"
          class="text-lg h-10 mt-10 text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
          >Back</router-link
        >
      </div>
      <div class="h-1/3 w-full flex items-end">
        <div class="text-white text-3xl space-y-2 ml-44">
          <p>"Hospitality is making you</p>
          <p class="ml-20">Guest feel at Home,</p>
          <p class="ml-40">Even if you wish they Were"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
