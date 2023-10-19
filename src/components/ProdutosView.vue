<script setup>
import {useCartStore} from "../stores/storeCart";
import {ShoppingCartIcon } from '@heroicons/vue/24/solid'
const store = useCartStore()

defineProps({
  title:String,
  img:String,
  price:Number,
  items:Array,

})
</script>

<template>

        <li
          class="justify-center items-center flex flex-col p-4 rounded-md border-2 m-2 scale-95 hover:scale-100 transition duration-300 shadow-sm hover:shadow-xl"
    
        >
          <img :src="img" :alt="title" class="h-64" />

          <p class="font-semibold">{{ title }}</p>
          <p class="text-[1.6rem]">R$ {{ price.toFixed(2) }}</p>
        <div class="flex gap-8 justify-center items-center mt-3 border-t-2">
          <a
            :href="`https://api.whatsapp.com/send?phone=554891699518&text=Ola%20tenho%20interesse%20em%20comprar%20o%20item: ${title}`"
            class="text-[1.2rem] bg-yellow-500 font-semibold p-3 rounded-xl mt-3 hover:bg-yellow-800 transition-all"
            >Solicitar</a
          >
          <ShoppingCartIcon class="h-12 cursor-pointer  text-yellow-800" @click="store.incrementCart(items)" /> 
        </div>
        </li>
     
</template>