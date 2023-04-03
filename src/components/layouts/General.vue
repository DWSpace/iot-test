<template>
  <div class="datable">
    <div class="grid grid-cols-[70%_30%] md:grid-cols-1 datable__searchbox">
      <div>
        <div class="datable__searchbox--row md:flex-col md:items-start">
          <p>実施業者名:</p> 
          <InputText type="text" v-model="value" class="h-10 w-80 md:w-full" />
        </div>
        <div class="datable__searchbox--row md:flex-col md:items-start">
          <p>開始時間:</p> 
          <Calendar v-model="date" showIcon class="h-10 w-80"/>
        </div>
        <div class="datable__searchbox--row md:flex-col md:items-start">
          <p>完了時間:</p> 
          <Calendar v-model="date" showIcon class="h-10 w-80"/>
        </div>
      </div>
      <div class="">
        asdsads
      </div>
    </div>

  </div>
  <div class="card p-4">
    <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
      <Column field="code" header="NO"></Column>
      <Column field="name" header="会社"></Column>
      <Column field="category" header="カテゴリー"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>
<script>

export default {
  data() {
    return {
      date: null,
      products: [{
        code: 1,
        name: 'A会社',
        category: 'パネル',
        quantity: 10
      },
      {
        code: 2,
        name: 'B会社',
        category: '横架材',
        quantity: 10
      },
      {
        code: 3,
        name: 'C会社',
        category: 'テスト',
        quantity: 10
      }
      ]
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>
