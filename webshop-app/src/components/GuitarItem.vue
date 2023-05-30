<script setup>
import AddToCart from './AddToCart.vue'
import GuitarDescription from './GuitarDescription.vue'
import GuitarImage from './GuitarImage.vue'
import GuitarTitle from './GuitarTitle.vue'
import GuitarPrice from './GuitarPrice.vue'
import GuitarStock from './GuitarStock.vue'
import GuitarRating from './GuitarRating.vue'

defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card m-2" style="width: 36rem">
    <div class="row justify-content-center align-items-center">
      <div class="col-4">
        <GuitarImage :title="guitar.title" />
      </div>
      <div class="card-body col-8">
        <GuitarTitle :title="guitar.title" />
        <GuitarDescription :description="guitar.description" />
        <GuitarPrice :price="guitar.price" />
        <GuitarRating :rating="guitar.rating" />
        <AddToCart v-if="guitar.stock > 0" :guitar="guitar" />
        <GuitarStock :stock="guitar.stock" />
      </div>
    </div>
  </div>
</template>
