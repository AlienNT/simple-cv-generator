<script setup>

import {computed} from "vue";
import {iconsPath} from "@/helpers/icons.js";

defineEmits(['onClick'])

const style = computed(() => {
  return [
    `mask-image: url(${iconsPath.UPLOAD})`,
  ].join('; ')
})
</script>

<template>
  <div
      class="button-wrapper"
      @click.stop="$emit('onClick')"
  >
    <button
        class="upload-button"
        type="button"
        :style="style"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";

.button-wrapper {
  cursor: pointer;
  padding: 5px;
  width: 30px;
  height: 30px;
  background: $colorMainLight;
  border-radius: 5px;
  transition: .2s ease;

  &:hover {
    background: white;

    .upload-button {
      background: darken($colorMainLight, 20%);
    }
  }
}

.upload-button {
  transition: .2s ease;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  background: white;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

</style>