<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import {ref} from "vue"
const modal = ref(false)
</script>

<template>
  <section class="flex p-2 ">
    <!-- <div class=" relative min-h-screen w-24 bg-slate-800 hidden md:block "></div> -->

    <div class="mt-2 w-full  0  relative  bg-gradient-to-b via-90%">
      <header class="   relative  bg-black h-24 flex justify-center rounded-md">

        <nav class="  flex items-center gap-11 ">
          <img src="../src/assets/logo.jpeg" class="h-20 w-20 cursor-pointer absolute left-2 rounded-md" />
          <div class="md:flex gap-11 hidden text-white">
            <RouterLink to="/">Essências</RouterLink>
            <RouterLink to="/aluminio">Aluminio</RouterLink>
            <RouterLink to="/carvao">Carvão</RouterLink>
          </div>

          <div class="p-3 absolute right-0  rounded-md flex justify-center items-center">
            <h1 class="text-gray-200 font-bold text-[1.8rem] hidden md:block">Hookah MK</h1>
            <Bars3Icon @click="modal = !modal " class="h-10 md:hidden cursor-pointer text-white font-bold" />

          </div>

        </nav>
        <Transition>

    
        <div v-if="modal" class=" flex flex-col h-screen w-44 z-50 right-0 bg-black opacity-80   gap-8 border-b-2  text-white text-[1.8rem] p-3 absolute">
          <XMarkIcon @click="modal = false" class="h-10  cursor-pointer text-white font-bold" />
        <RouterLink @click="modal=false" to="/">Essências</RouterLink>
        <RouterLink @click="modal=false" to="/aluminio">Aluminio</RouterLink>
        <RouterLink @click="modal=false" to="/carvao">Carvão</RouterLink>
      </div>
    </Transition>
      </header>
  

      <div class="mt-20  border-2 ">
        <RouterView />
      </div>

    </div>


  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>
