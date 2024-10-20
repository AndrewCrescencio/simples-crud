<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDelete(client) {
      this.$emit("deleteClient", client);
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
            <button @click="deleteClient(client)">Deletar</button>
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
