<script>
import IconClose from "@/components/icons/IconClose.vue";

export default {
  components: { IconClose },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal();
    },
    closeModal() {
      this.$refs.modal.close();
    },
  },
};
</script>

<template>
  <transition name="modal">
    <dialog ref="modal" class="modal">
      <button class="modal__button modal__button--close" @click="closeModal()">
        <icon-close />
      </button>

      <slot name="header">
        <div class="modal__header">
          <p v-if="title" class="modal__title">{{ title }}</p>
        </div>
      </slot>

      <div class="modal__body">
        <slot name="body"></slot>
      </div>

      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </dialog>
  </transition>
</template>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: calc(100% - 32px);
  min-width: 300px;
  max-width: 600px;
  border: 1px solid var(--vt-c-divider);
  color: inherit;
  background-color: var(--color-background-soft);

  &__header {
    width: 100%;
    font-size: 20px;
    color: var(--color-heading);
    padding: 0 16px;
  }

  &__title {
    margin-top: 6px;
  }

  &__body {
    width: 100%;
    padding: 12px 16px;
  }

  &__footer {
    width: 100%;
    padding: 12px 16px;
  }

  &__button {
    z-index: 1;
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: grid;
    place-content: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    border: transparent;
    background-color: transparent;
    color: var(--color-heading);

    &--close {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
