<script setup>
import formatPrice from '../utils/formatPrice'
import { computed } from 'vue'
const props = defineProps({
  price: {
    type: Object,
    required: true,
  },
})

const formattedPrice = computed(() => formatPrice(props.price))
</script>

<template>
  <p class="h5">{{ formattedPrice }}</p>
</template>
