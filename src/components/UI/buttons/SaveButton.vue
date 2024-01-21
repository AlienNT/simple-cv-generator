<script setup>
import {computed} from "vue";
import {iconsPath} from "@/helpers/icons.js";

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

const style = computed(() => {
  return [
    `mask-image: url(${iconsPath.DOWNLOAD})`,
  ].join('; ')
})
</script>

<template>
  <div
      class="save-button-wrapper"
      @click="$emit('onClick')"
  >
    <button
        type="button"
        class="save-button"
        :class="!isShow && 'hide'"
        :style="style"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";

.save-button-wrapper {
  background: lighten($colorMainDark, 5%);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    background: lighten($colorMainDark, 8%);

    .save-button {
      background: lighten($colorMainLight, 10%);
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