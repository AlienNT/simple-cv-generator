<script setup>
defineProps({
  value: String
})
</script>

<template>
  <a :href="'mailto:' + value" class="email-field">{{ value }}</a>
</template>