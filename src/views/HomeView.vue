<script setup>
import { dataEssencia, dataAluminio, dataCarvoes } from '../composables'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, computed } from 'vue'
import { useSearchStore } from '../stores/search'
const store = useSearchStore()
const dataItems = ref()
const reloadData = ref()
const searchCatalag = computed(() => {
  if (dataItems.value && store.search) {
    dataItems.value = dataItems.value.filter((item) => {
      return item.title.toLowerCase().includes(store.search.toLowerCase())
    })
  } else {
    dataItems.value = reloadData.value
  }
  return dataItems.value
})

onMounted(() => {
  dataItems.value = dataEssencia.concat(dataAluminio).concat(dataCarvoes)
  reloadData.value = dataItems.value
})
</script>

<template>
  <main class="p-6 min-h-screen">
    <div class="absolute top-28">
      <div class="relative mx-auto">
        <input
          type="search"
          v-model="store.search"
          placeholder="Procurar..."
          class="p-2 bg-slate-100 md:w-full rounded-md"
        />
        <MagnifyingGlassIcon class="text-black h-8 absolute top-1 right-2" />
      </div>
    </div>
    <h1 class="text-[2.5rem] font-bold">Catálogo</h1>
    <div class="">
      <ul class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3">
        <li
          class="justify-center items-center flex flex-col p-4 rounded-md border-2 m-2 scale-95 hover:scale-100 transition duration-300 cursor-pointer shadow-sm hover:shadow-xl"
          v-for="item of searchCatalag"
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
