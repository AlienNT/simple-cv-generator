<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  label: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['onClick'])

</script>

<template>
  <button
      class="button"
      :type="type"
      :disabled="disabled"
      @click="$emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  border: none;
  display: block;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  background: #435f84;
  color: white;

}
</style>