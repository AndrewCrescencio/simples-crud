<script>
import { ref, push } from "firebase/database";
import firebaseService from "@/firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        expiry_date: "",
      },
      mensagem: "",
    };
  },
  methods: {
    async adicionarCertificado() {
      const clientId = "client1";
      const db = firebaseService.getDatabase();
      const certificatesRef = ref(db, `clients/${clientId}/certificates`);

      try {
        const response = await push(certificatesRef, {
          name: this.form.name,
          expiry_date: this.form.expiry_date,
          createdAt: {
            ".sv": "timestamp",
          },
        });
        console.log(response);
        this.mensagem = "Certificado adicionado com sucesso!";
        this.clearForm();
      } catch (error) {
        console.error("Erro ao adicionar certificado:", error);
        this.mensagem = "Erro ao adicionar certificado. Tente novamente.";
      }
    },
    clearForm() {
      this.form.name = "";
      this.form.expiry_date = "";
    },
  },
};
</script>
<template>
  <div>
    <form class="form" @submit.prevent="adicionarCertificado" novalidate>
      <div class="form__control">
        <label for="name">Nome do Certificado:</label>
        <input
          class="form__input"
          type="text"
          v-model="form.name"
          id="name"
          required
          minlength="2"
          maxlength="64"
        />
      </div>

      <div class="form__control">
        <label for="expiry_date">Data de Vencimento:</label>
        <input
          class="form__input"
          type="date"
          v-model="form.expiry_date"
          id="expiry_date"
          required
        />
      </div>

      <button class="form__button" type="submit">Adicionar Certificado</button>
    </form>

    <div v-if="mensagem">{{ mensagem }}</div>
  </div>
</template>
<style lang="scss" scoped>
.form {
  &__control {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;
  }

  &__input {
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #e2e8f0;
  }

  &__button {
    cursor: pointer;
    border: transparent;
    background-color: var(--vt-c-green);
    color: var(--vt-c-white-pure);
    border-radius: 4px;
    padding: 4px 8px;
  }
}
</style>
