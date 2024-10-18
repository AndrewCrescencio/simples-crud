<script>
import FormClient from "@/components/FormClient.vue";
import FormDigitalCertificates from "@/components/FormDigitalCertificates.vue";

export default {
  components: { FormClient, FormDigitalCertificates },
};
</script>
<template>
  <main>
    <section>
      <h1 class="title">Cadastrar Cliente</h1>
      <form-client class="form" />
    </section>
    <section>
      <h1 class="title">Cadastrar Certificado</h1>
      <form-digital-certificates />
    </section>
  </main>
</template>
<style lang="scss" scoped>
main {
  max-width: 614px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: calc(var(--section-gap) / 4);
}

section {
  margin-bottom: calc(var(--section-gap) / 3);
}

.title {
  margin-bottom: 24px;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -1%;
  font-weight: 600;
  color: var(--color-heading);
}
</style>
