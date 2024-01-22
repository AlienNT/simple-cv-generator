<script setup>
import VIcon from "@/components/UI/VIcon.vue";
import {iconPath} from "@/helpers/icons.js";
import {computed} from "vue";
import {getStyle} from "@/helpers/getStyle.js";

const props = defineProps({
  color: {
    type: String,
    default: '#ccc'
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  padding: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 30
  },
  height: {
    type: Number,
    default: 30
  },
  icon: {
    type: String
  },
  path: {
    type: String,
    default: iconPath
  }
})

defineEmits(['onClick'])

const buttonStyle = computed(() => {
  return getStyle({
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor
  })
})
const buttonWrapperStyle = computed(() => {
  return getStyle({
    padding: props.padding,
  })
})
</script>

<template>
  <button
      class="icon-button"
      :style="buttonStyle"
      @click.stop="$emit('onClick')"
  >
    <span
        class="icon-button-wrapper"
        :style="buttonWrapperStyle"
    >
      <VIcon
          :background-color="color"
          :icon="icon"
          :icon-path="path"
          :height="height"
          :width="width"
      />
    </span>
  </button>

</template>

<style scoped lang="scss">
.icon-button {
  transition: .2s ease;
  cursor: pointer;
  padding: 0;
}
.icon-button-wrapper {
  display: block;
}
</style>