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
    color: var(--darker)
  }
}
.link {
  color: var(--featured);
  text-decoration: none;
  &:hover {
    color: var(--featured-dark);
    text-decoration: underline
  }
}
</style>

<script>
export default {
  name: 'Register',
  data: () => {
    return {
      loading: false,
      email: '',
      password: '',
      registrationPassword: ''
    }
  },
  methods: {
    async register () {
      this.loading = true
      const { email, password, registrationPassword } = this

      try {
        if (password === registrationPassword) {
          const res = await this.$firebase.auth()
            .createUserWithEmailAndPassword(email, password)

          window.uid = res.user.uid

          this.$router.push({ name: 'home' })
        } else {
          let message = 'Senhas diferentes, por favor, tente de novo.'
          this.$root.$emit('Notification::show', {
            message,
            type: 'danger'
          })
          this.password = '' // Limpa o input de senha
          this.registrationPassword = '' // Limpa o input de senha
        }
      } catch (err) {
        let message = ''

        switch (err.code) {
          case 'auth/email-already-in-use':
            message = 'O endereço de e-mail já está em uso por outra conta.'
            this.email = '' // Limpa o input de E-mail
            break
          case 'auth/wrong-password':
            message = 'Senha inválida'
            break
          default:
            message = 'Não foi possível criar a conta, tente novamente'
        }

        this.$root.$emit('Notification::show', {
          message,
          type: 'danger'
        })
      }

      this.loading = false
    }
  }
}
</script>
