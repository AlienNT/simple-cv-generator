<script setup>
import {iconNames} from "@/helpers/icons.js";
import {colors} from "@/helpers/colors.js";

import IconButton from "@/components/UI/buttons/IconButton.vue";

defineEmits(['onClick'])

</script>

<template>
  <div
      class="add-button-wrapper"
      @click="$emit('onClick')"
  >
    <IconButton
        :icon="iconNames.ADD"
        :color="colors.UI.BUTTONS.ADD.DEFAULT"
        :hover-color="colors.UI.BUTTONS.ADD.HOVER"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";
@import "../../../assets/css/media";

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

  @media #{$mouse} {
    &:hover {
      padding-left: calc($padding * 2);
      padding-right: 0;

      &:before {
        opacity: 1;
      }
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
  background: transparent;
  cursor: pointer;
  transition: .2s ease;
  padding: 0;
}
</style>