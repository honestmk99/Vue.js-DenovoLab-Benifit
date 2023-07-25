<template>
    <div class="search-bg h-165px mb-120px">
        <div class="grid grid-cols-3 text-center pt-81px">
            <div class="text-16px font-600 text-[#FFF] pt-16px underline">Back to main</div>
            <div class="text-35px font-400 text-[#FFF]">Your search result:</div>
            <div class="text-35px font-400 text-[#FFF]">17 Benefits</div>
        </div>
    </div>

    <div class="grid grid-cols-2 mb-24px border-b pb-24px">
        <div class="pr-30px">
            <div class="text-18px text-[#0369A1] pb-24px">2017 Wildfires and Hurricanes Indemnity Program (2017 WHIP)</div>
            <div>If you are in a declared disaster area and have experienced damage to your business, you may be eligible for financial assistance from the Small Business Administration (SBA). Businesses of any size and most private nonprofit organizations may apply</div>
        </div>
        <div class="flex justify-end">
            <div class="text-14px bg-[#E2E8F0] h-37px text-[#00223B] text-center p-12px mr-16px">Agriculture and Environmental Sustainability</div>
            <div class="text-14px bg-[#E2E8F0] h-37px text-[#00223B] text-center p-12px mr-16px">Insurance</div>
            <div class="text-14px bg-[#E2E8F0] h-37px text-[#00223B] text-center p-12px mr-16px">Disaster Relief</div>
        </div>
    </div>

    <div class="flex flex-center">
        <q-pagination
            v-model="current"
            max="5"
            direction-links
            gutter="20px"
        />
    </div>

    <RightBanner />
</template>

<script setup lang="ts">
import RightBanner from '@/components/RightBanner/RightBanner.vue'
</script>

<style scoped lang="scss">
.search-bg {
    background: url('../assets/images/Search_bg.svg');
}
</style>
  