<script>
export default {
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
      <div class="modal-header">
        <slot name="header"> default header </slot>
        <button class="modal-close-button" @click="closeModal">X</button>
      </div>

      <div class="modal-body">
        <slot name="body"> default body </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <button class="modal-default-button" @click="closeModal">OK</button>
        </slot>
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
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 300px;
  max-width: 600px;
  width: 100%;
}
</style>
