<template>
  <div class="general-input py-8 not-print">
    <div class="datable" style="padding-top: 0">
      <div class="grid grid-cols-[70%_30%] md:grid-cols-1 datable__searchbox">
        <div>
          <div
            class="datable__searchbox--row md:flex-col md:items-start md:w-full"
          >
            <!-- <p>実施業者名:</p>  -->
            <p>グループ:</p>
            <InputText
              type="text"
              v-model="value"
              class="h-10 w-80 md:w-full"
            />
          </div>
          <div
            class="datable__searchbox--row md:flex-col md:items-start md:w-full"
          >
            <p>開始時間:</p>
            <Calendar
              v-model="startDate"
              showIcon
              class="h-10 w-80 md:w-full"
            />
          </div>
          <div
            class="datable__searchbox--row md:flex-col md:items-start md:w-full"
          >
            <p>完了時間:</p>
            <Calendar v-model="endDate" showIcon class="h-10 w-80 md:w-full" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
          <Button label="検索" class="datable__btn" @click="alert()" />
          <Button label="ダウンロード" class="datable__btn" />
        </div>
      </div>
    </div>

    <div class="card primevue-format" style="padding: 0">
      <DataTable
        v-model:filters="filters"
        :value="getData"
        paginator
        :rows="10"
        dataKey="id"
        filterDisplay="row"
        rowHover
        :loading="loading"
        showGridlines
        style="padding: 0 5%"
        @row-click="testRowClick"
      >
        <template #empty> データを見つかりませんでした。</template>
        <template #loading>
          <div class="text-2xl bold text-white">
            データロード中。 お待ちください。
          </div>
        </template>

        <Column
          field="company"
          header="会社"
          style="min-width: 8.5rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.company }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="repairer"
          header="担当者"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.repairer }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="from"
          header="開始"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ dayjs(data.from * 1000).format('YYYY/MM/DD HH:mm') }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <Calendar
              v-model="startTime"
              @date-select="handleDateFilter(filterModel, filterCallback)"
              placeholder="年/月/日"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="to"
          header="完了"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ dayjs(data.to * 1000).format('YYYY/MM/DD HH:mm') }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <Calendar
              v-model="endTime"
              @date-select="handleDateFilter(filterModel, filterCallback)"
              placeholder="年/月/日"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="mainProcess"
          header="グループ"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.mainProcess }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <Dropdown
              v-model="mainProcess"
              :options="mainProcessOption"
              @change="handleMainProcessFilter(filterModel, filterCallback)"
            />
          </template>
        </Column>

        <Column
          field="subProcess"
          header="工程"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.subProcess }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <Dropdown
              v-model="subProcess"
              :options="subProcessOption"
              @change="handleSubProcessFilter(filterModel, filterCallback)"
            />
          </template>
        </Column>

        <Column
          field="specificProcess"
          header="設備名称"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.specificProcess }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="phenomena"
          header="不具合現象"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="primevue-format__wrap">
              {{ data.phenomena }}
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="reason"
          header="原因"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="primevue-format__wrap">
              {{ data.reason }}
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="nameOfReplacedItem"
          header="使用部品"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.nameOfReplacedItem }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="total"
          header="合計"
          style="min-width: 6rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.total }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="laborFee"
          header="材料費"
          style="min-width: 6rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.laborFee }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="itemCost"
          header="工料"
          style="min-width: 6rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            {{ data.itemCost }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="comment"
          header="施工内容"
          style="min-width: 8rem"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="primevue-format__wrap">
              {{ data.comment }}
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              title="adsad"
              type="text"
              @input="filterCallback()"
              class="p-column-filter"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
  
  <Dialog
    v-model:visible="visible"
    modal
    :header="dialogHeader"
    :draggable="false"
    :style="{ width: dialogWidth }"
    :contentStyle="{ padding: '5rem' }"
  >
    <PrintTable :tableData="dialogData"/>
    <template #footer>
      <Button label="印刷" icon="pi pi-print" severity="warning" @click="eventBus.emit('print')"/>
      <Button label="解消" icon="pi pi-trash" severity="danger" @click="del" />
      <Button label="編集" icon="pi pi-sync" severity="success" @click="triggerEdit" />
  </template>
  </Dialog>
  <div class="h-full w-full hidden printMe">
    <PrintTable :tableData="dialogData"></PrintTable>
  </div>
  <Dialog
    v-model:visible="editVisible"
    modal
    :draggable="false"
    :style="{ width: 90 + 'vw' }"
    :contentStyle="{ padding: '5rem' }"
  >
    <DayDiary :edit-data="dialogData" @close="editVisible = false"/>
  </Dialog>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import dayjs from 'dayjs'
import { FORM_DATA } from '@/utils/constants.js'
import { useToast } from 'primevue/usetoast'
import eventBus from '@/utils/eventBus'
import DayDiary from './DayDiary.vue'
 
