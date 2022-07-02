<script setup lang="ts">
defineProps<{ selectedColor: string }>();
const emit = defineEmits(["update:selectedColor"]);

window.addEventListener("keydown", (e) => {
  // detect ctrl + v
  // if (e.ctrlKey && e.key === "v") {
  //   // get clipboard contents
  //   console.log("clipboard", navigator.clipboard.readText());
  //   navigator.clipboard.readText().then((text) => {
  //     // update selectedColor
  //     emit("update:selectedColor", text);
  //   }).catch(e => {
  //   })
  // }
});
</script>

<template>
  <div tabindex="0" class="searchbar" :style="{ outlineColor: selectedColor }">
    <input
      autofocus
      placeholder="Enter hex, rgb, hsl..."
      class="input"
      :value="selectedColor"
      @input="$emit('update:selectedColor',( $event.target as HTMLInputElement ).value)"
    />
    <input
      aria-label="color picker"
      type="color"
      :value="selectedColor"
      @input="$emit('update:selectedColor',( $event.target as HTMLInputElement ).value)"
      class="color-input"
    />
  </div>
</template>

<style scoped>
.searchbar {
  display: flex;
  padding: 0.1rem 0.3rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  background: #fff;
}
.searchbar:focus,
.searchbar:hover {
  outline: 1px solid;
  outline-offset: 2px;
}

.input {
  width: 100%;
  display: block;
  height: 2rem;
  font-family: inherit;
}
.input:focus,
.input:hover {
  outline: none;
}

.color-input {
  padding: 0;
  width: 40px;
  height: 30px;
}
</style>
