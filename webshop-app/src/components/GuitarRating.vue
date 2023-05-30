<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
})

const ratingStars = computed(
  () => `
  ${'★'.repeat(props.rating)}
  ${'☆'.repeat(5 - props.rating)}
  (${props.rating})
`
)
</script>

<template>
  <div class="my-2">
    <span v-if="rating > 0">{{ ratingStars }}</span>
    <span v-else>Not rated</span>
  </div>
</template>
