import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('useCartStore', () => {
  const cart = ref([])
  const popUp = ref(false)
  const modalCart = ref(false)
  const cartLength = ref()
  const total = ref([])
  const allPrices = ref()
  const checkPrices = ref(false)
  const sendToWhats = ref([])
  const qtdCart =  ref([])
  const qtdProd = ref()
    function incrementCart(item, qtd) {
    const findItem = cart.value.findIndex((itemTitle) => itemTitle.title === item.title)
    const newQtd = qtd

    if (findItem >= 0) return
    cart.value.push(item)
    popUp.value = true
    setTimeout(() => {
      popUp.value = false
    }, 700)
    cartLength.value = cart.value.length
    total.value.push(Math.floor(item.price * qtd))
    allPrices.value = total.value.reduce((acc, val) => acc  + val ) 
    qtdCart.value.push({title:item.title, qt:qtd})
   
    sendMessage(item, qtd)
  }

  function sendMessage(item, qtd) {
    sendToWhats.value.push(+qtd+'x\n '+item.title+'\n');

  }
 
  function removeItemCart(item) {
   cart.value
    const index = cart.value.indexOf(item)
    if (index > -1) {
      cart.value.splice(index, 1)
      total.value.splice(index, 1)
      sendToWhats.value.splice(index,1)
      
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
qtdCart.value
    allPrices.value = total.value.reduce((acc, val) => acc + val)
    
  }

  return {
    incrementCart,
    removeItemCart,
    popUp,
    cartLength,
    modalCart,
    cart,
    total,
    allPrices,
    sendToWhats,
    qtdCart,
    qtdProd
  }
})
