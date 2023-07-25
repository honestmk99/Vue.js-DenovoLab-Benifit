<template>
    <q-modal v-model="opened">
        <q-modal-layout>
            <form class="column fit no-scroll no-wrap">
                <h3 class="mb-32">Email Your Results</h3>

                <div>
                    <label>Your Name</label>
                    <q-input outlined v-model="name" label="Enter your name" />
                </div>

                <div>
                    <label>Your Email</label>
                    <q-input outlined v-model="email" label="Enter email" />
                </div>

                <div>
                    <label>Personal Message</label>
                    <q-input outlined v-model="personalMessage" label="Enter here" />
                </div>
                <div class="grid">
                    <div class="mr-16">
                        <q-btn outline style="color: #727B8B; border-color: #727B8B;" label="Cancel" />
                    </div>
                    <div>
                        <q-btn outline style="color: #FFFFFF; background: #C1282D;" label="Send" />   
                    </div>
                </div>
            </form>
        </q-modal-layout>
    </q-modal>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>