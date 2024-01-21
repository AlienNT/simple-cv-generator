<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

defineProps({
  value: {
    type: String
  },
  label: {
    type: String,
    default: 'Input'
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

defineEmits(['onInput'])

const target = ref(null)

onMounted(() => {
  autosize(target.value)
  setListener(target.value)
})
onBeforeUnmount(() => {
  removeListener(target.value)
})

function autosize(target) {
  if (!target) return
  const txHeight = 16;

  if (!target?.value) {
    return target?.setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
  }

  target?.setAttribute("style", "height:" + (target?.scrollHeight) + "px;overflow-y:hidden;");
}

function setListener(target) {
  target.addEventListener("input", OnInput);
}

function removeListener(target) {
  target.removeEventListener("input", OnInput);
}

function OnInput(e) {
  e.target.style.height = 'auto';
  e.target.style.height = (e.target.scrollHeight) + "px";
}

</script>

<template>
  <label class="label">
    <textarea
        class="textarea"
        ref="target"
        :placeholder="placeholder"
        :value="value"
        @input="e => $emit('onInput', e.target.value)"
    />
  </label>
</template>