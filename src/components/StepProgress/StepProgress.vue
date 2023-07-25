<template>
    <div class="progress-bar h-8px">
        <div class="h-8px">

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, default: '' }
})
</script>

<style scoped lang="scss">
.progress-bar {
    width: 1230px;
    gap: 10px;
    background: #E2E8F0;
    border-radius: 100px;
}
</style>
  