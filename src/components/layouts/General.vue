<template>
  <div class="card p-4">
    <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>
<script>

export default {
  data() {
    return {
      products: [{
        code: 1,
        name: 'abc',
        category: 'xyz',
        quantity: 10},
        {
        code: 2,
        name: 'con cặt',
        category: 'cà chua',
        quantity: 10},
        {
        code: 3,
        name: 'a á ớ',
        category: 'có cái rồn',
        quantity: 10}
        ]
    };
  },
  mounted() {

  },
};
</script>
