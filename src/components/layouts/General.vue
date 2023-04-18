<template>
  <div class="py-8">
  <div class="datable" style="padding-top: 0;">
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
    <DataTable :value="products" showGridlines tableStyle="min-width: 50rem" class="p-2">
      <Column field="code" header="番号"></Column>
      <Column field="name" header="会社"></Column>
      <Column field="worker" header="担当者"></Column>
      <Column field="startTime" header="開始"></Column>
      <Column field="endTime" header="完了"></Column>
      <Column field="progress" header="工程"></Column>
      <Column field="currentStatus" header="現在"></Column>
      <Column field="reason" header="原因"></Column>
      <Column field="partName" header="品名"></Column>
      <Column field="price.total" header="合計"></Column>
      <Column field="price.labour" header="材料費"></Column>
      <Column field="price.part" header="工料"></Column>
      <Column field="comment" header="施工内容"></Column>
    </DataTable>
  </div>
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
    worker: 'A1さん',
    startTime: '2023/01/05',
    endTime: '2023/02/06',
    progress: 'パネル',
    currentStatus: 'シリンダー壊れる',
    reason: '知らない',
    partName: 'ST5のシリンダー',
    price: {
      total: 5000,
      labour: 1000,
      part: 4000
    },
    comment: 'シリンダー交換'
  },
  {
    code: 2,
    name: 'B会社',
    worker: 'B1さん',
    startTime: '2023/02/05',
    endTime: '2023/03/06',
    progress: '横架材',
    currentStatus: 'モーターのチャン',
    reason: '切られた',
    partName: '1mチャン',
    price: {
      total: 10000,
      labour: 2000,
      part: 8000
    },
    comment: 'チャン交換'
  },
  {
    code: 3,
    name: 'C会社',
    worker: 'C1さん',
    startTime: '2023/02/01',
    endTime: '2023/02/06',
    progress: 'モルダー',
    currentStatus: 'ローラー壊れる',
    reason: '知らない',
    partName: '50mmのローラー',
    price: {
      total: 3500,
      labour: 1000,
      part: 2500
    },
    comment: 'ローラー交換'
  },
  {
    code: 4,
      name: 'D会社',
      worker: 'D1さん',
      startTime: '2023/03/05',
      endTime: '2023/03/06',
      progress: '合板',
      currentStatus: '接着剤出ない',
      reason: 'ノズル混雑',
      partName: 'Ｎordsonのノズル',
      price: {
        total: 4000,
        labour: 1500,
        part: 2500
      },
      comment: 'ノズル交換'
  }]
)
const alert = (evt) => {
  console.log(evt) // clears the query

}

const reset = (evt) => {
  console.log(evt) // clears the query
}

</script>
