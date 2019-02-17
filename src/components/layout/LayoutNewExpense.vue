<template>
  <div class="w-100 d-flex justify-content-center">
    <button
      @click="showModal = true"
      class="btn btn-lg btn-outline-primary w-75"
    >
      <i class="fa fa-plus"></i>
      Novo gasto
    </button>

    <form @submit.prevent="submit()">
      <div
        class="modal fade"
        :class="{show: showModal}"
        :style="{display: showModal ? 'block' : 'none'}"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Adicionar um novo gasto</h5>
              <button
                type="button"
                class="close"
                @click="closeModal()"
              >
                <span>×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="form-group col-8">
                  <label for="">Descrição:</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.description"
                  >
                </div>
                <div class="form-group col-4">
                  <label for="">Valor (R$):</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.value"
                  >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal()"
              >
                Fechar
              </button>
              <button class="btn btn-primary">
                Incluir novo gasto
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div
      :class="{show: showModal}"
      class="modal-backdrop fade"
      :style="{display: showModal ? 'block' : 'none'}"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
    form: {
      value: '',
      description: ''
    }
  }),
  methods: {
    submit () {
      this.$root.$emit('Spinner::show')
      const ref = this.$firebase.database().ref(window.uid)
      const id = ref.push().key

      const payload = {
        id,
        receipt: '',
        value: this.form.value,
        createdAt: new Date().getTime(),
        description: this.form.description
      }

      ref.child(id).set(payload, err => {
        this.$root.$emit('Spinner::hide')

        if (err) {
          console.error(err)
        } else {
          this.closeModal()
        }
      })
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.modal {
  color: var(--darker);
}
</style>
