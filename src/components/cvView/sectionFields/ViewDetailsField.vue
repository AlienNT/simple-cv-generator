<script setup>
import {computed, defineAsyncComponent, watch} from "vue";
import {checkFieldType} from "@/helpers/fields.js";
import TextField from "@/components/UI/TextField.vue";

const props = defineProps({
  title: String,
  value: String
})

const type = computed(() => {
  if (!props.value) return checkFieldType.TEXT.type

  if (props.value.match(checkFieldType.LINK.regex)) return checkFieldType.LINK.type
  if (props.value.match(checkFieldType.EMAIL.regex)) return checkFieldType.EMAIL.type
  if (props.value.match(checkFieldType.PHONE.regex)) return checkFieldType.PHONE.type

  return checkFieldType.TEXT.type
})

const fieldComponent = computed(() => {
  switch (type.value) {
    case checkFieldType.TEXT.type:
      return defineAsyncComponent(() => import('@/components/UI/TextField.vue'))

    case checkFieldType.LINK.type:
      return defineAsyncComponent(() => import('@/components/UI/LinkField.vue'))

    case checkFieldType.EMAIL.type:
      return defineAsyncComponent(() => import('@/components/UI/EmailField.vue'))

    case checkFieldType.PHONE.type:
      return defineAsyncComponent(() => import('@/components/UI/PhoneField.vue'))

    default:
      return defineAsyncComponent(() => import('@/components/UI/TextField.vue'))
  }
})
</script>

<template>
  <div class="view-details-field">
    <div class="view-details-field__title">
      <TextField
          :value="title"
      />
    </div>
    <div class="view-details-field__value">
      <component
          :is="fieldComponent"
          :value="value"
      />
    </div>
  </div>
</template>