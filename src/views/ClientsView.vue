<script>
import { ref as dbRef, get, remove } from "firebase/database";
import firebaseService from "@/firebase";
import TableCustomers from "@/components/TableCustomers.vue";
import TheModal from "@/components/TheModal.vue";
import FormClient from "@/components/FormClient.vue";

export default {
  components: { TableCustomers, TheModal, FormClient },
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.fetchClients();
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    },
    closeModal() {
      this.$refs.modal.closeModal();
    },
    async fetchClients() {
      const db = firebaseService.getDatabase();
      const clientsRef = dbRef(db, "clients");

      try {
        const snapshot = await get(clientsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.tableData = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        } else {
          console.error("Nenhum cliente encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar os clientes:", error);
      }
    },
    async onDelete(client) {
      const db = firebaseService.getDatabase();
      const clientRef = dbRef(db, `clients/${client.id}`);

      try {
        await remove(clientRef);
        this.tableData = this.tableData.filter((c) => c.id !== client.id);
      } catch (error) {
        console.error("Erro ao deletar o cliente:", error);
      }
    },
    onFormClientSubmit() {
      this.closeModal();
      this.fetchClients();
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
    <TableCustomers :tableData="tableData" @deleteClient="onDelete" />
    <TheModal ref="modal" title="Cadastrar cliente">
      <template v-slot:body>
        <form-client @submit="onFormClientSubmit" />
      </template>
    </TheModal>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 100%;
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
