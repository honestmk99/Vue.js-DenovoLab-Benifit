<template>
  <div
    class="m-auto px-155 -md-px-39 -sm-px-15 mt-120 -md-mt-80 -sm-mt-60 grid gap-98 grid-order pb-120 -sm-pb-60"
  >
    <div
      class="image flex flex-column gap-32 rounded-32 -sm-rounded-16 px-355 -md-px-55 -sm-px-0 py-24"
    >
      <div class="text-center flex flex-column gap-16 w-full">
        <h1
          class="m-0 text-white text-center font-lato font-h3 -sm-font-h4 font-nomal"
        >
          Benefit Finder
        </h1>
        <h1 class="m-0 text-white text-center font-lato font-h4 font-medium">
          Take this questionnaire to find benefits you may be eligible
        </h1>
      </div>
      <div class="flex flex-column gap-38">
        <div class="-sm-px-53">
          <div
            class="flex flex-column gap-20 -sm-gap-16 pb-48 -sm-pb-36 border-bottom"
          >
            <div class="flex -sm-flex-column gap-50">
              <div class="flex flex-column gap-12 align-items-center">
                <img :src="Timer" alt="" />
                <h1
                  class="m-0 font-h6 font-semibold font-lato text-outline text-center"
                >
                  10-30 minutes questionnaire depending on how many questions
                  you answer
                </h1>
              </div>
              <div class="border h-full w-4 -sm-hidden"></div>
              <div class="flex flex-column gap-12 align-items-center">
                <img :src="Chart" alt="" />
                <h1
                  class="m-0 font-h6 font-semibold font-lato text-outline text-center"
                >
                  The more questions you answer, the more accurate the results
                </h1>
              </div>
            </div>
            <div class="m-auto">
              <div
                class="bg-red rounded-12 px-18 py-12 text-white font-lato font-semibold font-h6"
              >
                Get Started
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-column gap-24 -sm-px-8">
          <div class="flex flex-column gap-16">
            <h1
              class="m-0 text-center text-outline font-h4 font-lato font-medium"
            >
              Give a way to contact you when a new federal benefit is available
            </h1>
            <div class="flex -sm-flex-column gap-30 w-full">
              <label
                for=""
                class="font-body font-lato font-nomal text-outline flex flex-column gap-8 w-full"
                >Your Email
                <input
                  type="text"
                  class="px-12 py-8 text-input rounded-8 border-none border"
                  placeholder="Enter phone email"
                />
              </label>
              <label
                for=""
                class="font-body font-lato font-nomal text-outline flex flex-column gap-8 w-full"
                >Your Phone
                <input
                  type="text"
                  class="px-12 py-8 text-input rounded-8 border-none border"
                  placeholder="Enter phone number"
                />
              </label>
            </div>
          </div>
          <div class="flex flex-column gap-18 align-items-center">
            <div class="flex gap-12">
              <input type="checkbox" name="" id="" />
              <h1 class="m-0 font-body font-lato font-nomal text-outline">
                By clicking on this button, govbenefit.gov can contact me
                regarding uncoming federal benefits
              </h1>
            </div>
            <div class="m-auto">
              <div
                class="bg-transparent border px-18 py-12 font-h6 font-semibold font-lato text-white rounded-12"
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from "@/assets/images/Timer.svg";
import Chart from "@/assets/images/Chart.svg";
</script>

<style scoped>
.image {
  background-image: linear-gradient(#0000004d, #0000004d),
    linear-gradient(#0369a173, #0369a173),
    url("../../assets/images/BenefitFinder_bg.jpg");
  background-position: center;
  background-size: cover;
}
img {
  width: 70px;
}
</style>