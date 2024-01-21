<script setup>
import TextField from "@/components/UI/TextField.vue";
import VButton from "@/components/UI/VButton.vue";

import {useDialog} from "@/composables/useDialog.js";
import {onBeforeUnmount, onMounted, ref} from "vue";

defineProps({
  title: String
})

const emit = defineEmits(['ok', 'cancel'])

const {isShow} = useDialog()

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})

function onKeyDown(e) {
  return e.code === 'Escape' && emit('cancel')
}
</script>

<template>
  <transition
      name="fade"
      mode="in-out"
      appear

  >
    <div
        class="dialog-popup"
        v-if="isShow"
        @click.self="emit('cancel')"
    >
      <div class="dialog-popup-form">
        <TextField
            class="dialog-popup__title"
            :value="title"
        />
        <div class="buttons-wrapper">
          <VButton
              label="Ok"
              class="button--ok"
              @on-click="emit('ok')"
          />
          <VButton
              label="Cancel"
              class="button--cancel"
              @on-click="$emit('cancel')"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import "../../assets/css/templates/main/variables";

.dialog-popup {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 2;
  display: flex;
  padding: 15px;
  transition: .2s ease;
  cursor: pointer;
}

.dialog-popup-form {
  cursor: default;
  background: white;
  border-radius: 5px;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.dialog-popup__title {
  font-family: $mainFont;
}

.buttons-wrapper {
  display: flex;
  gap: 15px;
}

.button--cancel,
.button--ok {
  transition: .2s ease;

  &:hover {
    box-shadow: 2px 2px 4px 0 $colorMainLight;
  }
}

.button--ok {
  background: $colorMainLight;

  &:hover {
    background: darken($colorMainLight, 10%);
  }
}

.button--cancel {
  background: white;
  color: $colorMainLight;
  border: 1px solid $colorMainLight;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>