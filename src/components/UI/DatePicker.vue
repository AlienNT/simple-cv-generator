<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

defineProps({
  date: {
    type: [Date, Array],
    default: Date.now()
  },
  placeholder: {
    type: String,
    default: 'Date'
  },
  range: {
    type: Boolean,
    default: false
  }
})

defineEmits(['onChange'])

</script>

<template>
  <div class="date-picker">
    <VueDatePicker
        :model-value="date"
        :time-picker="false"
        :placeholder="placeholder"
        ignore-time-validation
        format="dd.MM.yyyy"
        :enable-time-picker="false"
        range
        @update:model-value="e => $emit('onChange', e)"
    />
  </div>
</template>

<style scoped lang="scss">
.date-picker {
  padding-top: 15px;
}
</style>