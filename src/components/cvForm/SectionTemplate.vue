<script setup>
defineProps({
  title: String,
  name: String,
})
</script>

<template>
  <div class="section-field__title">
    {{ title || name }}
  </div>
  <div class="section-field__items">
    <slot name="items"/>
  </div>
</template>