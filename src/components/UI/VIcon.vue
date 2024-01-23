<script setup>
import {iconPath} from "@/helpers/icons.js";
import {computed} from "vue";
import {getStyle} from "@/helpers/getStyle.js";

const props = defineProps({
  iconPath: {
    type: String,
    default: iconPath
  },
  icon: {
    type: String,
    default: null
  },
  backgroundColor: {
    type: String,
    default: '#2a2a2a'
  }
})

const style = computed(() => getStyle({
  maskImage: !!props.icon && props.iconPath + props.icon,
  backgroundColor: props.backgroundColor
}))

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
  flex: 1;
}
</style>