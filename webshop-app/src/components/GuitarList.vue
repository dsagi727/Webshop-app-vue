<script setup>
import { onMounted } from 'vue'
import { useGuitarsStore } from '../../store/guitars'
import GuitarItem from './GuitarItem.vue'
const { guitars, fetchGuitars } = useGuitarsStore()

onMounted(async () => {
  await fetchGuitars()
})
</script>

<template>
  <div class="row my-5">
    <GuitarItem v-for="guitar of guitars" :key="guitar.id" :guitar="guitar" />
  </div>
</template>

<style scoped></style>
