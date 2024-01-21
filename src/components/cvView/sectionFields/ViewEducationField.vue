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
    <div class="view-education-field__education">
      <TextField
          :value="speciality"
      />
    </div>
    <div class="view-education-field__education-institution">
      <TextField
          :value="educationInstitution"
      />
    </div>
    <div class="view-education-field__date view-field__date">
      <DateField
          :dates="dates"
      />
    </div>
  </div>
</template>