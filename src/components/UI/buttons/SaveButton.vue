<script setup>
import {computed} from "vue";
import {iconNames} from "@/helpers/icons.js";
import {colors} from "@/helpers/colors.js";

import IconButton from "@/components/UI/buttons/IconButton.vue";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: true
  }
})

defineEmits(['onClick'])

</script>

<template>
  <IconButton
      :icon="iconNames.DOWNLOAD"
      :color="colors.UI.BUTTONS.DOWNLOAD.DEFAULT"
      :hover-color="colors.UI.BUTTONS.DOWNLOAD.HOVER"
      :background-color="colors.APP.DARK.DARKEN"
      :hover-background-color="colors.APP.DARK.LIGHTEN"
      :width="40"
      :height="40"
      :padding="5"
      :border-radius="5"
      @on-click="$emit('onClick')"
  />
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";
@import "../../../assets/css/media";

.save-button-wrapper {
  background: lighten($colorMainDark, 5%);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease;

  @media #{$mouse} {
    &:hover {
      background: lighten($colorMainDark, 8%);

      .save-button {
        background: lighten($colorMainLight, 10%);
      }
    }
  }
}

.save-button {
  width: 35px;
  height: 35px;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  transition: .2s ease;
  cursor: pointer;
}
</style>