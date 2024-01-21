<script setup>
import {useState} from "@/composables/useState.js";
import {computed} from "vue";
import {sectionFields, sectionNames} from "@/helpers/fields.js";

import ViewSectionTemplate from "@/components/cvView/ViewSectionTemplate.vue";
import ViewEmploymentField from "@/components/cvView/sectionFields/ViewEmploymentField.vue";

const {sectionByName} = useState()

const sectionData = computed(() => {
  return sectionByName(sectionNames.EMPLOYMENT).value
})
</script>

<template>
  <ViewSectionTemplate
      :title="sectionData?.title || sectionData?.name"
  >
    <template v-slot:content>
      <ViewEmploymentField
          v-for="item in sectionData?.items"
          :dates="item?.[sectionFields.EMPLOYMENT.DATES.name]"
          :company="item?.[sectionFields.EMPLOYMENT.COMPANY.name]"
          :description="item?.[sectionFields.EMPLOYMENT.DESCRIPTION.name]"
          :position="item?.[sectionFields.EMPLOYMENT.POSITION.name]"
      />
    </template>
  </ViewSectionTemplate>
</template>