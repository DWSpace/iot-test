<template>
  <div class="py-8">
  <div class="datable" style="padding-top: 0;">
    <div class="grid grid-cols-[70%_30%] md:grid-cols-1 datable__searchbox">
      <div>
        <div class="datable__searchbox--row md:flex-col md:items-start md:w-full">
          <!-- <p>実施業者名:</p>  -->
          <p>グループ:</p> 
          <InputText type="text" v-model="value" class="h-10 w-80 md:w-full" />
        </div>
        <div class="datable__searchbox--row md:flex-col md:items-start md:w-full">
          <p>開始時間:</p> 
          <Calendar v-model="startDate" showIcon class="h-10 w-80 md:w-full"/>
        </div>
        <div class="datable__searchbox--row md:flex-col md:items-start md:w-full">
          <p>完了時間:</p> 
          <Calendar v-model="endDate" showIcon class="h-10 w-80 md:w-full"/>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <Button label="検索" class="datable__btn" @click="alert()"/>
        <Button label="ダウンロード" class="datable__btn"/>
      </div>
    </div>
  </div>

  <div class="card primevue-format" style="padding: 0;">
        <DataTable v-model:filters="filters" :value="getData_xoabot" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
          showGridlines tableStyle="min-width: 80%" style="padding: 0 5%;"> 
            <template #empty> 見つかりませんでした。</template>
            <template #loading>
                <div class="text-2xl bold text-white">
                    データのロード中。 お待ちください。
                </div>
                  
            </template>

            <Column field="company" header="会社" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.company }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="repairer" header="担当者" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.repairer }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="from" header="開始" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ dayjs(data.from*1000).format("YYYY/MM/DD HH:mm") }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <!-- <InputText v-model="filterModel.value" type="date" @input="handleDateFilter(filterModel, filterCallback)" class="p-column-filter"/> -->
                    <Calendar v-model="startTime" @date-select="handleDateFilter(filterModel, filterCallback)" placeholder="年/月/日" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="to" header="完了" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ dayjs(data.to*1000).format("YYYY/MM/DD HH:mm") }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Calendar v-model="endTime" @date-select="handleDateFilter(filterModel, filterCallback)" placeholder="年/月/日" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="mainProcess" header="グループ" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.mainProcess }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="mainProcess" :options="mainProcessOption" @change="handleMainProcessFilter(filterModel, filterCallback)" />
                </template>
            </Column>

            <Column field="subProcess" header="工程" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.subProcess }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <!-- <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/> -->
                    <Dropdown v-model="subProcess" :options="subProcessOption" @change="handleSubProcessFilter(filterModel, filterCallback)" />
                </template>
            </Column>

            <Column field="specificProcess" header="設備名称" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.specificProcess }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="phenomena" header="不具合現象" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.phenomena }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="reason" header="原因" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.reason }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="nameOfReplacedItem" header="使用部品" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.nameOfReplacedItem }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>
            
            <Column field="total" header="合計" style="min-width: 6rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.total }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="laborFee" header="材料費" style="min-width: 6rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.laborFee }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="itemCost" header="工料" style="min-width: 6rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.itemCost }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>

            <Column field="comment" header="施工内容" style="min-width: 8rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.comment }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" title="adsad" type="text" @input="filterCallback()" class="p-column-filter"/>
                </template>
            </Column>
        </DataTable>
    </div>
</div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import dayjs from 'dayjs';
import { FORM_DATA } from '~/utils/constants.js'

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
    comment: { value: null, matchMode: FilterMatchMode.CONTAINS }
});


const loading = ref(false);
const startTime = ref();
const endTime = ref();
const mainProcess = ref();
const subProcess = ref();
const value = ref();
const startDate = ref();
const endDate = ref();

const mainProcessOption = Object.keys(FORM_DATA)
const subProcessOption = computed(() => {
    if (mainProcess.value)
   return Object.keys(FORM_DATA[mainProcess.value])
})

const handleMainProcessFilter = (filterModel, filterCallback) => {
    filterModel.value = mainProcess.value;
    filterCallback();
  };
const handleSubProcessFilter = (filterModel, filterCallback) => {
    filterModel.value = subProcess.value;
    filterCallback();
  };
const handleDateFilter = (filterModel, filterCallback) => {
    filterModel.value = dayjs(startTime.value || endTime.value).unix();
    filterCallback();
  };
    
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
}

const getData = ref();
const fetchDataTable = async () => {
    loading.value = true;
    await $axios.get('/get')
        .then((response) => {
            // getData.value = response.data;
            // loading.value = false;
            console.log(response.data)
    })
        .catch ((err) => {
            // toast.add({ severity: 'error', summary: 'エラー', detail: 'fuck', life: 3000 });
        })
    }
fetchDataTable();

const alert = (evt) => {
  console.log(evt) // clears the query

}

const reset = (evt) => {
  console.log(evt) // clears the query
}

</script>

<style lang="scss">
.primevue-format {
    .p-column-filter-clear-button { display: none;};
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
