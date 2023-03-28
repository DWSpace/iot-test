<template>
  <div class="datable">
    <div class="datable__searchbox">
      <div class="grid gap-3 grid-cols-[30%_50%] lg:grid-cols-1 content-center">
       <div class="content-center">実施業者名</div>
       
       
       <InputText type="text" v-model="value" class="h-10"/>
        開始時間
        <Calendar v-model="date" showIcon class="h-10"/>
      </div> 
      <div class="w-[30%]">
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
        quantity: 10},
        {
        code: 2,
        name: 'B会社',
        category: '横架材',
        quantity: 10},
        {
        code: 3,
        name: 'C会社',
        category: 'テスト',
        quantity: 10}
        ]
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>
