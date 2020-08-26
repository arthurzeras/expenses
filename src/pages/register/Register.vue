<template>
  <form @submit.prevent="register" class="form-login">
    <div class="card">
      <div class="card-header text-center">
        <h1 class="mb-0">Expenses</h1>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            required
            type="email"
            v-model="email"
            placeholder="Seu endereço de e-mail"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            required
            type="password"
            v-model="password"
            placeholder="Sua senha"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            required
            type="password"
            v-model="registrationPassword"
            placeholder="Repita sua senha"
            class="form-control"
          />
        </div>
        <button class="btn btn-primary w-100" :disabled="loading">
          <template v-if="loading">
            Registrando...
            <i class="fa fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Registrar
            <i class="fas fa-user-plus"></i>
          </template>
        </button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 18pt;
  }
  .card {
    width: 30%;
    color: var(--darker);
  }
}
.link {
  color: var(--featured);
  text-decoration: none;
  &:hover {
    color: var(--featured-dark);
    text-decoration: underline;
  }
}
</style>

<script>
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import firebase from "firebase";

export default {
  name: "Register",
  created() {
    firebase
      .auth()
      .onAuthStateChanged((user) => (this.authenticatedUser = user));
  },
  asyncData() {
    return {
      email: "",
      password: "",
      registrationPassword: "",
    };
  },
  methods: {
    register() {
      if (this.password === this.registrationPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
      } else {
        // display error message
      }
    },
  },
};
</script>
