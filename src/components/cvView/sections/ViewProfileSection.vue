<script setup>
import {useState} from "@/composables/useState.js";
import {computed} from "vue";
import {sectionFields, sectionNames} from "@/helpers/fields.js";

import ViewSectionTemplate from "@/components/cvView/ViewSectionTemplate.vue";
import TextField from "@/components/UI/TextField.vue";

const {sectionByName} = useState()

const sectionData = computed(() => {
  return sectionByName(sectionNames.PROFILE).value
})
</script>

<template>
  <ViewSectionTemplate
      :title="sectionData?.title || sectionData?.name"
  >
    <template v-slot:content>
      <TextField
          :value="sectionData?.[sectionFields.PROFILE.DESCRIPTION.name]"
      />
    </template>
  </ViewSectionTemplate>
</template>