<template>
  <div class="relative pt-78 max-w-1600 m-auto">
    <div
      class="banner flex flex-column gap-16 pt-120 -md-pt-80 -sm-pt-60 pb-320 -md-pb-294 -sm-pb-388 w-full"
    >
      <h1
        class="m-0 text-white text-center font-lato font-h1 -sm-font-h3 font-semibold"
      >
        Your Path to Government Benefits
      </h1>
      <h1
        class="m-0 text-white text-center font-lato font-h2 font-nomal -sm-font-h5"
      >
        Find Answers
      </h1>
    </div>
    <div class="relative h-580 -sm-h-420">
      <div class="absolute left-triangle"></div>
      <div class="absolute right-triangle"></div>
    </div>
    <div
      class="absolute rounded-32 flex flex-column gap-42 px-30 py-40 bg-white left-1-2 -translate-x-1-2 top-384 top-310 w-1130 -md-w-690 -sm-w-345 shadow-primary"
    >
      <div class="flex justify-content-between -md-flex-column">
        <h1 class="m-0 font-h3 font-nomal font-rato text-primary text-center">
          Browse Goverment <span class="text-red">Benefits</span>
        </h1>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round"></span>
        </label>
      </div>
      <div
        class="grid grid-template-columns-5 -sm-grid-template-columns-8 gap-30 -md-overflow-x-scroll scroll -md-pb-40"
      >
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="TreeIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="SunIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="FlashIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="PeopleIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="TeacherIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="ProfileAddIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="DollarIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="SecurityIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="ProfileUserIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="CakeIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="FastIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="BankIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="BusIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="BuildingsIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
        <div
          class="w-190 h-210 flex flex-column gap-24 align-items-center justify-content-center rounded-24 border"
        >
          <img :src="LovelyIcon" alt="" />
          <h1
            class="m-0 text-primary text-center font-rato font-card font-medium"
          >
            Agriculture and Environmental Sustainability
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeIcon from "@/assets/images/Tree.svg";
import SunIcon from "@/assets/images/Sun.svg";
import FlashIcon from "@/assets/images/Flash.svg";
import PeopleIcon from "@/assets/images/People.svg";
import TeacherIcon from "@/assets/images/Teacher.svg";
import ProfileAddIcon from "@/assets/images/ProfileAdd.svg";
import DollarIcon from "@/assets/images/Dollar.svg";
import SecurityIcon from "@/assets/images/Security.svg";
import ProfileUserIcon from "@/assets/images/ProfileUser.svg";
import CakeIcon from "@/assets/images/Cake.svg";
import FastIcon from "@/assets/images/Fast.svg";
import BankIcon from "@/assets/images/Bank.svg";
import BusIcon from "@/assets/images/Bus.svg";
import BuildingsIcon from "@/assets/images/Buildings.svg";
import LovelyIcon from "@/assets/images/Lovely.svg";

import { ref } from "vue";

const model = ref("one");
</script>

<style scoped>
.banner {
  background-image: linear-gradient(#0000004d, #0000004d),
    linear-gradient(#0369a173, #0369a173), url("../../assets/images/Banner.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.right-triangle {
  width: 0;
  left: 0;
  border-top: 580px solid #0369a173;
  border-right: 100vw solid transparent;
}
.left-triangle {
  width: 0;
  left: 0;
  border-top: 580px solid #0369a173;
  border-left: 100vw solid transparent;
}
.scroll::-webkit-scrollbar {
  width: 8px;
}
.scroll::-webkit-scrollbar-track {
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #e2e8f0;
}
.scroll::-webkit-scrollbar-thumb {
  background-color: #0369a1;
  border-radius: 8px;
  outline: 1px solid #e2e8f0;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media (max-width: 375px) {
  .right-triangle {
    border-top: 420px solid #0369a173;
  }
  .left-triangle {
    border-top: 420px solid #0369a173;
  }
}
</style>
