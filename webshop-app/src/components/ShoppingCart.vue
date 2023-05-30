<script setup>
import { useCartStore } from '../../store/cart'
import formatPrice from '../utils/formatPrice'

const { cart, totalPrice } = useCartStore()
</script>

<template>
  <div class="my-5">
    <h1>Cart</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Count</th>
          <th scope="col">Sum price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of cart" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.count }}</td>
          <td>{{ formatPrice(item.count * item.price) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">{{ formatPrice(totalPrice) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped></style>
