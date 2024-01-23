<script setup>

import {computed, defineAsyncComponent} from "vue";

const selectTemplate = null

const ViewTemplate = computed(() => {
  switch (selectTemplate) {
    default:
      return defineAsyncComponent(() => import('@/components/templates/MainTemplate.vue'))
  }
})
</script>

<template>
  <div class="cv-viewport">
    <component
        :is="ViewTemplate"
    />
  </div>
</template>

<style scoped lang="scss">
.cv-viewport {
  flex: 1;
  display: flex;
}

</style>