const $axios = inject('axios')
const filters = ref({
  company: { value: null, matchMode: FilterMatchMode.CONTAINS },
  repairer: { value: null, matchMode: FilterMatchMode.CONTAINS },
  from: { value: null, matchMode: FilterMatchMode.GREATER_THAN },
  to: { value: null, matchMode: FilterMatchMode.LESS_THAN },
  mainProcess: { value: null, matchMode: FilterMatchMode.CONTAINS },
  subProcess: { value: null, matchMode: FilterMatchMode.CONTAINS },
  specificProcess: { value: null, matchMode: FilterMatchMode.CONTAINS },
  phenomena: { value: null, matchMode: FilterMatchMode.CONTAINS },
  reason: { value: null, matchMode: FilterMatchMode.CONTAINS },
  nameOfReplacedItem: { value: null, matchMode: FilterMatchMode.CONTAINS },
  total: { value: null, matchMode: FilterMatchMode.CONTAINS },
  laborFee: { value: null, matchMode: FilterMatchMode.CONTAINS },
  itemCost: { value: null, matchMode: FilterMatchMode.CONTAINS },
  comment: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

// define variables
const loading = ref(false)
const startTime = ref()
const endTime = ref()
const mainProcess = ref()
const subProcess = ref()
const value = ref()
const startDate = ref()
const endDate = ref()
const editVisible = ref(false)

const triggerEdit = () => {
  visible.value = false
  editVisible.value = true
}

const mainProcessOption = Object.keys(FORM_DATA)
const subProcessOption = computed(() => {
  if (mainProcess.value) return Object.keys(FORM_DATA[mainProcess.value])
  return []
})

// handle filter on table
const handleMainProcessFilter = (filterModel, filterCallback) => {
  filterModel.value = mainProcess.value
  filterCallback()
}
const handleSubProcessFilter = (filterModel, filterCallback) => {
  filterModel.value = subProcess.value
  filterCallback()
}
const handleDateFilter = (filterModel, filterCallback) => {
  filterModel.value = dayjs(startTime.value || endTime.value).unix()
  filterCallback()
}

// const getSeverity = (status) => {
//   switch (status) {
//     case 'unqualified':
//       return 'danger'

//     case 'qualified':
//       return 'success'

//     case 'new':
//       return 'info'

//     case 'negotiation':
//       return 'warning'

//     case 'renewal':
//       return null
//   }
// }

// fetch data for table from aws
const getData = ref()
const toast = useToast()
const fetchDataTable = async () => {
  loading.value = true
  await $axios
    .get('/get')
    .then((response) => {
      getData.value = response.data
      loading.value = false
    })
    .catch(() => {
      toast.add({
        severity: 'error',
        summary: 'エラー',
        detail: 'サーバーからデータを取得できません。',
        life: 10000,
      })
    })
}
fetchDataTable()

const alert = (evt) => {
  console.log(evt) // clears the query
}

// open dialog and pass props
const visible = ref(false);
const dialogData = ref();
const dialogHeader = ref();
const rowIndex = ref();
const testRowClick = (e) => {
  visible.value = true;
  dialogData.value = e.data;
  rowIndex.value = e.index;
  dialogHeader.value = e.data.mainProcess + ' の ' + e.data.subProcess;
}

// delete row
const del = async () => {
  const delData = {
    mainProcess: dialogData.value.mainProcess,
    from: dialogData.value.from,
  }
  await $axios
    .delete('/del', {data: delData})
    .then(() => {
      visible.value = false;
      toast.add({
        severity: 'success',
        summary: '解消しました。',
        detail: `${dayjs(delData.from * 1000).format('YYYY/MM/DD HH:mm')}の${delData.mainProcess}は解消しました。`,
        life: 10000,
      })
      getData.value.splice(rowIndex.value, 1);
    })
    .catch(() => {
      visible.value = false;
      toast.add({
        severity: 'error',
        summary: 'エラー',
        detail: 'サーバーからデータを取得できません。',
        life: 10000,
      })
    }) 
}
const dialogWidth = computed(() => {
  if (window.innerWidth >= 1366) return '65vw'
  return '75vw'
})

// const reset = (evt) => {
//   console.log(evt) // clears the query
// }
</script>

<style lang="scss" scoped>
@media print {
  div.not-print {
    display: none;
  }

  .printMe {
    display: block;
    background-color: white;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 25px;
    z-index: 9999;
  }
}
</style>

<style lang="scss">
.dialog-footer {
  background: red !important;
}
.primevue-format {
  &__wrap {
    width: 100px;
    max-height: 7.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .p-column-filter-clear-button {
    display: none;
  }
  .p-column-filter-element {
    height: 2.5rem;
    input {
      height: 100%;
    }
  }
  .p-calendar {
    height: 100%;
  }
  .p-fluid .p-dropdown {
    height: 2.5rem;
  }
  .p-fluid .p-inputtext {
    display: flex;
    align-items: center;
  }
  .p-dropdown .p-dropdown-trigger {
    width: 2rem;
  }
}
</style>
