<script setup>
import {useState} from "@/composables/useState.js";
import {computed} from "vue";
import {sectionFields, sectionNames} from "@/helpers/fields.js";

import ViewSectionTemplate from "@/components/cvView/ViewSectionTemplate.vue";
import ViewDetailsField from "@/components/cvView/sectionFields/ViewDetailsField.vue";

const {sectionByName} = useState()

const sectionData = computed(() => {
  return sectionByName(sectionNames.DETAILS).value
})
</script>

<template>
  <ViewSectionTemplate
      :title="sectionData?.title || sectionData?.name"
  >
    <template v-slot:content>
      <ViewDetailsField
          v-for="field in sectionData?.items"
          :title="field?.[sectionFields.DETAILS.TITLE.name]"
          :value="field?.[sectionFields.DETAILS.VALUE.name]"
      />
    </template>
  </ViewSectionTemplate>
</template>