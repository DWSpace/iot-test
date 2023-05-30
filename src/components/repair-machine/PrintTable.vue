<template>
  <div class="max-w-4xl relative left-1/2 move-left bg-white text-gray-900 p-5font-NotoJP">
    <p class="text-center font-bold text-2xl">工事（修理）実施報告事</p>
    <p class="text-right font-medium text-xl pt-5">ウッドリンク株式会社</p>
    <p class="text-right font-medium text-xl">住宅資材事業部</p>
    <p class="text-left font-medium text-xl pt-7">名業者の方へ</p>
    <p class="text-center font-medium text-xl p-5 mb-5">
      この報告書と請求書と照合し、確認した上でお支払い致します。
    </p>

    <table class="table w-60 text-center" align="right">
    <!-- head -->
      <tbody>
        <!-- row 1 -->
        <tr style="text-align: center;">
          <td style="font-weight: 600;">部長</td>
          <td style="font-weight: 600;">ウッドリンク担当</td>
        </tr>
        <tr>
          <td style="width: 5rem; height: 3rem;"></td>
          <td style="width: 5rem; height: 3rem;"></td>
        </tr>
      </tbody>
    </table>

    <table class="table w-full">
    <!-- head -->
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>実施業者名</th>
          <td style="width: 15rem;">{{ tableData?.company }}</td>
          <td style="width: 5rem; font-weight: 600;">担当者</td>
          <td>{{ tableData?.repairer }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table w-full">
    <!-- head -->
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>実施日</th>
          <td>{{ fromTime }} ~ {{ toTime }}&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight: 600;">備考:</span> {{ tableData?.isFinish ? "完了" : "継続" }}</td>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>グループ</th>
          <td>{{ tableData?.mainProcess }}</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>工程</th>
          <td>{{ tableData?.subProcess }}</td>
        </tr>
        <tr>
          <th>設備名称</th>
          <td>{{ tableData?.specificProcess }}</td>
        </tr>
        <tr>
          <th>不具合現象</th>
          <td style="white-space: normal;">
            {{ tableData?.phenomena }}
          </td>
        </tr>
        <tr>
          <th>不具合原因</th>
          <td style="white-space: normal;">
            {{ tableData?.reason }}
          </td>
        </tr>
        <tr>
          <th>使用部品</th>
          <td>{{ tableData?.nameOfReplacedItem }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table w-full">
    <!-- head -->
      <tbody style="text-align: center;">
        <!-- row 1 -->
        <tr>
          <th rowspan="2" style="text-align: left;">工事費</th>
          <td style="font-weight: 600;">合計</td>
          <td style="font-weight: 600;">工料</td>
          <td style="font-weight: 600;">材料費</td>
        </tr>
        <!-- row 2 -->
        <tr style="height: 2rem;">
          <td>{{ tableData?.total === 0 ? '' : tableData?.total }}</td>
          <td>{{ tableData?.laborFee === 0 ? '' : tableData?.laborFe }}</td>
          <td>{{ tableData?.itemCost === 0 ? '' : tableData?.itemCost }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table w-full">
    <!-- head -->
      <tbody>
        <!-- row 1 -->
        <tr style="height: 10rem;">
          <th>対処</th>
          <td style="white-space: normal;">
            {{ tableData?.comment }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import dayjs from "dayjs";
import { computed, onMounted, onUnmounted } from "vue";
import eventBus from '@/utils/eventBus'

const props = defineProps({
  tableData: {
    type: Object,
    default: () => {},
  },
});
const fromTime = computed (() => {
  return dayjs(props.tableData?.from*1000).format("YYYY-MM-DD HH:mm")
})
const toTime = computed (() => {
  return dayjs(props.tableData?.to*1000).format("YYYY-MM-DD HH:mm")
})
onMounted(() => {
      eventBus.on('print', handleEvent);
    });

onUnmounted(() => {
  eventBus.off('print', handleEvent);
});

// Xử lý sự kiện
const handleEvent = () => {
  window.print()
};
</script>
<style lang="scss">

.table {
  display: table;
  table, th, td {
    border: 1px solid;
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
}
.table {
  position: relative;
  text-align: left;
}
.table th:first-child {
  position: sticky;
  position: -webkit-sticky;
  left: 0px;
  z-index: 11;
  font-weight: 600;
  width: 9rem;
}
.table :where(th, td) {
  padding: 0.5rem/* 16px */;
  vertical-align: middle;
}

.table:where(:not(.table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)) {
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: black;
}
.table :where(th, td) {
  --tw-bg-opacity: 1;
  // font-size: 12px !important/* 12px */;
  line-height: 20px/* 16px */;
  font-weight: 400;
}
.move-left {
  transform: translate(-50%, 0);
}
</style>