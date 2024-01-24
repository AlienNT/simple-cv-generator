<script setup>
import TheMain from "./components/TheMain.vue";
import {onMounted} from "vue";

onMounted(() => {
  setWindowHeight()
  window.onresize = () => setWindowHeight()
})
function setWindowHeight(){
  document.documentElement.style.setProperty('--vh', `${document.documentElement.offsetHeight}px`)
}
</script>

<template>
  <TheMain/>
</template>

<style lang="scss">
@import "assets/css/templates/main/variables";
html, body {
  height: 100%;
}
#app {
  background: $colorMainDark;
  height: var(--vh, 100vh);
  overflow-y: scroll;
}
</style>
