<script setup>
defineProps({
  stock: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="mt-1">
    <h5 v-if="stock === 0" class="h6 text-danger">Out of stock</h5>
    <h5 v-else-if="stock < 3" class="h6 text-warning">
      Last Chance only {{ stock }} left
    </h5>
    <h5 v-else class="h6 text-success">In stock</h5>
  </div>
</template>
