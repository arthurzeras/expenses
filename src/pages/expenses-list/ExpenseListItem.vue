<template>
  <div class="expense-list-item row">
    <div class="col-10">
      <div>{{ data.description }}</div>
      <small v-date-format="data.createdAt"/>
    </div>
    <div class="col-2" v-money-format="data.value"/>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
  .expense-list-item {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--dark-medium);
  }
</style>
