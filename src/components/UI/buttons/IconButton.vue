<script setup>
import VIcon from "@/components/UI/VIcon.vue";
import {iconPath} from "@/helpers/icons.js";
import {computed, ref,} from "vue";
import {getStyle} from "@/helpers/getStyle.js";

const props = defineProps({
  color: {
    type: String,
    default: null
  },
  hoverColor: {
    type: String,
    default: null
  },
  backgroundColor: {
    type: String,
    default: null
  },
  hoverBackgroundColor: {
    type: String,
    default: null
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
  },
  borderRadius: {
    type: Number,
    default: null
  }
})

defineEmits(['onClick'])

const isHovered = ref(false)

const buttonStyle = computed(() => {
  return getStyle({
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    backgroundColor: isHovered.value && props.hoverBackgroundColor ? props.hoverBackgroundColor : props.backgroundColor
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
      type="button"
      :style="buttonStyle"
      @click="$emit('onClick')"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <span
        class="icon-button-wrapper"
        :style="buttonWrapperStyle"
    >
      <VIcon
          :background-color="isHovered && hoverColor ? hoverColor : color"
          :icon="icon"
          :icon-path="path"
      />
    </span>
  </button>

</template>

<style scoped lang="scss">

.icon-button {
  transition: .2s ease;
  cursor: pointer;
  display: flex;
  padding: 0;
  background: transparent;
}

.icon-button-wrapper {
  display: flex;
  transition: .2s ease;
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>