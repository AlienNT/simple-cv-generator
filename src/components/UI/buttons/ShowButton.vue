<script setup>
import IconButton from "@/components/UI/buttons/IconButton.vue";

import {iconNames} from "@/helpers/icons.js";
import {colors} from "@/helpers/colors.js";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})

defineEmits(['onClick'])

</script>

<template>
  <IconButton
      :icon="isShow ? iconNames.SHOW : iconNames.HIDE"
      :color="colors.UI.BUTTONS.SHOW.DEFAULT"
      :hover-color="colors.UI.BUTTONS.SHOW.HOVER"
      :class="!isShow && 'hide'"
      @on-click="$emit('onClick')"
  />
</template>

<style scoped lang="scss">
.hide {
  opacity: .6;
}
</style>