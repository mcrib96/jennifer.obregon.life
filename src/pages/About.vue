<template>
    <div class="about ma-8 pa-10">
        <h2 class="mb-4 text-center">A little about me</h2>
        <div class="mx-16">
            <h4 class="mb-2">Background</h4>
            <p>
                I am the insurance hero you have been looking for.  I cut my teeth on personal lines insurance, but
                my passion is in commercial lines insurance.  I am a Fannie Mae/Freddie Mac loan compliance specialist 
                who finds coverage for multi-family dwellings and investor portfolios of single-family dwellings. I 
                work hard to protect client investments with optimal coverage and competitive rates.
            </p>
            <hr class="my-2">
        </div>
        <Carousel />
    </div>
</template>
<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>
<style scoped>
.about {
    height: 80vh;
    width: 80vw;
    border: 1px solid #999999;
    border-radius: 20px;
}
</style>