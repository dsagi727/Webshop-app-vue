<script setup>
import { useCartStore } from '../../store/cart'

const { totalCount } = useCartStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">GuitarSHOP</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarScroll" class="collapse navbar-collapse">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <routerLink class="nav-link" :to="{ name: 'guitarsList' }">
              Guitars
            </routerLink>
          </li>
          <li class="nav-item">
            <routerLink class="nav-link" :to="{ name: 'cart' }">
              <span v-show="totalCount > 0" class="position-relative">
                Cart
                <span class="badge text-bg-danger">{{ totalCount }}</span>
              </span>
            </routerLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
