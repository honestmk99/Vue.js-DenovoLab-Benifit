<template>
  <footer
    class="bg-primary max-w-1600 m-auto px-155 -md-px-39 -sm-px-15 pt-48 -sm-pt-24 pb-32 grid gap-98 grid-order"
  >
    <div class="flex -md-flex-column gap-100 -md-gap-32">
      <div class="flex flex-column -md-flex-row gap-16 max-w-320 -md-max-w-342">
        <router-link to="/">
          <img :src="Logo" alt="" />
        </router-link>
        <h1 class="m-0 font-footer font-nomal font-lato text-white">
          Amet minim mollit non deserunt ullamco est sit. Est sit aliqua dolor
          do amet sint.
        </h1>
      </div>
      <div class="-md-px-16 -sm-px-0 w-full">
        <div class="flex -sm-flex-column gap-97 -sm-gap-16">
          <dif class="flex gap-97 w-full">
            <div class="flex flex-column gap-16 w-full">
              <h1 class="m-0 text-white font-lato font-h6 font-semibold">
                Benefits
              </h1>
              <div class="flex flex-column gap-8">
                <h1 class="m-0 text-footer font-lato font-body font-nomal">
                  By Agency
                </h1>
                <h1 class="m-0 text-footer font-lato font-body font-nomal">
                  By Category
                </h1>
              </div>
            </div>
            <div class="flex flex-column gap-16 w-full">
              <h1 class="m-0 text-white font-lato font-h6 font-semibold">
                Quick Links
              </h1>
              <div class="flex flex-column gap-8">
                <h1 class="m-0 text-footer font-lato font-body font-nomal">
                  ACP
                </h1>
                <router-link to="/BenefitFinderPage"><h1 class="m-0 text-footer font-lato font-body font-nomal">
                  Benefit Finder
                </h1></router-link>
              </div>
            </div>
          </dif>
          <div class="flex flex-column gap-16 min-w-270 -md-max-w-209">
            <h1 class="m-0 text-white font-lato font-h6 font-semibold">
              Contact
            </h1>
            <div class="flex flex-column gap-12">
              <div class="flex gap-8 align-items-center">
                <img :src="Mail" alt="" />
                <h1 class="m-0 font-h6 font-lato font-semibold text-white">
                  info@govbenefits.com
                </h1>
              </div>
              <div class="flex gap-8 align-items-center">
                <img :src="Phone" alt="" />
                <h1 class="m-0 font-h6 font-lato font-semibold text-white">
                  +1 (802) 222-0202
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div
    class="bg-primary max-w-1600 m-auto px-155 -md-px-39 -sm-px-30 py-24 border-top -md-text-center"
  >
    <h1
      class="m-0 font-lato font-copywrite text-footer font-normal -md-text-center"
    >
      Copyright © 2023 Peeringhub Mobi. All Rights Reserved.
    </h1>
  </div>
</template>

<script setup lang="ts">
import Logo from "../assets/images/HeaderLogo.svg";
import Mail from "../assets/images/Email.svg";
import Phone from "../assets/images/Phone.svg";
</script>