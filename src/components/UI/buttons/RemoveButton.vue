<script setup>
import {computed} from "vue";
import {iconsPath} from "@/helpers/icons.js";

defineEmits(['onClick'])

const style = computed(() => [
  `mask-image: url(${iconsPath.REMOVE})`
].join('; '))
</script>

<template>
  <button
      class="remove-button"
      type="button"
      :style="style"
      @click="$emit('onClick')"
  />
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";

.remove-button {
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 30px;
  height: 30px;
  display: block;
  background: #daa2a2;
  transition: .2s ease;
  cursor: pointer;

  &:hover {
    background: darken(#daa2a2, 15%);
  }
}
</style>