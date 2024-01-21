<script setup>
import {useState} from "@/composables/useState.js";
import {computed} from "vue";
import {sectionFields, sectionNames} from "@/helpers/fields.js";

import ViewSectionTemplate from "@/components/cvView/ViewSectionTemplate.vue";
import ViewEducationField from "@/components/cvView/sectionFields/ViewEducationField.vue";

const {sectionByName} = useState()

const sectionData = computed(() => {
  return sectionByName(sectionNames.EDUCATION).value
})
</script>

<template>
  <ViewSectionTemplate
      :title="sectionData?.title || sectionData?.name"
  >
    <template v-slot:content>
      <ViewEducationField
          v-for="item in sectionData?.items"
          :dates="item?.[sectionFields.EDUCATION.DATES.name]"
          :speciality="item?.[sectionFields.EDUCATION.SPECIALITY.name]"
          :education-institution="item?.[sectionFields.EDUCATION.EDUCATIONAL_INSTITUTION]"
      />
    </template>
  </ViewSectionTemplate>
</template>