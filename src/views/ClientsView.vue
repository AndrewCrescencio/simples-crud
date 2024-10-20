<script>
import { ref as dbRef, get, remove } from "firebase/database";
import firebaseService from "@/firebase";
import TableCustomers from "@/components/TableCustomers.vue";
import ClientModal from "@/components/ClientModal.vue";

export default {
  components: { TableCustomers, ClientModal },
  data() {
    return {
      tableData: [],
      selectedClient: null,
      isEdit: false,
    };
  },
  mounted() {
    this.fetchClients();
  },
  methods: {
    openModal() {
      this.$refs.clientModal.openModal();
    },
    closeModal() {
      this.$refs.clientModal.closeModal();
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
    onEdit(client) {
      this.selectedClient = client;
      this.isEdit = true;
      this.$nextTick(() => {
        this.openModal();
      });
    },
    onAddClient() {
      console.log("onAddClient");
      this.selectedClient = null;
      this.isEdit = false;
      this.openModal();
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
      <button @click="onAddClient">Adicionar cliente</button>
    </div>
    <TableCustomers
      v-if="tableData.length"
      :tableData="tableData"
      @deleteClient="onDelete"
      @editClient="onEdit"
    />
    <button v-else @click="onAddClient" class="button--no-clients">
      Sem clientes cadastrados, gostaria de cadastro um novo cliente?
    </button>
    <client-modal
      ref="clientModal"
      :client="selectedClient"
      :isEdit="isEdit"
      @submit="onFormClientSubmit"
    />
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

.button--no-clients {
  cursor: pointer;
}
</style>
