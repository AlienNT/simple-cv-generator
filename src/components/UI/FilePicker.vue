<script setup>
import {fileToBase} from "@/helpers/index.js";

import UploadButton from "@/components/UI/buttons/UploadButton.vue";

const emit = defineEmits(['onInput'])

function onClick() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/jpeg, image/jpg, image/png'

  input.click()

  input.oninput = async e => {
    const file = e.target.files[0]
    if (!file) return

    const fileString = await fileToBase(file)

    emit('onInput', {
      name: file?.name,
      size: file?.size,
      file: fileString
    })
  }
}

</script>

<template>
  <UploadButton
      class="file-picker-button"
      type="button"
      @click.stop="onClick"
  >
    upload
  </UploadButton>
</template>