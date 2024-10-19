<script>
import { getDatabase, ref as dbRef, get, remove } from "firebase/database";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.fetchClients();
  },
  methods: {
    async fetchClients() {
      const db = getDatabase();
      const clientsRef = dbRef(db, "clients");

      try {
        const snapshot = await get(clientsRef);
        if (snapshot.exists()) {
          console.log("valores", snapshot.val());
          const data = snapshot.val();
          this.tableData = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        } else {
          console.log("Nenhum cliente encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar os clientes:", error);
      }
    },
    async onDelete(client) {
      const db = getDatabase();
      const clientRef = dbRef(db, `clients/${client.id}`);

      try {
        await remove(clientRef);
        console.log(`Cliente com ID ${client.id} foi deletado com sucesso.`);
        this.tableData = this.tableData.filter((c) => c.id !== client.id);
      } catch (error) {
        console.error("Erro ao deletar o cliente:", error);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Celular</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in tableData" :key="index">
          <td>{{ client.first_name }} {{ client.last_name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.phone }}</td>
          <td>{{ client.mobile }}</td>
          <td>
            <button>Editar</button>
            <button @click="onDelete(client)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  overflow-x: auto;
}
table {
  width: 100%;
}

th,
td {
  border: 1px solid #e2e8f0;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
}
</style>
