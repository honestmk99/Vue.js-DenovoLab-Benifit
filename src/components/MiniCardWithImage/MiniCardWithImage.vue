<template>
    <q-card class="card">
        <q-img
            :src="urlImage"
            spinner-color="white"
            style />
        <q-card-section>
          {{ title }}
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, default: '' },
    urlImage: { type: String, default: '' }
})
</script>

<style scoped lang="scss">
.card {
    width: 190px;
    height: 210px;
    padding: 0px 14px;
    gap: 8px;
    border: 1px solid #D4D6DB;
    border-radius: 24px;
}
</style>
  