<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h5 class="card-title">{{ title }}</h5>
</template>
