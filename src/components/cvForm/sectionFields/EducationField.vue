<script setup>
import VField from "@/components/UI/VField.vue";
import DatePicker from "@/components/UI/DatePicker.vue";

import {sectionFields} from "@/helpers/fields.js";

const props = defineProps({
  field: {
    type: Object
  }
})
</script>

<template>
  <div class="field">
    <VField
        :value="field?.[sectionFields.EDUCATION.SPECIALITY.name]"
        :label="sectionFields.EDUCATION.SPECIALITY.label"
        use-label
        @on-input="e => field[sectionFields.EDUCATION.SPECIALITY.name] = e"
    />
    <VField
        :value="field?.[sectionFields.EDUCATION.EDUCATIONAL_INSTITUTION.name]"
        :label="sectionFields.EDUCATION.EDUCATIONAL_INSTITUTION.label"
        use-label
        @on-input="e => field[sectionFields.EDUCATION.EDUCATIONAL_INSTITUTION.name] = e"
    />
    <DatePicker
        :date="field?.[sectionFields.EDUCATION.DATES.name]"
        :label="sectionFields.EDUCATION.DATES.label"
        use-label
        @on-change="e => field[sectionFields.EDUCATION.DATES.name] = e"
    />
  </div>
</template>