<template>
  <div class="datable">
    <div class="grid grid-cols-[70%_30%] md:grid-cols-1 datable__searchbox">
      <div>
        <div class="datable__searchbox--row md:flex-col md:items-start md:w-full">
          <p>実施業者名:</p> 
          <InputText type="text" v-model="value" class="h-10 w-80 md:w-full" />
        </div>
        <div class="datable__searchbox--row md:flex-col md:items-start md:w-full">
          <p>開始時間:</p> 
          <Calendar v-model="date" showIcon class="h-10 w-80 md:w-full"/>
        </div>
        <div class="datable__searchbox--row md:flex-col md:items-start md:w-full">
          <p>完了時間:</p> 
          <Calendar v-model="date" showIcon class="h-10 w-80 md:w-full"/>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <Button label="検索" class="datable__btn" @click="alert()"/>
        <Button label="ダウンロード" class="datable__btn"/>
      </div>
    </div>

  </div>
  <div class="card datable" style="padding: 0;">
    <DataTable :value="products" showGridlines tableStyle="min-width: 50rem" class="datable__searchbox">
      <Column field="code" header="NO"></Column>
      <Column field="name" header="会社"></Column>
      <Column field="category" header="カテゴリー"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const date = ref(0)
const value = ref()

const products = reactive(
  [{
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
  }]
)
const alert = (evt) => {
  console.log(evt) // clears the query

}

const reset = (evt) => {
  console.log(evt) // clears the query
}

</script>
