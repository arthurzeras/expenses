<template>
  <div class="home">
    <div class="row">
      <div class="col-6 home-box">
        <small>Você gastou</small>
        <div class="money">R$ 900.00</div>
        <small>
          em 89 compras
        </small>
      </div>
      <div class="col-6 home-box">
        <small>A média de gastos é de</small>
        <div class="money">R$ 91.91</div>
      </div>
      <div class="col-6 home-box">
        <small>O maior gasto foi de</small>
        <div class="money">98.99</div>
        <small>
          No dia 12/02/2019
        </small>
      </div>
      <div class="col-6 home-box">
        <small>O menor gasto foi de</small>
        <div class="money">1.44</div>
        <small>
          No dia 10/01/2019
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    expenses: []
  }),
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const ref = this.$firebase.database().ref(`/${window.uid}`)

      ref.on('value', data => {
        const values = data.val()
        this.expenses = Object.keys(values).map(i => values[i])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 15px;
  .home-box {
    width: 100%;
    display: flex;
    font-size: 30pt;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(50vh - 15px);
    border: 1px solid var(--dark-medium);
    small {
      font-size: 1.3rem;
    }
    .money {
      color: var(--featured);
    }
    &:nth-child(2), &:nth-child(4) {
      border-left: none;
    }
    &:nth-child(3), &:nth-child(4) {
      border-top: none;
    }
  }
}
</style>
