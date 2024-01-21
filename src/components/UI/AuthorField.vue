<template>
  <div class="author-field">
    <span>
      Created by
    </span>
    <a
        href="https://webfolio-develop.onrender.com"
        target="_blank"
        class="link"
    >
      AlienNT
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.author-field {
  font-family: $mainFont;
  color: $colorMainLight;
  font-size: 12px;
}

.link {
  font-weight: bold;
  color: lighten($colorMainLight, 20%);
  letter-spacing: 1px;
  text-decoration: none;
}
</style>