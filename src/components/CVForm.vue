<script setup>
import {useState} from "@/composables/useState.js";
import {watch} from "vue";
import {fieldTypes} from "@/helpers/fields.js";

import CvFormSection from "@/components/cvForm/CVFormSection.vue";
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
    <div class="cv-form__label">
      Header
    </div>
    <div class="cv-form-header-fields">
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
            :name="image?.name"
            label="Upload photo"
            @on-input="setImage"
        />
      </div>
    </div>
    <div class="cv-form__label">
      Sections
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
@import "../assets/css/templates/main/variables";

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
  justify-content: center;
  gap: 15px;

  label {
    display: flex;
    flex-direction: column;
  }
}

.cv-form__label {
  align-items: center;
  transform: none;
  font-family: $mainFont;
  font-weight: bold;
  color: lighten($colorMainLight, 10%);
  padding-bottom: 10px;
  position: relative;

  &:after {
    content: '';
    display: block;
    max-width: 400px;
    width: 90%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: lighten($colorMainLight, 10%);
    border-radius: 5px;
  }
}
.cv-form-header-fields {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>