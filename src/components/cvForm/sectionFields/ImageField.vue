<script setup>
import FilePicker from "@/components/UI/FilePicker.vue";
import TextField from "@/components/UI/TextField.vue";

defineProps({
  image: String,
  name: String
})

const emit = defineEmits(['onInput'])
</script>

<template>
  <div class="image-field">
    <TextField
        class="image-field__name"
        :value="name"
    />
    <FilePicker
        @on-input="e => emit('onInput', e)"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/templates/main/variables";

.image-field {
  display: flex;
  justify-content: space-between;
  background: #c0c9d5;
  padding: 10px 15px;
  border-radius: 5px;
}

.image-field__name {
  flex: 1;
  font-family: $mainFont;
  font-size: 14px;
  font-weight: bold;
  color: $fontColor;
}
</style>