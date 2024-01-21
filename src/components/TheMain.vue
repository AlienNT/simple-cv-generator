<script setup>

import CVForm from "./CVForm.vue";
import CVViewport from "./CVViewport.vue";

import {useHtmlToPdf} from "@/composables/useHtmlToPdf.js";
import {onMounted, ref} from "vue";
import {debounce} from "@/helpers/index.js";

import AuthorField from "@/components/UI/AuthorField.vue";
import SaveButton from "@/components/UI/buttons/SaveButton.vue";

const {convert, converted} = useHtmlToPdf()

const target = ref(null)

onMounted(() => {
  target.value = document.querySelector('.cv-viewport')
})

const preview = ref(null)

const getConverted = debounce(() => {
  preview.value = convert(target.value)
})

function onChange() {
  getConverted()
}

function save() {
  converted.value?.save()
}
</script>

<template>
  <main class="cv-main">
    <div class="cv-row">
      <div class="cv-col">
        <CVForm
            @on-change="onChange"
        />
      </div>
      <div class="cv-col">
        <CVViewport/>
        <div class="button-wrapper">
          <AuthorField/>
          <SaveButton
              @on-click="save"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/css/templates/main/variables";

.cv-main {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
}

.cv-row {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.cv-col {
  flex: 1 1 50%;
  max-height: 100vh;
  overflow-y: scroll;

  &:nth-of-type(1) {
    background: $colorMainDark;
    display: flex;
    padding-top: 15px;
    padding-bottom: 60px;
    flex-direction: column;
    flex: 1 1 360px;
  }

  &:nth-of-type(2) {
    flex: 1 1 600px;
    background: white;
    display: flex;
    flex-direction: column;
  }
}

.button-wrapper {
  position: sticky;
  bottom: 0;
  left: 0;
  background: $colorMainDark;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>