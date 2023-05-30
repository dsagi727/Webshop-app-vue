<script setup>
import { useCartStore } from '../../store/cart'
import { ref, watch } from 'vue'

const proprs = defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)
const { addItemToCart, getItemById } = useCartStore()
const buttonText = 'Add to cart'

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
  if (getItemById(guitar.id) && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
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
