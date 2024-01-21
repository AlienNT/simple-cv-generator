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
  console.log('isRemove', isRemove)

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
        <div class="cv-form-section__title">
          {{ section?.title || section?.name }}
        </div>
      </template>
      <template v-slot:content>
        <div
            v-if="section?.name === sectionTypes.PROFILE"
            class="profile-fields"
        >
          <VField
              :field-type="fieldTypes.INPUT"
              :value="sectionTitle"
              :label="sectionTitle"
              use-label
              @on-input="e => section[sectionFields.PROFILE.TITLE.name] = e"
          />
          <VField
              :field-type="fieldTypes.INPUT"
              :value="sectionFields.PROFILE.DESCRIPTION.name"
              :label="sectionFields.PROFILE.DESCRIPTION.name"
              use-label
              @on-input="e => section[sectionFields.PROFILE.DESCRIPTION.name] = e"
          />
        </div>
        <div
            class="cv-form-section__items"
            v-else
        >
          <ul class="cv-form-section__items-list">
            <li v-for="item in section?.items">
              <CVSectionField
                  :component="sectionField.component"
                  :field="item"
                  @on-remove="onRemove"
              />
            </li>
          </ul>
          <div class="add-button">
            <AddButton
                @on-click="addNew"
            />
          </div>
        </div>
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

.cv-form-section__items {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cv-form-section__items-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    border-radius: 5px;
    padding: 10px 15px;
    background: lighten($colorMainLight, 15%);
    border-bottom: 4px solid darken($colorMainLight, 15%);
  }
}

.profile-fields {
  display: flex;
  flex-direction: column;
}

.cv-form-section__title {
  font-family: monospace;
  color: #435f84;
  font-weight: bold;
  font-size: 16px;

  &:first-letter {
    text-transform: uppercase;
  }
}

.show-button {
  transition: .2s ease;

  &.hide {
    opacity: .6;
  }
}
</style>