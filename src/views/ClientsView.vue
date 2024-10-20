<script>
import TableCustomers from "@/components/TableCustomers.vue";
import TheModal from "@/components/TheModal.vue";

export default {
  components: { TableCustomers, TheModal },
  methods: {
    openModal() {
      console.log("openModal was called");
      this.$refs.modal.openModal();
    },
    closeModal() {
      console.log("closeModal was called");
      this.$refs.modal.closeModal();
    },
  },
};
</script>
<template>
  <main>
    <div class="header">
      <h2 class="title">Clientes</h2>
      <button @click="openModal">Adicionar cliente</button>
    </div>
    <TableCustomers />
    <TheModal ref="modal">
      <template v-slot:header> Custom Header </template>
      <template v-slot:body> This is a custom body content. </template>
      <!-- <template v-slot:footer>
        <button @click="closeModal">Close</button>
      </template> -->
    </TheModal>
  </main>
</template>
<style lang="scss" scoped>
main {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: calc(var(--section-gap) / 4);
  .title {
    margin-bottom: calc(var(--section-gap) / 4);
  }
}
</style>
