<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: [String, Number]
  },
  placeholder: {
    type: String,
    default: null
  },
  useLabel: {
    type: Boolean,
    default: false
  },
  usePlaceholder: {
    type: Boolean,
    default: true
  }
})

defineEmits(['onInput', 'onChange'])
</script>

<template>
  <label class="label">
    <input
        class="input"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="e => $emit('onInput', e.target.value)"
        @change="e => $emit('onChange', e.target.value)"
    >
  </label>
</template>

<style scoped>
.label,
.input {
  display: flex;
  flex: 1;
}

.input {
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>