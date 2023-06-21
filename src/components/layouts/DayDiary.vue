<template>
  <div
    class="day-diary not-print max-w-4xl relative left-1/2 move-left bg-white text-gray-900 lg:p-5 font-NotoJP"
    :style="{padding: isTriggerPadding ? '6rem' : 0 }"
  >
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
          <label for="first_name" class="mb-2 text-xl font-medium"
            >実施業者名</label
          >
        </div>
        <div class="col-span-2 lg:grid-cols-1">
          <input
            v-model="objData.data.company"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div
          class="grid lg:grid-cols-1 items-center justify-items-end lg:justify-items-start"
        >
          <label for="in_charge" class="mb-2 text-xl font-medium">担当者</label>
        </div>
        <div class="col-span-2 lg:grid-cols-1">
          <input
            v-model="objData.data.repairer"
            type="text"
            id="in_charge"
            class="bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>

      <div class="flex mb-2 text-xl font-medium">
        実施日
        <div class="flex flex-wrap gap-3 ml-60">
          <div class="flex align-items-center">
            <RadioButton v-model="objData.data.isFinish" inputId="finish" :value="true" />
            <label for="finish" class="ml-2">完了</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="objData.data.isFinish"
              inputId="notfinish"
              :value="false"
            />
            <label for="notfinish" class="ml-2">継続</label>
          </div>
        </div>
      </div>
      <div class="grid gap-5 mb-6 grid-cols-6 lg:block mt-4">
        <div class="grid w-80 lg:grid-cols-1 items-center justify-items-start">
          <label for="time-from" class="mb-2 text-xl font-medium"
            >開始時間</label
          >
        </div>
        <div class="col-span-2 col-start-2">
          <input
            type="datetime-local"
            id="time-from"
            v-model="dateBeforeParse"
            @input="handleDateTimeChange"
            class="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:border-blue-500 block w-56 p-2.5"
            lang="ja-JP"
            required
          />
        </div>
        <div
          class="grid lg:grid-cols-1 items-center justify-items-end lg:justify-items-start"
        >
          <label for="time-to" class="mb-2 text-xl font-medium">終了時間</label>
        </div>

        <div class="col-span-2 col-start-5">
          <input
            type="datetime-local"
            id="time-to"
            v-model="dateAfterParse"
            class="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:border-blue-500 block w-56 p-2.5"
            lang="ja-JP"
            required
          />
        </div>
      </div>

      <div for="" class="mb-2 text-xl font-medium">工程</div>
      <div class="grid gap-5 mb-6 grid-cols-6 lg:block mt-4">
        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="time-from" class="mb-2 text-xl font-medium"
            >グループ</label
          >
        </div>
        <div class="col-span-2 col-start-2">
          <select
          v-model="objData.data.mainProcess"
            class="select scroll-auto bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
          >
            <option
              class="text-base"
              v-for="(value, key) in FORM_DATA"
              :key="key"
            >
              {{ key }}
            </option>
          </select>
        </div>
        <div
          class="grid lg:grid-cols-1 items-center justify-items-end lg:justify-items-start"
        >
          <label for="time-to" class="mb-2 text-xl font-medium">工程</label>
        </div>
        <div class="col-span-2 col-start-5">
          <select
            v-model="objData.data.subProcess"
            class="select scroll-auto bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
          >
            <option
              class="text-base"
              v-if="objData.data.mainProcess"
              v-for="(item, index) in FORM_DATA[objData.data.mainProcess]"
              :key="index"
            >
              {{ index }}
            </option>
          </select>
        </div>
      </div>
      <div class="grid gap-5 mb-6 grid-cols-6 lg:grid-cols-1 mt-4">
        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="phone" class="mb-2 text-xl font-medium">設備名称</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <select
            v-model="objData.data.specificProcess"
            class="select scroll-auto bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
          >
            <option
              class="text-base"
              v-if="objData.data.subProcess"
              v-for="(item, index) in FORM_DATA[objData.data.mainProcess][objData.data.subProcess]"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
        </div>

        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="phone" class="mb-2 text-xl font-medium">不具合現象</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <input
            v-model="objData.data.phenomena"
            type="text"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="phone1" class="mb-2 text-xl font-medium">不具合原因</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <input
            v-model="objData.data.reason"
            type="text"
            id="phone1"
            class="bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div class="grid lg:grid-cols-1 items-center justify-items-start">
          <label for="website" class="mb-2 text-xl font-medium">使用部品</label>
        </div>
        <div class="col-span-5 lg:grid-cols-1">
          <input
            v-model="objData.data.nameOfReplacedItem"
            type="text"
            id="website"
            class="bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>

      <div class="grid grid-cols-8 grid-flow-row grid-rows-2">
        <div
          class="grid col-span-2 row-start-1 row-end-4 justify-start items-center"
        >
          <p class="mb-2 text-xl font-medium">工事費</p>
        </div>
        <div class="grid col-span-2 justify-center items-center">
          <label for="gokei" class="mb-2 text-xl font-medium">合計</label>
        </div>
        <div class="grid col-span-2 justify-center items-center">
          <label for="koriu" class="mb-2 text-xl font-medium">工料</label>
        </div>
        <div class="grid col-span-2 justify-center items-center">
          <label for="zairiuhi" class="mb-2 text-xl font-medium">材料費</label>
        </div>
        <div class="col-span-2 px-2">
          <input
            v-model="objData.data.total"
            type="number"
            id="gokei"
            class="text-center bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="col-span-2 px-2">
          <input
            v-model="objData.data.laborFee"
            type="number"
            id="koriu"
            class="text-center bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="col-span-2 px-2">
          <input
            v-model="objData.data.itemCost"
            type="number"
            id="zairiuhi"
            class="text-center bg-gray-50 border border-gray-300 text-sm rounded-xl focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div class="pt-7">
        <label for="seiko" class="mb-2 text-xl font-medium">対処</label>
      </div>
      <div class="pt-3">
        <textarea
          v-model="objData.data.comment"
          id="seiko"
          class="h-48 bg-gray-50 border border-gray-300 text-base rounded-xl focus:border-blue-500 block w-full p-2.5"
          required
        ></textarea>
      </div>
    </form>
    <div class="card mt-8">
      <FileUpload ref="fileUploadRef" 
        customUpload 
        @uploader="onAdvancedUpload" 
        @select="assignFile($event)" 
        :multiple="true" 
        :showUploadButton="false"
        accept="image/*, .pdf" 
        :maxFileSize="1100000">
        <template #empty>
            <p>現在アップロードするファイルがありません。</p>
        </template>
      </FileUpload>
    </div>
    <div class="flex gap-5">
      <button
        v-if="props.editData"
        @click="closeDialog"
        class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full px-5 py-2.5 text-center"
      >
        保存
      </button>
      <button
        v-else
        @click="showDialog()"
        class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full px-5 py-2.5 text-center"
      >
        保存
      </button>
      <button
        v-if="!props.editData"
        @click="printPaper()"
        class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full px-5 py-2.5 text-center"
      >
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
    <svg
      aria-hidden="true"
      class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  </div>

  <!-- Error -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative bg-transparent p-0">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-3"
        >✕</label
      >
      <div class="alert alert-error shadow-xl">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>エラーが発生しました。もう一度お試しください。</span>
          <span>{{ err }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import axios from "axios";
import dayjs from "dayjs";
import { FORM_DATA } from "@/utils/constants.js";
import { useToast } from 'primevue/usetoast'



const dateBeforeParse = ref(dayjs().format("YYYY-MM-DD HH:mm").toString());
const parseBeforeDate = computed(() => {
  return dayjs(dateBeforeParse.value).unix();
});

const dateAfterParse = ref(dayjs().format("YYYY-MM-DD HH:mm").toString());
const parseAfterDate = computed(() => {
  return dayjs(dateAfterParse.value).unix();
});

const listFile = computed(() => {
  return file.value?.map( f => f.name )
})
const err = ref();
const props = defineProps({
  editData: {
    type: Object,
  },
});
const isTriggerPadding = ref(true)

onMounted(() => {
  if (window.innerWidth < 1100) isTriggerPadding.value = false
})


let objData = reactive({
  data: {
    mainProcess: '',
    from: parseBeforeDate,
    company: "",
    repairer: "",
    to: parseAfterDate,
    isFinish: false,
    subProcess: '',
    specificProcess: '',
    phenomena: "",
    reason: "",
    nameOfReplacedItem: "",
    total: 0,
    laborFee: 0,
    itemCost: 0,
    comment: "",
    input_time: dayjs().unix(),
    listFile: listFile || []
  },
});

let mainProcess;
let from;
const assignObj = () => {
  if (props.editData) {
    mainProcess = props.editData?.mainProcess
    from = props.editData?.from
    objData = {...{data: props.editData}}
    dateBeforeParse.value = dayjs(props.editData.from*1000).format("YYYY-MM-DD HH:mm").toString()
    dateAfterParse.value = dayjs(props.editData.to*1000).format("YYYY-MM-DD HH:mm").toString()
  }
  return
}
assignObj()
function validateObj(obj) {
  const isBodyNotEmpty = Object.values(obj.data).every(
    (x) => x !== null && x !== ""
  );
  const isCostNotEmpty =
    obj.data.total >= 0 && obj.data.laborFee >= 0 && obj.data.itemCost >= 0;
  return isBodyNotEmpty && isCostNotEmpty;
}

const showDialog = async () => {
  document.getElementById("my-modal").checked = true;
};

// Lưu dữ liệu và đóng dialog
const handleDateTimeChange = () => {
  // Xử lý khi thời gian thay đổi
  if (props.editData) {
    objData.data.from = dayjs(dateBeforeParse.value).unix();
  }
}

const file = ref()
const fileUploadRef = ref(null);
const linkUploadButtonToThisButton = () => {
  // Truy cập đến component FileUpload thông qua ref
  if (fileUploadRef.value) {
    fileUploadRef.value.upload(); // Gọi hàm upload() của FileUpload để bắt đầu upload
  }
};
const assignFile = (e) => {
  file.value = e.files
}
const onAdvancedUpload = () => {
  file.value?.forEach(async(element) => {
    if (element.name.includes('png') || element.name.includes('jpg')  ||  element.name.includes('jpeg')) await submitImg(element)
    if (element.name.includes('pdf')) await submitPdf(element)
  });
}
const submitImg = async (f) => {
  await axios.put(`https://fectzc9e60.execute-api.ap-northeast-1.amazonaws.com/v1/woodlink-file-upload/${f.name}`,
    f,
    {
      headers: {
        'Content-Type': f.type
      },
    }
  ).then(function(){
    totalFile++;
    toast.add({
            severity: 'success',
            summary: f.name + 'をアップロードしました',
            detail: f.name + 'が保存されました。',
            life: 10000,
          })
  })
  .catch(function(){
    toast.add({
            severity: 'error',
            summary: 'エラー',
            detail: 'サーバーからデータを取得できません。',
            life: 10000,
          })
  });
}
const submitPdf = async (f) => {
  const formData = new FormData();
  formData.append('file', f);
  await axios.put(`https://fectzc9e60.execute-api.ap-northeast-1.amazonaws.com/v1/woodlink-file-upload/${f.name}`,
  formData,
    {
      headers: {
        'Content-Type': 'application/pdf'
      },
    }
  ).then(function(){
    totalFile++;
    toast.add({
            severity: 'success',
            summary: f.name + 'をアップロードしました',
            detail: f.name + 'が保存されました。',
            life: 10000,
          })
  })
  .catch(function(){
    toast.add({
            severity: 'error',
            summary: 'エラー',
            detail: 'サーバーからデータを取得できません。',
            life: 10000,
          })
  });
}

// hàm này đợi đến khi upload xong hết thì mới reload page
let totalFile = 0;
const waitForUploadComplete = async() => {
  while (totalFile !== listFile.value.length) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Chờ 1 giây
  }
  setTimeout(() => {location.reload()}, 2000);
}

