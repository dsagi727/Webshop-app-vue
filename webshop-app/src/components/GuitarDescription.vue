<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="card-text">
    {{ description }}
  </p>
</template>
