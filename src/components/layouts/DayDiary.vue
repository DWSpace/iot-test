<template>
  <div class="not-print max-w-4xl relative left-1/2 move-left bg-white text-gray-900 p-24 lg:p-5 font-NotoJP">
    <p class="text-center font-bold text-2xl">工事（修理）実施報告書</p>
    <p class="text-right font-medium text-xl pt-5">ウッドリンク株式会社</p>
    <p class="text-right font-medium text-xl">住宅資材事業部</p>
    <p class="text-left font-medium text-xl pt-7">各業者の方へ</p>
    <p class="text-center font-medium text-xl p-5">
      この報告書と請求書を照合し、確認した上でお支払い致します。
    </p>
    <form class="pt-7">
      <div class="grid gap-5 mb-6 grid-cols-6 lg:grid-cols-1">
        <div class="grid w-80 lg:grid-cols-1 items-center justify-items-start">
          <label for="first_name" class="mb-2 text-xl font-medium ">実施業者名</label>
        </div>
        <div class="col-span-2 lg:grid-cols-1">
          <input v-model="objData.data.company" type="text" id="first_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
        <div class="grid lg:grid-cols-1 items-center justify-items-end lg:justify-items-start">
          <label for="in_charge" class="mb-2 text-xl font-medium ">担当者</label>
        </div>
        <div class="col-span-2 lg:grid-cols-1">
          <input v-model="objData.data.repairer" type="text" id="in_charge"
            class="bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
      </div>

      <div class="flex mb-2 text-xl font-medium ">
        実施日
        <div class="flex flex-wrap gap-3 ml-60">
          <div class="flex align-items-center">
              <RadioButton v-model="isFinishRef" inputId="finish" :value="true" />
              <label for="finish" class="ml-2">完了</label>
          </div>
          <div class="flex align-items-center">
              <RadioButton v-model="isFinishRef" inputId="notfinish" :value="false" />
              <label for="notfinish" class="ml-2">継続</label>
          </div>
        </div>
      </div>
      <div class="grid gap-5 mb-6 grid-cols-6 lg:block mt-4">
        <div class="grid w-80 lg:grid-cols-1 items-center justify-items-start">
          <label for="time-from" class="mb-2 text-xl font-medium ">開始時間</label>
        </div>
        <div class="col-span-2 col-start-2">
          <input type="datetime-local" id="time-from" v-model="dateBeforeParse"
            class="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:border-blue-500 block w-56 p-2.5"
            lang="ja-JP" required />
        </div>
        <div class="grid lg:grid-cols-1 items-center justify-items-end lg:justify-items-start">
          <label for="time-to" class="mb-2 text-xl font-medium ">終了時間</label>
        </div>

        <div class="col-span-2 col-start-5">
          <input type="datetime-local" id="time-from" v-model="dateAfterParse"
            class="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:border-blue-500 block w-56 p-2.5"
            lang="ja-JP" required />
        </div>
      </div>


      <div for="" class="mb-2 text-xl font-medium ">工程</div>
      <div class="grid gap-5 mb-6 grid-cols-6 lg:block mt-4">
        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="time-from" class="mb-2 text-xl font-medium ">グループ</label>
        </div>
        <div class="col-span-2 col-start-2">
          <select v-model="firstOption"
            class="select scroll-auto bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5">
            <option class="text-base" v-for="(value, key) in FORM_DATA" :key="key">
              {{ key }}
            </option>
          </select>
        </div>
        <div class="grid lg:grid-cols-1 items-center justify-items-end lg:justify-items-start">
          <label for="time-to" class="mb-2 text-xl font-medium ">工程</label>
        </div>
        <div class="col-span-2 col-start-5">
          <select v-model="secondOption"
            class="select scroll-auto bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5">
            <option class="text-base" v-if="firstOption" v-for="(item, index) in FORM_DATA[firstOption]" :key="index">
              {{ index }}
            </option>
          </select>
        </div>
      </div>
      <div class="grid gap-5 mb-6 grid-cols-6 lg:grid-cols-1 mt-4">
        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="phone" class="mb-2 text-xl font-medium ">設備名称</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <select v-model="thirdOption"
            class="select scroll-auto bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5">
            <option class="text-base" v-if="secondOption" v-for="(item, index) in FORM_DATA[firstOption][secondOption]"
              :key="index">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="phone" class="mb-2 text-xl font-medium ">不具合現象</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <input v-model="objData.data.phenomena" type="text" id="phone"
            class="bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>

        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="phone" class="mb-2 text-xl font-medium ">不具合原因</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <input v-model="objData.data.reason" type="text" id="phone"
            class="bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>

        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="website" class="mb-2 text-xl font-medium ">使用部品</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <input v-model="objData.data.nameOfReplacedItem" type="text" id="website"
            class="bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
      </div>

      <div class="grid grid-cols-8 grid-flow-row grid-rows-2">
        <div class="grid col-span-2 row-start-1 row-end-4 justify-start items-center">
          <label for="visitors" class="mb-2 text-xl font-medium ">工事費</label>
        </div>
        <div class="grid col-span-2 justify-center items-center">
          <label for="gokei" class="mb-2 text-xl font-medium ">合計</label>
        </div>
        <div class="grid col-span-2 justify-center items-center">
          <label for="koriu" class="mb-2 text-xl font-medium ">工料</label>
        </div>
        <div class="grid col-span-2 justify-center items-center">
          <label for="zairiuhi" class="mb-2 text-xl font-medium ">材料費</label>
        </div>
        <div class="col-span-2 px-2">
          <input v-model="objData.data.total" type="number" id="gokei"
            class="text-center bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
        <div class="col-span-2 px-2">
          <input v-model="objData.data.laborFee" type="number" id="koriu"
            class="text-center bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
        <div class="col-span-2 px-2">
          <input v-model="objData.data.itemCost" type="number" id="zairiuhi"
            class="text-center bg-gray-50 border border-gray-300  text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
      </div>
      <div class="pt-7">
        <label for="seiko" class="mb-2 text-xl font-medium ">対処</label>
      </div>
      <div class="pt-3">
        <textarea v-model="objData.data.comment" id="seiko"
          class="h-48 bg-gray-50 border border-gray-300  text-base rounded-xl focus:border-blue-500 block w-full p-2.5"
          required></textarea>
      </div>
    </form>
    <div class="flex gap-5">
    <button @click="showDialog()"
      class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full px-5 py-2.5 text-center">
      保存
    </button>
    <button @click="printPaper()"
      class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full px-5 py-2.5 text-center">
      印刷
    </button>
  </div>
  </div>
  <div class="h-full w-full hidden printMe">
    <PrintTable :tableData="objData.data"></PrintTable>
  </div>
  <!-- Save successfully -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box max-w-xs">
      <h3 class="font-bold text-xl text">完了しました。</h3>
      <p class="py-4">維持で入力する又は戻る</p>
      <div class="flex justify-between">
        <button class="flex btn" @click="resetObjData()">新規入力</button>
        <label for="my-modal" class="btn">再編集</label>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <input type="checkbox" id="my-modal2" class="modal-toggle" />
  <div class="modal">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor" />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill" />
    </svg>
  </div>

  <!-- Error -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative bg-transparent p-0">
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-3">✕</label>
      <div class="alert alert-error shadow-xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>エラーが発生しました。もう一度お試しください。</span>
          <span>{{ err }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";
import dayjs from "dayjs";
import { FORM_DATA } from '~/utils/constants.js'

const dateBeforeParse = ref(dayjs().format("YYYY-MM-DD HH:mm").toString());
const parseBeforeDate = computed(() => {
  return dayjs(dateBeforeParse.value).unix();
});

const dateAfterParse = ref(dayjs().format("YYYY-MM-DD HH:mm").toString());
const parseAfterDate = computed(() => {
  return dayjs(dateAfterParse.value).unix();
});

const firstOption = ref();
const secondOption = ref();
const thirdOption = ref();
const err = ref();
const isFinishRef = ref(false);

let objData = reactive({
  data: {
    mainProcess: firstOption,
    from: parseBeforeDate,
    company: "",
    repairer: "",
    to: parseAfterDate,
    isFinish: isFinishRef,
    subProcess: secondOption, 
    specificProcess: thirdOption,
    phenomena: "",
    reason: "",
    nameOfReplacedItem: "",
    total: 0,
    laborFee: 0,
    itemCost: 0,
    comment: "",
  },
});



function validateObj(obj) {
  const isBodyNotEmpty = Object.values(obj.data).every(
    (x) => x !== null && x !== ""
  );
  const isCostNotEmpty =
    obj.data.total >= 0
      ? true
      : false && obj.data.laborFee >= 0
        ? true
        : false && obj.data.itemCost >= 0
          ? true
          : false;
  return isBodyNotEmpty && isCostNotEmpty;
}

const showDialog = async () => {
  // const isOK = validateObj(objData);
  // console.log(isOK);
  // console.log(objData);
  document.getElementById("my-modal").checked = true;
  // if (isOK) {
  //   document.getElementById("my-modal2").checked = true;
  //   await axios
  //     .post("/add", objData)
  //     .then((response) => {
  //       // console.log(response.data);
  //       document.getElementById("my-modal2").checked = false;
  //       document.getElementById("my-modal").checked = true;
  //     })
  //     .catch((error) => {
  //       err.value = error;
  //       document.getElementById("my-modal-3").checked = true;
  //       document.getElementById("my-modal2").checked = false;
  //     });
  // } else {
  //   document.getElementById("my-modal-3").checked = true;
  // }
};

const saveData = async () => {
  const isOK = validateObj(objData);
  // console.log(isOK);
  // console.log(objData);

  if (isOK) {
    document.getElementById("my-modal2").checked = true;
    await axios
      .post("/add", objData)
      .then((response) => {
        // console.log(response.data);
        document.getElementById("my-modal2").checked = false;
        // document.getElementById("my-modal").checked = true;
      })
      .catch((error) => {
        err.value = error;
        document.getElementById("my-modal-3").checked = true;
        document.getElementById("my-modal2").checked = false;
      });
  } else {
    document.getElementById("my-modal-3").checked = true;
  }
}
const printPaper = () => {
    window.print()
  }
const resetObjData = async () => {
  document.getElementById("my-modal").checked = false;
  await saveData();
  objData = Object.assign(objData, { body: {}});
}
</script>

<style lang="scss" scoped>
.move-left {
  transform: translate(-50%, 0);
}

.p-radiobutton{
  margin-top: 3px;
}

@media print {
  div.not-print {display: none;}
  .printMe {
    display: block;
    background-color: white;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 25px;
  }
}
</style>
