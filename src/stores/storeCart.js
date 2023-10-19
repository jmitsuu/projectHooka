import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('useCartStore', () => {
  const cart = ref([])
  const popUp = ref(false)
  const modalCart = ref(false)
  const cartLength = ref()
  const total = ref([])
  const allPrices = ref();
  const checkPrices = ref(false)
  const sendToWhats = ref([]);

  function incrementCart(item) {
    const findItem = cart.value.findIndex((itemTitle) => itemTitle.title === item.title)
    if (findItem >= 0) return
    cart.value.push(item)
    popUp.value = true
    setTimeout(() => {
      popUp.value = false
    }, 400)
    cartLength.value = cart.value.length
    total.value.push(item.price)
    allPrices.value = total.value.reduce((acc, val) => acc + val)
    console.log(allPrices.value)

    sendMessage(item)

  }
  function sendMessage(item){
    sendToWhats.value.push(item.title)
  }
  function removeItemCart(item) {
 
    const index = cart.value.indexOf(item);
    if(index > -1){
      cart.value.splice(index, 1)
      total.value.splice(index,1 )
    }
    // cart.value.splice(0, item)
    checkPrices.value = true
    if (cart.value.length === 0) {
      modalCart.value = false
    }
    if (cartLength.value < 1) {
      cartLength.value = ''
    }
    cartLength.value = cart.value.length

    allPrices.value = total.value.reduce((acc, val) => acc + val)


  }

  return { incrementCart, removeItemCart, popUp, cartLength, modalCart, cart, total, allPrices, sendToWhats }
})
