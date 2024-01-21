<script setup>
import ViewSectionTitle from "@/components/cvView/ViewSectionTitle.vue";

defineProps({
  title: String
})
</script>

<template>
<section class="view-section-template">
  <ViewSectionTitle
      :title="title"
  />
  <slot name="content"/>
</section>
</template>