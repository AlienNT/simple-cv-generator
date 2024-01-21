<script setup>
import RemoveButton from "@/components/UI/buttons/RemoveButton.vue";

defineProps({
  component: {
    type: Object
  },
  field: {
    type: Object
  }
})

defineEmits(['onRemove'])
</script>

<template>
  <div class="cv-button-wrapper">
    <component
        class="cv-field"
        :component="component"
        :field="field"
    />
    <RemoveButton
        class="cv-remove-button"
        @on-click="$emit('onRemove', field?._id)"
    />
  </div>
</template>

<style scoped>
.cv-button-wrapper {
  display: flex;
  gap: 15px;
}
.cv-field {
  flex: 1;
}
.cv-remove-button {
  flex: none;
  align-self: center;
  justify-self: flex-end;
}
</style>