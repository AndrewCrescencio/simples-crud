<script>
import TheModal from "@/components/TheModal.vue";
import FormClient from "@/components/FormClient.vue";

export default {
  components: { TheModal, FormClient },
  props: {
    client: {
      type: Object,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modalTitle: this.isEdit ? "Editar Cliente" : "Cadastrar Cliente",
    };
  },
  watch: {
    isEdit(newVal) {
      this.modalTitle = newVal ? "Editar Cliente" : "Cadastrar Cliente";
    },
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    },
    closeModal() {
      this.$refs.modal.closeModal();
    },
    onSubmit() {
      this.closeModal();
      this.$emit("submit");
    },
  },
};
</script>

<template>
  <the-modal ref="modal" :title="modalTitle">
    <template v-slot:body>
      <form-client :client="client" :isEdit="isEdit" @submit="onSubmit" />
    </template>
  </the-modal>
</template>

<style lang="scss" scoped></style>
