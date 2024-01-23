<script setup>
import {iconNames} from "@/helpers/icons.js";
import {colors} from "@/helpers/colors.js";

import IconButton from "@/components/UI/buttons/IconButton.vue";

const emit = defineEmits(['onClick'])

</script>

<template>
  <IconButton
      :icon="iconNames.REMOVE"
      :color="colors.UI.BUTTONS.REMOVE.DEFAULT"
      :hover-color="colors.UI.BUTTONS.REMOVE.HOVER"
      @on-click="emit('onClick')"
  />
</template>