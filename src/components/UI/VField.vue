<script setup>
import {computed, defineAsyncComponent, ref} from "vue";
import {fieldTypes} from "@/helpers/fields.js";

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  fieldType: {
    type: String,
    default: 'input'
  },
  value: {
    type: [String, Number]
  },
  label: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  useLabel: {
    type: Boolean,
    default: false
  },
  usePlaceholder: {
    type: Boolean,
    default: true
  }
})

defineEmits(['onInput', 'onChange'])

const Component = computed(() => {
  switch (props.fieldType) {
    case fieldTypes.INPUT:
      return defineAsyncComponent(() => import('@/components/UI/VInput.vue'))

    case fieldTypes.TEXTAREA:
      return defineAsyncComponent(() => import('@/components/UI/VTextarea.vue'))

    case fieldTypes.DATE:
      return defineAsyncComponent(() => import('@/components/UI/DatePicker.vue'))

    default:
      return defineAsyncComponent(() => import('@/components/UI/VInput.vue'))
  }
})

const isFocused = ref(false)
</script>

<template>
  <div class="v-field">
    <div class="field-wrapper">
      <div
          v-if="useLabel && label"
          :class="(isFocused || value) && 'focused'"
          class="label-item"
      >
        {{ label }}
      </div>
      <component
          :is="Component"
          :type="type"
          :value="value"
          :placeholder="placeholder && !useLabel && usePlaceholder || null"
          :useLabel="useLabel"
          :usePlaceholder="usePlaceholder"
          @focusin="isFocused = true"
          @focusout="isFocused = false"
          @on-input="e => $emit('onInput', e)"
          @on-change="e => $emit('onChange', e)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.v-field {
  padding-top: 15px;
  padding-bottom: 5px;
}

.field-wrapper {
  position: relative;
}

.label-item {
  position: absolute;
  z-index: 2;
  flex: 1;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: darken($colorMainLight, 10%);
  background: white;
  transition: .2s ease;
  font-family: $secondFont;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;

  &:first-letter {
    text-transform: uppercase;
  }

  &.focused {
    top: 0;
    background: darken($colorMainLight, 10%);
    color: white;
  }
}
</style>