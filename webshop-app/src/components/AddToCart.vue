<script setup>
import { useCartStore } from '../../store/cart'
import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const proprs = defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)
const { addItemToCart, getItemById, changeItemCount, deleteFromCart } =
  useCartStore()
const buttonText = ref('Add to cart')

watch(count, () => {
  const minCount = 0
  const maxCount = proprs.guitar.stock

  if (count.value < minCount) {
    count.value = minCount
  } else if (count.value > maxCount) {
    count.value = maxCount
  }
})

function handleDecreaseCountClick() {
  count.value--
}

function handleIncreaseCountClick() {
  count.value++
}

function handleCartClick(guitar) {
  const item = getItemById(guitar.id)
  if (!item && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
    toast.success('Item has been added to the cart!')
  } else if (item?.stock !== count.value && count.value > 0) {
    changeItemCount(guitar.id, count)
    toast.success('Item count has been changed!')
  } else if (item && count.value === 0) {
    deleteFromCart(guitar.id)
    buttonText.value = 'Add to cart'
    toast.success('Item has been removed from cart!')
  }
}
</script>

<template>
  <div class="d-flex flex-row">
    <button class="btn btn-danger" @click="handleDecreaseCountClick">-</button>
    <input
      v-model="count"
      type="text"
      class="form-control w-25 mx-1 text-center align-middle"
    />
    <button class="btn btn-success" @click="handleIncreaseCountClick">+</button>
    <button class="btn btn-primary mx-1" @click="handleCartClick(guitar)">
      {{ buttonText }}
    </button>
  </div>
</template>
