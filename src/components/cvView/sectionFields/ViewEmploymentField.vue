<script setup>
import DateField from "@/components/UI/DateField.vue";
import TextToListField from "@/components/UI/TextToListField.vue";
import TextField from "@/components/UI/TextField.vue";

const props = defineProps({
  position: {
    type: String
  },
  company: {
    type: String
  },
  dates: {
    type: Array
  },
  description: {
    type: String
  },
  datePattern: {
    type: String
  }
})
</script>

<template>
  <div class="view-employment-field">
    <div class="view-employment-field__row">
      <div class="view-employment-field__position">
        <TextField
            :value="position"
        />
      </div>
      <div class="view-employment-field__company">
        <TextField
            :value="company"
        />
      </div>
    </div>
    <div class="view-employment-field__date view-field__date">
      <DateField
          :dates="dates"
      />
    </div>
    <div class="view-employment-field__description">
      <TextToListField
          :value="description"
      />
    </div>
  </div>
</template>