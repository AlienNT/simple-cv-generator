<script setup>

import {fieldTypes, sectionFields} from "@/helpers/fields.js";
import sectionTypes from "@/helpers/sectionTypes.js";
import VField from "@/components/UI/VField.vue";

defineProps({
  title: {
    type: String
  },
  section: {
    type: Object
  }
})
</script>

<template>
  <VField
      :field-type="fieldTypes.INPUT"
      :value="title"
      label="Section title"
      class="cv-form-section__title-field"
      use-label
      @on-input="e => section[sectionFields.PROFILE.TITLE.name] = e"
  />
  <VField
      v-if="section?.['name'] === sectionTypes.PROFILE"
      :field-type="fieldTypes.INPUT"
      :value="sectionFields.PROFILE.DESCRIPTION.name"
      :label="sectionFields.PROFILE.DESCRIPTION.name"
      use-label
      @on-input="e => section[sectionFields.PROFILE.DESCRIPTION.name] = e"
  />
</template>

<style scoped lang="scss">
.cv-form-section__title-field {
  margin-bottom: 15px;
}
</style>