// Khối code xử lý update
const toast = useToast()
const emit = defineEmits(['close'])
const closeDialog = async () => {
  // console.log('clone', from)
  // console.log('no clone', objData.data.from)
  // console.log(dateBeforeParse.value)
  if (objData.data.mainProcess !== mainProcess || objData.data.from !== from) {
    objData.eleminate = { mainProcess, from }
    const isOK = validateObj(objData);
    if (isOK) {
      await axios
        .post("/updatedelete", objData)
        .then(() => {
          emit('close')
          toast.add({
            severity: 'success',
            summary: '編集しました',
            detail: 'データが編集されました。',
            life: 10000,
          })
        })
        .catch(() => {
          emit('close')
          toast.add({
            severity: 'error',
            summary: 'エラー',
            detail: 'サーバーからデータを取得できません。',
            life: 10000,
          })
        });
    } else {
      toast.add({
        severity: 'error',
        summary: 'エラー',
        detail: '情報を全部入れなければなりません。',
        life: 10000,
      })
    }
  } else {
    const isOK = validateObj(objData);
    if (isOK) {
      await axios
        .post("/update", objData)
        .then(() => {
          emit('close')
          toast.add({
            severity: 'success',
            summary: '編集しました',
            detail: 'データが編集されました。',
            life: 10000,
          })
        })
        .catch(() => {
          emit('close')
          toast.add({
            severity: 'error',
            summary: 'エラー',
            detail: 'サーバーからデータを取得できません。',
            life: 10000,
          })
        });
    } else {
      toast.add({
        severity: 'error',
        summary: 'エラー',
        detail: '情報を全部入れなければなりません。',
        life: 10000,
      })
    }
  }
}

const saveData = async () => {
  const isOK = validateObj(objData);
  if (isOK) {
    document.getElementById("my-modal2").checked = true;
    await axios
      .post("/add", objData)
      .then(() => {
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
};
const printPaper = () => {
  window.print();
};
const resetObjData = async () => {
  document.getElementById("my-modal").checked = false;
  const isOK = validateObj(objData);
  await saveData();
  if (isOK && listFile.value?.length) {
    linkUploadButtonToThisButton()
    waitForUploadComplete()
  }
  if (isOK && !listFile.value?.length) location.reload() 
  // else return
};
</script>

<style lang="scss" scoped>
.move-left {
  transform: translate(-50%, 0);
}

.p-radiobutton {
  margin-top: 3px;
}

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
  }
}
</style>
<style lang="scss">
.day-diary {
  .p-fileupload-file {
    img {
      display: none;
    }
  }
}
</style>
