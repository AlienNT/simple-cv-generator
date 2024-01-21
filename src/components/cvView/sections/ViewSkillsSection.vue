<script setup>
import {useState} from "@/composables/useState.js";
import {computed} from "vue";
import {sectionFields, sectionNames} from "@/helpers/fields.js";

import ViewSectionTemplate from "@/components/cvView/ViewSectionTemplate.vue";
import ViewSkillField from "@/components/cvView/sectionFields/ViewSkillField.vue";

const {sectionByName} = useState()

const sectionData = computed(() => {
  return sectionByName(sectionNames.SKILLS).value
})
</script>

<template>
  <ViewSectionTemplate
      :title="sectionData?.title || sectionData?.name"
  >
    <template v-slot:content>
      <ViewSkillField
          v-for="item in sectionData?.items"
          :value="item?.[sectionFields.SKILLS.TITLE.name]"
      />
    </template>
  </ViewSectionTemplate>
</template>