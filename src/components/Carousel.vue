<template>
    <v-carousel show-arrows="hover">
        <v-carousel-item>
            <Mission />
        </v-carousel-item>
        <v-carousel-item>
            <Married />
        </v-carousel-item>
        <v-carousel-item>
            <Children />
        </v-carousel-item>
        <v-carousel-item>
            <Church />
        </v-carousel-item>
        <v-carousel-item>
            <Cancer />
        </v-carousel-item>
    </v-carousel>
</template>
<script setup lang="ts">
import Mission from '@/components/Mission.vue'
import Married from '@/components/Married.vue'
import Cancer from '@/components/Cancer.vue'
import Church from '@/components/Church.vue'
import Children from '@/components/Children.vue'
</script>