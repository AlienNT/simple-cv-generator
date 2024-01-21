<script setup>
import {computed} from "vue";
import TextField from "@/components/UI/TextField.vue";

const props = defineProps({
  value: String
})

const textToList = computed(() => {
  return props.value ? props.value.trim().split('\n') : props.value
})
</script>

<template>
  <div class="text-to-list-field">
    <ul class="text-to-list-field__list">
      <li v-for="item in textToList">
        <TextField
            :value="item"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.text-to-list-field__list {
  display: flex;
  flex-direction: column;

  li {
    display: flex;
  }
}
</style>