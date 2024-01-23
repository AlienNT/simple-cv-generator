<script setup>
defineProps({
  title: {
    type: String
  },
  name: {
    type: String
  }
})
</script>

<template>
  <div class="cv-form-section__title">
    {{ title || name }}
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.cv-form-section__title {
  font-family: $secondFont;
  color: #435f84;
  font-weight: bold;
  font-size: 16px;

  &:first-letter {
    text-transform: uppercase;
  }
}
</style>