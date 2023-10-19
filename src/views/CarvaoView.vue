<script setup>
import { dataCarvoes } from '../composables'
const localImg = '../assets/images/essencias/'
import ProdutosView from '../components/ProdutosView.vue'
</script>

<template>
  <main class="p-6 min-h-screen">
    <h1 class="text-[2.5rem] font-bold">Carvões</h1>
    <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3">
      <ul class=""
      v-for="item of dataCarvoes"
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
