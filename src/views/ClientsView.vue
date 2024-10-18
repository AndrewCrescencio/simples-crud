<script>
import TableCustomers from "@/components/TableCustomers.vue";

export default {
  components: { TableCustomers },
};
</script>
<template>
  <main>
    <h2 class="title">Clientes</h2>
    <TableCustomers />
  </main>
</template>
<style lang="scss" scoped>
main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: calc(var(--section-gap) / 4);
  .title {
    margin-bottom: calc(var(--section-gap) / 4);
  }
}
</style>
