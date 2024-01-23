<script setup>
import FilePicker from "@/components/UI/FilePicker.vue";
import TextField from "@/components/UI/TextField.vue";
import VLabel from "@/components/UI/VLabel.vue";

defineProps({
  image: String,
  name: String,
  label: String,
})

const emit = defineEmits(['onInput'])
</script>

<template>
  <div class="image-field-wrapper">
    <div class="image-field">
      <VLabel
          :label="label"
          :class="name && 'focused'"
      />
      <TextField
          class="image-field__name"
          :value="name"
      />
      <FilePicker
          @on-input="e => emit('onInput', e)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";

.image-field-wrapper {
  padding-top: 15px;
}

.image-field {
  position: relative;
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.image-field__name {
  flex: 1;
  font-family: $mainFont;
  font-size: 14px;
  font-weight: bold;
  color: $fontColor;
  display: flex;
  align-items: center;
}
</style>