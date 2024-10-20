<script>
import { ref, push } from "firebase/database";
import firebaseService from "@/firebase";

export default {
  name: "FormClient",
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        mobile: "",
      },
      formMessage: null,
    };
  },
  methods: {
    async createClient() {
      const form = this.$el.querySelector("form");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const db = firebaseService.getDatabase();
      const clientsRef = ref(db, "clients");
      try {
        await push(clientsRef, this.form);
        this.formMessage = "Cliente cadastrado com sucesso!";
        this.clearForm();
        this.$emit("submit");
      } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
        this.formMessage =
          error.message ?? "Erro ao cadastrar cliente. Tente novamente.";
      }
    },
    clearForm() {
      this.form.first_name = "";
      this.form.last_name = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.mobile = "";
    },
  },
};
</script>
<template>
  <div>
    <form class="form" @submit.prevent="createClient" novalidate>
      <div class="form__control">
        <label for="first_name">Nome:</label>
        <input
          class="form__input"
          type="text"
          v-model.trim="form.first_name"
          id="first_name"
          required
          minlength="2"
          maxlength="64"
        />
      </div>

      <div class="form__control">
        <label for="last_name">Sobrenome:</label>
        <input
          class="form__input"
          type="text"
          v-model="form.last_name"
          id="last_name"
          required
          minlength="2"
          maxlength="150"
        />
      </div>

      <div class="form__control">
        <label for="email">Email:</label>
        <input
          class="form__input"
          type="email"
          v-model.trim="form.email"
          id="email"
          required
          maxlength="320"
        />
      </div>

      <div class="form__control">
        <label for="phone">Telefone Fixo:</label>
        <input
          class="form__input"
          type="tel"
          v-model.trim="form.phone"
          id="phone"
          required
          maxlength="10"
          pattern="[0-9]{10}"
          title="Digite um número de telefone válido com 10 dígitos"
        />
      </div>

      <div class="form__control">
        <label for="mobile">Celular:</label>
        <input
          class="form__input"
          type="tel"
          v-model.trim="form.mobile"
          id="mobile"
          required
          maxlength="11"
          pattern="[0-9]{11}"
          title="Digite um número de celular válido com 11 dígitos"
        />
      </div>

      <button class="form__button" type="submit">Cadastrar cliente</button>
    </form>

    <!-- TODO: mensagem de erro ou sucesso -->
    <div v-if="formMessage">{{ formMessage }}</div>
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
