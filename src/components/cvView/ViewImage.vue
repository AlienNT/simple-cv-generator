<script setup>
defineProps({
  file: {
    type: String
  },
  name: {
    type: String
  }
})
</script>

<template>
  <div class="view-image-wrapper">
    <div class="view-image">
      <img
          :src="file"
          :alt="name"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-image-wrapper {
  padding-right: 10px;
  //max-height: 200px;
  max-width: 200px;
  display: flex;
}
.view-image {
  display: flex;
  padding: 10px;
  position: relative;
  width: 100%;
  height: 100%;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 50%;
  }

  &:before {
    top: 0;
    left: 0;
    border-top: 2px solid #efefef;
    border-left: 2px solid #efefef;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #efefef;
    border-right: 2px solid #efefef;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>