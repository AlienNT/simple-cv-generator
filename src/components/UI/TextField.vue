<script setup>
defineProps({
  value: String
})
</script>

<template>
<div class="text-field">{{value}}</div>
</template>

<style scoped>
.text-field:first-letter {
  text-transform: uppercase;
}
</style>