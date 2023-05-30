<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
              Cart
            </routerLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
