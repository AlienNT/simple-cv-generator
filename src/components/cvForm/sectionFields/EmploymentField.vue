<script setup>
import DatePicker from "@/components/UI/DatePicker.vue";
import VField from "@/components/UI/VField.vue";

import {fieldTypes, sectionFields} from "@/helpers/fields.js";

const props = defineProps({
  field: {
    type: Object
  }
})
</script>

<template>
  <div class="field">
    <VField
        :field-type="fieldTypes.INPUT"
        :value="field?.[sectionFields.EMPLOYMENT.POSITION.name]"
        :label="sectionFields.EMPLOYMENT.POSITION.name"
        use-label
        @on-input="e => field[sectionFields.EMPLOYMENT.POSITION.name] = e"
    />
    <VField
        :field-type="fieldTypes.INPUT"
        :value="field?.[sectionFields.EMPLOYMENT.COMPANY.name]"
        :label="sectionFields.EMPLOYMENT.COMPANY.name"
        use-label
        @on-input="e => field[sectionFields.EMPLOYMENT.COMPANY.name] = e"
    />
    <VField
        :field-type="fieldTypes.TEXTAREA"
        :value="field?.[sectionFields.EMPLOYMENT.DESCRIPTION.name]"
        :label="sectionFields.EMPLOYMENT.DESCRIPTION.name"
        use-label
        @on-input="e => field[sectionFields.EMPLOYMENT.DESCRIPTION.name] = e"
    />
    <DatePicker
        :date="field?.[sectionFields.EMPLOYMENT.DATES.name]"
        range
        @on-change="e => field[sectionFields.EMPLOYMENT.DATES.name] = e"
    />
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
}
</style>