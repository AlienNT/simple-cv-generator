<script setup>

import IconButton from "@/components/UI/buttons/IconButton.vue";

import {iconNames} from "@/helpers/icons.js";
import {colors} from "@/helpers/colors.js";

defineEmits(['onClick'])

</script>

<template>
  <IconButton
      :background-color="colors.UI.BUTTONS.UPLOAD.DEFAULT"
      :hover-background-color="colors.UI.BUTTONS.UPLOAD.HOVER"
      :icon="iconNames.UPLOAD"
      :padding="5"
      :border-radius="5"
      color="white"
  />
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