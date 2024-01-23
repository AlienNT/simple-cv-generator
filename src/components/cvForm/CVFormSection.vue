<script setup>
import {computed, defineAsyncComponent} from "vue";
import sectionTypes from "@/helpers/sectionTypes.js";
import {fieldTypes, sectionFields} from "@/helpers/fields.js";
import {useState} from "@/composables/useState.js";
import {useDialog} from "@/composables/useDialog.js";

import VAccordion from "@/components/UI/VAccordion.vue";
import VField from "@/components/UI/VField.vue";
import CVSectionField from "@/components/cvForm/sectionFields/CVSectionField.vue";
import ShowButton from "@/components/UI/buttons/ShowButton.vue";
import AddButton from "@/components/UI/buttons/AddButton.vue";
import CVFormSectionHeader from "@/components/cvForm/CVFormSectionHeader.vue";
import CVFormSectionFields from "@/components/cvForm/CVFormSectionFields.vue";
import CVFormSectionTitle from "@/components/cvForm/CVFormSectionTitle.vue";

const props = defineProps({
  section: {
    type: Object,
  }
})

const {addSectionItem, removeSectionItem} = useState()
const {createDialog} = useDialog()

const sectionField = computed(() => {
  switch (props.section?.name) {
    case sectionTypes.PROFILE:
      return null

    case sectionTypes.DETAILS:
      return {
        component: defineAsyncComponent(() => import('@/components/cvForm/sectionFields/DetailsField.vue')),
        field: sectionFields.DETAILS
      }

    case sectionTypes.EDUCATION:
      return {
        component: defineAsyncComponent(() => import('@/components/cvForm/sectionFields/EducationField.vue')),
        field: sectionFields.EDUCATION
      }

    case sectionTypes.SKILLS:
      return {
        component: defineAsyncComponent(() => import('@/components/cvForm/sectionFields/SkillField.vue')),
        field: sectionFields.SKILLS
      }

    case sectionTypes.EMPLOYMENT:
      return {
        component: defineAsyncComponent(() => import('@/components/cvForm/sectionFields/EmploymentField.vue')),
        field: sectionFields.EMPLOYMENT
      }
    default:
      return {
        component: null,
        field: null
      }
  }
})

const sectionTitle = computed(() => {
  return props.section[sectionFields.PROFILE.TITLE.name] || props.section?.name
})

function getSectionFields(fields) {
  const res = {}
  Object.keys(fields).map(key => (res[fields[key].name] = null))

  return res
}

function addNew() {
  if (!sectionField.value) return

  addSectionItem({
    sectionId: props?.section?._id,
    value: getSectionFields(sectionField.value?.field)
  })
}

async function onRemove(id) {
  if (!id) return

  const isRemove = await createDialog({title: 'Delete item?'})

  if (!isRemove) return

  removeSectionItem({
    sectionId: props?.section?._id,
    itemId: id
  })
}

</script>

<template>
  <div class="cv-form-section">
    <VAccordion>
      <template v-slot:title>
        <CVFormSectionTitle
            :title="section?.title"
            :name="section?.name"
        />
      </template>
      <template v-slot:content>
        <CVFormSectionHeader
            :title="sectionTitle"
            :section="section"
        />
        <CVFormSectionFields
            :field="sectionField"
            :field-component="sectionField?.component"
            :fields="section?.items"
            :section-name="section?.name"
            @on-add="addNew"
            @on-remove="onRemove"
        />
      </template>
      <template v-slot:button>
        <ShowButton
            :is-show="section?.isShow"
            @on-click="section.isShow = !section.isShow"
        />
      </template>
    </VAccordion>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.cv-form-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #c0c9d5;
  padding: 15px;
  border-radius: 5px;
}

.show-button {
  transition: .2s ease;

  &.hide {
    opacity: .6;
  }
}
</style>