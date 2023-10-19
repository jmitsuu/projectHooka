<script setup>
import { dataEssencia, dataAluminio, dataCarvoes } from '../composables'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, computed } from 'vue'
import { useSearchStore } from '../stores/search';
import { useCartStore } from "../stores/storeCart";
import ProdutosView from '../components/ProdutosView.vue'
const storeCart = useCartStore()
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
    <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3">
      <ul class=""
      v-for="item of searchCatalag"
          :key="item.title"
      >
       <ProdutosView 
       :title="item.title"
       :img="item.img"
       :price="item.price"
       :items="item"
      
       />
      </ul>
    </div>
  </main>
</template>
