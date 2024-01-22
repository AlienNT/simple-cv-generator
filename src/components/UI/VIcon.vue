<script setup>
import {iconPath} from "@/helpers/icons.js";
import {computed} from "vue";

const props = defineProps({
  iconPath: {
    type: String,
    default: iconPath
  },
  icon: {
    type: String,
    default: null
  },
  width: {
    type: Number,
    default: 30
  },
  height: {
    type: Number,
    default: 30
  },
  backgroundColor: {
    type: String,
    default: '#2a2a2a'
  }
})

const style = computed(() => [
  !!props.icon && `mask-image: url(${props.iconPath + props.icon})`,
  `width: ${props.width}px`,
  `height: ${props.height}px`,
  `background-color: ${props.backgroundColor}`
])

</script>

<template>
  <div class="v-icon" :style="style"/>
</template>

<style scoped lang="scss">
.v-icon {
  transition: .2s ease;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}
</style>