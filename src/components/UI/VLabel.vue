<script setup>
defineProps({
  label: String
})
</script>

<template>
  <div class="label-item">
    {{ label }}
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.label-item {
  position: absolute;
  z-index: 2;
  flex: 1;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: darken($colorMainLight, 10%);
  background: white;
  transition: .2s ease;
  font-family: $secondFont;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;

  &:first-letter {
    text-transform: uppercase;
  }

  &.focused {
    top: 0;
    background: darken($colorMainLight, 10%);
    color: white;
  }
}
</style>