<script setup lang="ts">
import { computed, ref } from "vue";
import { convertToRgb, generateShadesFromRgb, generateTintsFromRgb, rgbToHex } from "../utils/color";

const props = defineProps<{ selectedColor: string }>();
const hovered = ref("");

const getRgb = computed(() => convertToRgb(props.selectedColor));
const shades = computed(() => generateShadesFromRgb(getRgb.value));
const tints = computed(() => generateTintsFromRgb(getRgb.value));
// probably a better way to do this
const colors = computed(() => {
  const shadeClone = shades?.value?.slice();
  const tintClone = tints?.value?.slice();
  if (!shadeClone || !tintClone) {
    return [];
  }
  return [...shadeClone, ...tintClone];
});

const copyToClipboard = (color: string) => {
  // copy to navigator clipboard
  navigator.clipboard.writeText(color);
};
</script>

<template>
  <div style="flex: 1">
    <div class="box-wrapper">
      <div @click="copyToClipboard(color)" v-for="color in colors">
        <div :style="{ backgroundColor: color }" class="box" @mouseleave="hovered = ''" @mouseenter="hovered = color">
          <span class="badge" :style="{ opacity: hovered === color ? 1 : 0 }">copy</span>
        </div>
        <span class="hex">{{ color }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.box {
  height: 50px;
  width: auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0px#fff, inset 0 0 0 1px rgb(255 255 255/0.1), 0 10px 15px -3px rgb(0 0 0/0.1),
    0 4px 6px -4px rgb(0 0 0/0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2px 4px 3px 4px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  color: #e2e8f0;
  text-align: center;
  transition: all 0.2s ease-in-out;
}

.hex {
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
  margin-left: 2px;
}
</style>
