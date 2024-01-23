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
      <div class="image-field__name-wrapper">
        <TextField
            class="image-field__name"
            :value="name"
        />
      </div>
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

.image-field__name-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  flex: 0 1 auto;
  overflow: hidden;
}

.image-field__name {
  font-family: $mainFont;
  font-size: 14px;
  font-weight: bold;
  color: $fontColor;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

}
</style>