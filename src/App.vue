<script setup lang="ts">
import { ref } from "vue";
import Searchbar from "./components/Searchbar.vue";
import Palette from "./components/Palette.vue";
import Hint from "./components/Hint.vue";
import Footer from "./components/Footer.vue";
const selectedColor = ref("");
</script>

<template>
  <h1 class="title" :style="{ color: selectedColor }">Shades</h1>
  <Searchbar v-model:selectedColor="selectedColor" />
  <Palette :selectedColor="selectedColor" />

  <!-- <Hint /> -->
  <Footer />
</template>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffffde;
  background-color: #1a1a1a;
}

input {
  background: none;
  border: none;
}

#app {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
  font-family: Lexend, sans-serif;
  margin: 0;
  margin-bottom: 2rem;
}
</style>
