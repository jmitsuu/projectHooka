<script setup>
import { dataAluminio } from '../composables'
const localImg = '../assets/images/essencias/'
</script>

<template>
  <main class="p-6 min-h-screen">
    <h1 class="text-[2.5rem] font-bold">Alumínios</h1>
    <div class="">
      <ul class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3">
        <li
          class="justify-center items-center flex flex-col p-4 rounded-md border-2 m-2 scale-95 hover:scale-100 transition duration-300 cursor-pointer shadow-sm hover:shadow-xl"
          v-for="item of dataAluminio"
          :key="item.title"
        >
          <img :src="item.img" :alt="item.title" class="h-64" />

          <p class="font-semibold">{{ item.title }}</p>
          <p class="text-[1.6rem]">R$ {{ item.price.toFixed(2) }}</p>
          <a
            :href="`https://api.whatsapp.com/send?phone=554891699518&text=Ola%20tenho%20interesse%20em%20comprar%20o%20item: ${item.title}`"
            class="text-[1.2rem] bg-yellow-500 font-semibold p-3 rounded-xl mt-3 hover:bg-yellow-800 transition-all"
            >Solicitar</a
          >
        </li>
      </ul>
    </div>
  </main>
</template>
