<script>
import TheCard from "@/components/TheCard.vue";

export default {
  components: { TheCard },
};
</script>

<template>
  <section>
    <div class="container">
      <the-card title="Clientes" class="card" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: calc(var(--section-gap) / 4);
}
.card {
  margin: 0 auto;
}
</style>
