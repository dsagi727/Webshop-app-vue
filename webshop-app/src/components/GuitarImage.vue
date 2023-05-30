<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <img :src="`guitars/${title}.jpg`" class="img-fluid" :alt="title" />
</template>
