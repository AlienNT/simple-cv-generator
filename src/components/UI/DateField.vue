<script setup>
import {computed} from "vue";
import {formattedDate} from "@/helpers/index.js";

const props = defineProps({
  dates: {
    type: Array
  },
  currentTimeLabel: {
    type: String,
    default: 'Present'
  }
})

const displayDate = computed(() => {
  if (!props?.dates?.length) return null

  const res = props.dates.map(date => {
    return date ? formattedDate(date) : props.currentTimeLabel
  })

  return res[0] === res[1] ? [res[0], props.currentTimeLabel].join(' - ') : res.join(' - ')
})

</script>

<template>
  <div class="date-field">{{ displayDate }}</div>
</template>