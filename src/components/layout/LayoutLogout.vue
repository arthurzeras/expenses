<template>
  <button class="btn btn-logout" @click="logout()">
    <i class="fa fa-power-off"></i>
    Sair
  </button>
</template>

<script>
export default {
  methods: {
    async logout () {
      this.$root.$emit('Spinner::show')

      await this.$firebase.auth().signOut()

      this.$router.push({ name: 'login' })

      this.$root.$emit('Spinner::hide')
    }
  }
}
</script>

<style scoped lang="scss">
.btn-logout {
  width: 100%;
  cursor: pointer;
  color: var(--white);
  &:hover {
    color: var(--featured);
  }
}
</style>
