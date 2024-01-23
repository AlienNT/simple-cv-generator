<script setup>
import VLabel from "@/components/UI/VLabel.vue";

defineProps({
  count: {
    type: Number,
    default: null
  },
  title: {
    type: String,
    default: 'section content'
  },
  showCount: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="cv-form-section__fields-title">
    <VLabel
        :label="title"
        class="section-content-title focused"
    />
    <div
        v-if="showCount"
        class="section-content-counter"
    >
      {{ count }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.cv-form-section__fields-title {
  display: flex;
  justify-content: space-between;

}

.section-content-title {
  font-family: $secondFont;
  font-weight: bold;
  color: $colorMainLight;
  flex: none;

  &:first-letter {
    text-transform: uppercase;
  }
}

</style>