<script setup>
import TheMain from "./components/TheMain.vue";
import {onMounted} from "vue";

onMounted(() => {
  setWindowHeight()
  window.onresize = () => setWindowHeight()
})
function setWindowHeight(){
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
}
</script>

<template>
  <TheMain/>
</template>

<style lang="scss">
@import "assets/css/templates/main/variables";
#app {
  background: $colorMainDark;
}
</style>
