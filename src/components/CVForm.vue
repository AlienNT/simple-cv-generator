<script setup>
import {useState} from "@/composables/useState.js";
import {watch} from "vue";
import {fieldTypes} from "@/helpers/fields.js";

import CvFormSection from "@/components/cvForm/CvFormSection.vue";
import VField from "@/components/UI/VField.vue";
import ImageField from "@/components/cvForm/sectionFields/ImageField.vue";

const {
  cvDescription,
  setCvDescription,

  cvTitle,
  setCvTitle,

  image,
  setImage,

  cvSections,
  form
} = useState()

const emit = defineEmits(['onChange'])

watch(() => form.value, value => {
  emit('onChange', value)
}, {
  immediate: true,
  deep: true
})
</script>

<template>
  <form class="cv-form">
    <div class="field">
      <VField
          :field-type="fieldTypes.INPUT"
          :value="cvTitle"
          label="title"
          use-label
          @on-input="setCvTitle"
      />
    </div>
    <div class="field">
      <VField
          :field-type="fieldTypes.TEXTAREA"
          :value="cvDescription"
          use-label
          label="description"
          @on-input="setCvDescription"
      />
    </div>
    <div class="field">
      <ImageField
          :value="image?.file"
          :name="image?.name"
          @on-input="setImage"
      />
    </div>
    <div class="field">
      <div
          v-for="section in cvSections"
          class="section"
      >
        <CvFormSection
            :section="section"
        />
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.cv-form {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
  padding: 15px;
}

.field {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    display: flex;
    flex-direction: column;
  }
}
</style>