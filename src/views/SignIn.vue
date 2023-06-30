<template>
  <div
    class="fixed h-screen w-full bg-signin bg-no-repeat bg-center bg-cover overflow-y-auto flex"
  >
    <div class="w-1/2 h-full flex justify-center items-center">
      <form class="h-4/5 w-1/2 border-black border-2 rounded-xl">
        <div class="h-1/5 w-full bg-[#190C02] flex items-center px-5">
          <img src="/logo.png" class="h-32 w-24" />
        </div>
        <div
          class="h-3/5 w-full flex items-center justify-center flex-col space-y-10"
        >
          <h1 class="text-3xl font-medium">Sign In</h1>
          <input
            type="text"
            class="w-4/5 h-14 border-black border-2 rounded-full px-6 text-xl"
            placeholder="Username"
          />
          <input
            type="password"
            class="w-4/5 h-14 border-black border-2 rounded-full px-6 text-xl"
            placeholder="Password"
          />
          <p class="text-3xl font-medium">Forgot Password?</p>
        </div>
        <div class="h-1/5 w-full bg-[#190C02] flex items-center justify-center">
          <!-- <input type="submit" value="Sign In" class=" text-lg text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"> -->
          <router-link
            to="/menu/dashboard"
            class="text-lg text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
            >Sign In</router-link
          >
        </div>
      </form>
    </div>
    <div class="w-1/2 h-full flex justify-center items-center">
      <div
        class="h-1/2 w-3/5 flex justify-center items-center flex-col space-y-14"
      >
        <h1 class="font-semibold text-6xl">New Here?</h1>
        <p class="font-medium text-4xl text-center">
          Sign Up and Discovers Our Best Hotels in Town
        </p>
        <router-link
          to="/signup"
          class="text-lg text-[#190C02] font-bold bg-[#BF9634] rounded-full py-2 px-10"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>

<script></script>
