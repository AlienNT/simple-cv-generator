<script setup>
import VField from "@/components/UI/VField.vue";
import {sectionFields} from "@/helpers/fields.js";

defineProps({
  field: {
    type: Object
  }
})

</script>

<template>
  <div class="field">
    <VField
        :label="sectionFields.SKILLS.TITLE.label"
        :value="field?.[sectionFields.SKILLS.TITLE.name]"
        use-label
        @on-input="e => field[sectionFields.SKILLS.TITLE.name] = e"
    />
  </div>
</template>