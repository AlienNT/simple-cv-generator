<script setup>
import TextField from "@/components/UI/TextField.vue";

defineProps({
  value: String
})
</script>

<template>
  <div class="view-skill-field">
    <TextField
        :value="value"
    />
  </div>
</template>