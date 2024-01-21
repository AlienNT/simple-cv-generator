<script setup>
defineProps({
  value: String
})
</script>

<template>
  <a :href="value" class="link-field">{{ value }}</a>
</template>