<script setup>
import {computed} from "vue";
import {iconsPath} from "@/helpers/icons.js";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})

defineEmits(['onClick'])

const style = computed(() => {
  return [
    `mask-image: url(${props.isShow ? iconsPath.SHOW : iconsPath.HIDE})`,
  ].join('; ')
})
</script>

<template>
  <button
      type="button"
      class="show-button"
      :class="!isShow && 'hide'"
      :style="style"
      @click="$emit('onClick')"
  />
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";

.show-button {
  transition: .2s ease;
  mask-position: center;
  mask-size: contain;
  background: $colorMainLight;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background: lighten($colorMainLight, 15%);
  }

  &.hide {
    opacity: .5;
  }
}
</style>