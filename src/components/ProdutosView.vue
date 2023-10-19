<script setup>
import { useCartStore } from "../stores/storeCart";
import { ShoppingCartIcon } from '@heroicons/vue/24/solid';
import { ref, onMounted } from "vue"
const store = useCartStore()
const qtd = 1
const qtdPush = ref()
defineProps({
  title: String,
  img: String,
  price: Number,
  items: Array,
  qtdInput: Array,

})
onMounted(() => {

})
</script>

<template>
  <li
    class="justify-center items-center flex flex-col p-4 rounded-md border-2 m-2 scale-95 hover:scale-100 transition duration-300 shadow-sm hover:shadow-xl">
    <img :src="img" :alt="title" class="h-64" />

    <p class="font-semibold">{{ title }}</p>
    <p class="text-[1.6rem]">R$ {{ price.toFixed(2) }}</p>
    <div class="flex gap-4  items-center mt-3 border-t-2">
      <!-- <a :href="`https://api.whatsapp.com/send?phone=554891699518&text=Ola%20tenho%20interesse%20em%20comprar%20os%20produto(s)%20abaixo:%0A%0A*%20${title}%20*%0A%0A`"
        class="text-[0.8rem] flex bg-yellow-500 font-semibold p-3 rounded-xl mt-3 hover:bg-yellow-800 transition-all">Adicionar
        ao carrinho
        <ShoppingCartIcon class="h-8 cursor-pointer  text-yellow-800" @click="store.incrementCart(items, qtd)" />
      </a> -->
      <a @click="store.incrementCart(items, qtd)"
        class="text-[1rem] cursor-pointer flex items-center bg-yellow-500 text-gray-800 px-3 py-2 rounded-md mt-3 hover:bg-yellow-800 transition-all">Adicionar
        <ShoppingCartIcon class="h-8 cursor-pointer  text-yellow-600" />
      </a>
      <!-- <ShoppingCartIcon class="h-12 cursor-pointer  text-yellow-800" @click="store.incrementCart(items, qtd)" /> -->
      <div class="flex border items-center rounded-md px-3 py-2">
        <label>Qtd</label>
        <input class="w-10 ml-2  bg-gray-300 text-center" type="number" id="quantity" name="quantity" min="1"
          v-model="qtd">
      </div>

    </div>
  </li>
</template>