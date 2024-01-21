<script setup>
import {computed} from "vue";
import {iconsPath} from "@/helpers/icons.js";

defineEmits(['onClick'])

const style = computed(() => [
  `mask-image: url(${iconsPath.ADD})`
].join('; '))

</script>

<template>
  <div
      class="add-button-wrapper"
      @click="$emit('onClick')"
  >
    <button
        class="add-button"
        :style="style"
        type="button"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";
$padding: 20px;
$bgColor: #4f914f;

.add-button-wrapper {
  padding: 0 $padding;
  border: 2px solid $bgColor;
  flex: none;
  width: fit-content;
  border-radius: 50px;
  background: white;
  cursor: pointer;
  display: flex;
  transition: .2s ease;
  align-items: center;
  margin: auto;
  justify-content: center;
  position: relative;

  &:hover {
    padding-left: calc($padding * 2);
    padding-right: 0;
    &:before {
      opacity: 1;
    }
  }

  &:before {
    transition: .2s ease;
    position: absolute;
    left: 10px;
    text-transform: uppercase;
    font-family: $secondFont;
    font-weight: bold;
    font-size: 12px;
    content: 'Add';
    display: block;
    opacity: 0;
    color: $bgColor;
  }
}

.add-button {
  width: 30px;
  height: 30px;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background: $bgColor;
  cursor: pointer;
}
</style>