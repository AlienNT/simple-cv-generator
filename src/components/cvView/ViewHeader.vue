<script setup>
import {useState} from "@/composables/useState.js";
import ViewImage from "@/components/cvView/ViewImage.vue";

const {cvTitle, cvDescription, image} = useState()
</script>

<template>
  <header class="view-header">
    <div
        v-if="image"
        class="view-header__col"
    >
      <div class="view-header__image"
      >
        <ViewImage
            :name="image?.name"
            :file="image?.file"
        />
      </div>
    </div>
    <div class="view-header__col">
      <div class="view-header__title">
        {{ cvTitle }}
      </div>
      <div class="view-header__description">
        {{ cvDescription }}
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.view-header {
  display: flex;
}

.view-header__col {
  &:nth-of-type(1) {
    flex: 0 1 280px;
  }

  &:nth-of-type(2) {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>