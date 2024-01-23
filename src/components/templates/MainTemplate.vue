<script setup>
import {useState} from "@/composables/useState.js";
import {sectionNames} from "@/helpers/fields.js";

import ViewHeader from "@/components/cvView/ViewHeader.vue";

import {computed, defineAsyncComponent} from "vue";

const ViewDetailsSectionAsync = computed(() => defineAsyncComponent(() =>
    import('@/components/cvView/sections/ViewDetailsSection.vue'))
)
const ViewSkillsSectionAsync = computed(() => defineAsyncComponent(() =>
    import('@/components/cvView/sections/ViewSkillsSection.vue'))
)
const ViewProfileSectionAsync = computed(() => defineAsyncComponent(() =>
    import('@/components/cvView/sections/ViewProfileSection.vue'))
)
const ViewEmploymentSectionAsync = computed(() => defineAsyncComponent(() =>
    import('@/components/cvView/sections/ViewEmploymentSection.vue'))
)
const ViewEducationSectionAsync = computed(() => defineAsyncComponent((() =>
    import('@/components/cvView/sections/ViewEducationSection.vue')))
)

const {isShowSection} = useState()


</script>

<template>
  <div class="viewport">
    <div class="view-preview">
      <ViewHeader/>
      <div class="view-main">
        <div class="view-left">
          <ul class="view-list">
            <li v-if="isShowSection(sectionNames.DETAILS).value">
              <ViewDetailsSectionAsync/>
            </li>
            <li v-if="isShowSection(sectionNames.SKILLS).value">
              <ViewSkillsSectionAsync/>
            </li>
          </ul>
        </div>
        <div class="view-right">
          <ul class="view-list">
            <li v-if="isShowSection(sectionNames.PROFILE).value">
              <ViewProfileSectionAsync/>
            </li>
            <li v-if="isShowSection(sectionNames.EMPLOYMENT).value">
              <ViewEmploymentSectionAsync/>
            </li>
            <li v-if="isShowSection(sectionNames.EDUCATION).value">
              <ViewEducationSectionAsync/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/css/templates/main/index";

.viewport {
  padding: 0.625em;
  flex: 1;
  display: flex;
}

.view-preview {
  position: relative;
  flex: 1;
  height: 100%;

  &:before {
    content: '';
    display: block;
    width: 20%;
    height: 20%;
    position: absolute;
  }

  &:before {
    border-top: 2px solid #efefef;
    border-right: 2px solid #efefef;
    top: 0.625em;
    right: 0.625em;
  }
}
</style>