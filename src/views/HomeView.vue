<script setup>
import { dataEssencia } from '../composables';

</script>

<template>
  <main class=" p-6">
    <h1 class="text-[2.5rem] font-bold">Essências</h1>
    <div class="">
      <ul class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3  ">
        <li
          class="justify-center items-center flex flex-col p-4 rounded-md  border-2 m-2 scale-95 hover:scale-100 transition duration-300 cursor-pointer  shadow-sm hover:shadow-xl"
          v-for="item of dataEssencia" :key="item.title">
          <img :src="item.img" />
          <p class="font-semibold">{{ item.title }}</p>
          <p class="text-[1.6rem]">R$ 13,00</p>
          <a :href="`https://api.whatsapp.com/send?phone=5548998663238&text=Ola%20tenho%20interesse%20em%20comprar%20o%20item: ${item.title }`"
            class="text-[1.2rem] bg-yellow-500 font-semibold p-3 rounded-xl mt-3 hover:bg-yellow-800 transition-all">Solicitar</a>

        </li>

      </ul>

    </div>


  </main>
</template>
