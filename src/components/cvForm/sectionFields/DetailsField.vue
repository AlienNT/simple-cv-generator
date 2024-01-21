<script setup>
import VField from "@/components/UI/VField.vue";
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
      :label="sectionFields.DETAILS.TITLE.name"
      :value="field?.[sectionFields.DETAILS.TITLE.name]"
      use-label
      @on-input="e => field[sectionFields.DETAILS.TITLE.name] = e"
  />
  <VField
      :label="sectionFields.DETAILS.VALUE.name"
      :value="field?.[sectionFields.DETAILS.VALUE.name]"
      use-label
      @on-input="e => field[sectionFields.DETAILS.VALUE.name] = e"
  />
</div>
</template>

<style scoped>

</style>