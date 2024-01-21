<script setup>
defineProps({
  value: String
})
</script>

<template>
  <a class="phone-field" :href="'tel:' + value">{{ value }}</a>
</template>