<script setup>
import sectionTypes from "@/helpers/sectionTypes.js";
import CVSectionField from "@/components/cvForm/sectionFields/CVSectionField.vue";
import AddButton from "@/components/UI/buttons/AddButton.vue";
import CVFormSectionFieldsTitle from "@/components/cvForm/CVFormSectionFieldsTitle.vue";

defineProps({
  fieldComponent: {
    type: Object
  },
  fields: {
    type: Array
  },
  sectionName: {
    type: String
  }
})

defineEmits(['onRemove', 'onAdd'])
</script>

<template>
  <div
      v-if="sectionName !== sectionTypes.PROFILE"
      class="cv-form-section__items"
  >
    <CVFormSectionFieldsTitle/>
    <!--    <ul-->
    <!--        v-if="fields?.length"-->
    <!--        class="cv-form-section__items-list"-->
    <!--    >-->
    <transition-group
        v-if="fields?.length"
        tag="ul"
        class="cv-form-section__items-list"
        name="list"
        appear
    >
      <li
          v-for="(item, index) in fields"
          class="cv-form-section__items-list-li"
          :key="item?._id || index"
      >
        <CVSectionField
            :component="fieldComponent"
            :section-name="sectionName"
            :field="item"
            @on-remove="e => $emit('onRemove', e)"
        />
      </li>
    </transition-group>
    <!--    </ul>-->
    <AddButton
        v-if="sectionName !== sectionTypes.PROFILE"
        class="add-button"
        @on-click="$emit('onAdd')"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.cv-form-section__items {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid $colorMainLight;
  padding: 15px;
  background: lighten($colorMainLight, 25%);
  position: relative;
}

.cv-form-section__items-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
  list-style: none;

}

.cv-form-section__items-list-li {
  border-radius: 5px;
  padding: 10px 15px;
  background: lighten($colorMainLight, 15%);
  border-bottom: 4px solid darken($colorMainLight, 15%);
}

.profile-fields {
  display: flex;
  flex-direction: column;
}

</style>