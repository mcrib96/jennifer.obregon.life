<template>
<v-app>
  <v-app-bar>
    <v-app-bar-title>Jennifer A. Obregon</v-app-bar-title>
    <v-btn @click="scrollTo('home')">Home</v-btn>
    <v-btn @click="scrollTo('about')">About</v-btn>
    <v-btn @click="scrollTo('connect')">Connect</v-btn>
    <v-btn href="http://jennifer.obregon.life/insurance/" target="_new">Insurance Tools</v-btn>
  </v-app-bar>
  <v-main class="mt-5 ml-15">
      <Home id="home"/>
      <About id="about" />
      <Connect id="connect" />
  </v-main>
</v-app>
</template>
<script lang='ts' setup>
import {ref} from 'vue'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import Connect from '@/pages/Connect.vue'

const scrollTo = (which:string) => {
  const home:any = document.querySelector('#home')
  const about:any = document.querySelector('#about')
  switch(which) {
    case 'home':
      window.scrollTo({top:0})
      break;
    case 'about':
      window.scrollTo({top: home.offsetHeight+85})
      break;
    case 'connect':
      window.scrollTo({top: home.offsetHeight+about.offsetHeight + 80})
    document.querySelector(`#${which}`)?.scrollIntoView(true)
  }
}
</script>
<style scoped>
</style>
