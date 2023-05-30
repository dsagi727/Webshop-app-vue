import { readonly, ref } from 'vue'

const cart = ref([])

export function useCartStore() {
  function getItemById(id) {
    return cart.value.find((item) => item.id === id)
  }

  function addItemToCart(item, count) {
    cart.value.push({ ...item, count })
  }

  return {
    cart: readonly(cart),
    addItemToCart,
    getItemById,
  }
}
