<script setup>
import DateField from "@/components/UI/DateField.vue";
import TextField from "@/components/UI/TextField.vue";

const props = defineProps({
  dates: {
    type: Array
  },
  speciality: {
    type: String
  },
  educationInstitution: {
    type: String
  }
})
</script>

<template>
  <div class="view-education-field">
    <div class="view-education-field__row">
      <TextField
          class="view-education-field__education"
          :value="speciality"
      />
      <DateField
          class="view-education-field__date view-field__date"
          :dates="dates"
      />
      <TextField
          class="view-education-field__education-institution"
          :value="educationInstitution"
      />
    </div>
  </div>
</template>