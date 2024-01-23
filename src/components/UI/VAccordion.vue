<script setup>
import {ref} from "vue";

const isShow = ref(false)
</script>

<template>
  <div class="accordion">
    <div class="accordion-row">
      <div
          class="title-wrapper"
          :class="isShow && 'open'"
          @click="isShow = !isShow"
      >
        <slot name="title"/>
      </div>
      <div class="button-wrapper">
        <slot name="button"/>
      </div>
    </div>
    <div
        v-if="isShow"
        class="content"
    >
      <slot name="content"/>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";
@import "../../assets/css/media";

.accordion {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.accordion-row {
  display: flex;
  flex: 1;
}

.title-wrapper {
  padding: 5px 15px 5px 0;
  cursor: pointer;
  position: relative;
  transition: .2s ease;
  border-radius: 5px;
  flex: 1;

  @media #{$mouse} {
    &:hover {
      background: lighten($colorMainLight, 25%);
    }
  }

  &:after {
    color: $colorMainLight;
    transition: .2s ease;
    content: '▼';
    position: absolute;
    right: 5px;
    top: 5px;

  }

  &.open {
    &:after {
      transform: rotateX(180deg);
    }
  }
}

.button-wrapper {
  flex: 0;
  display: flex;
  justify-content: flex-end;
}
</style>