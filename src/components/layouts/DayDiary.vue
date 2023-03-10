<template>
    <div class="max-w-4xl relative left-1/2 myDivToPrint tudinhnghia bg-white p-24 lg:p-5 font-NotoJP">
        <p class="text-center font-bold text-2xl">工事（修理）実施報告事</p>
        <p class="text-right font-medium text-xl pt-5">ウッドリンク株式会社</p>
        <p class="text-right font-medium text-xl">住宅資材事業部</p>
        <p class="text-left font-medium text-xl pt-7">名業者の方へ</p>
        <p class="text-center font-medium text-xl p-5">
            この報告書と請求書と照合し、確認した上でお支払い致します。
        </p>
        <form class="pt-7">
            <div class="grid gap-5 mb-6 grid-cols-6 lg:grid-cols-1">
                <div class="grid w-80 lg:grid-cols-1 items-center justify-items-start">
                    <label for="first_name" class="mb-2 text-xl font-medium text-gray-900">実施業者名</label>
                </div>
                <div class="col-span-2 lg:grid-cols-1">
                    <input v-model="objData.head.company" type="text" id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
                <div class="grid pl-8 lg:grid-cols-1 items-center justify-items-start">
                    <label for="in_charge" class="mb-2 text-xl font-medium text-gray-900">担当者</label>
                </div>
                <div class="col-span-2 lg:grid-cols-1">
                    <input v-model="objData.head.repairer" type="text" id="in_charge"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>

            </div>



            <!-- <div class="grid lg:grid-cols-1 items-center justify-items-start">
                <label for="last_name" class="mb-2 text-xl font-medium text-gray-900">実施日</label>
            </div>
            <div class="col-span-5 lg:grid-cols-1">
                <input type="datetime-local" id="last_name" v-model="dateBeforeParse"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                    lang="ja-JP" required>
            </div> -->


            <div class="grid grid-cols-8 grid-flow-row grid-rows-2">
                <div class="grid col-span-2 row-start-1 row-end-4 justify-start items-center">
                    <label for="" class="mb-2 text-xl font-medium text-gray-900">実施日</label>
                </div>
                <div class="grid col-span-3 justify-center items-center">
                    <label for="time-from" class="mb-2 text-xl font-medium text-gray-900">開始時間</label>
                </div>
                <div class="grid col-span-3 justify-center items-center">
                    <label for="time-to" class="mb-2 text-xl font-medium text-gray-900">終了時間</label>
                </div>
                <div class="col-span-3 px-2">
                    <input type="datetime-local" id="time-from" v-model="dateBeforeParse"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        lang="ja-JP" required>
                </div>
                <div class="col-span-3 px-2">
                    <input type="datetime-local" id="time-to" v-model="dateAfterParse"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        lang="ja-JP" required>
                </div>
            </div>

            <div class="grid gap-5 mb-6 grid-cols-6 lg:grid-cols-1 mt-4">
                <!-- <div class="grid lg:grid-cols-1 items-center justify-items-start">
                    <label for="company" class="mb-2 text-xl font-medium text-gray-900">設備名称</label>
                </div>

                <div class="col-span-5 lg:grid-cols-1 mt-4">
                    <div class="flex gap-5">
                        <div class="flex-1">
                            <select v-model="objData.body.process"
                                class="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5">
                                <option disabled selected>工程?</option>
                                <option class='text-base' v-for="(item, index) in process" :key="index">{{ item }}
                                </option>
                            </select>
                        </div>
                        <div class="flex-1">
                            <select v-model="objData.body.machinePartName"
                                class="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5">
                                <option disabled selected>設備名称?</option>
                                <option class='text-base' v-for="(item, index) in facility" :key="index">{{ item }}
                                </option>
                            </select>
                        </div>
                        <div class="flex-1">
                            <select
                                class="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5">
                                <option disabled selected>工程?</option>
                                <option class='text-base' v-for="(item, index) in process" :key="index">{{ item }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div> -->

                <div class="grid lg:grid-cols-1 items-center justify-items-start">
                    <label for="phone" class="mb-2 text-xl font-medium text-gray-900">工程</label>
                </div>
                <div class="col-span-5 lg:grid-cols-1">
                    <select v-model="objData.body.process"
                        class="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5">
                        <option class='text-base' v-for="(item, index) in process" :key="index">{{ item }}
                        </option>
                    </select>
                </div>

                <div class="grid lg:grid-cols-1 items-center justify-items-start">
                    <label for="phone" class="mb-2 text-xl font-medium text-gray-900">設備名称</label>
                </div>
                <div class="col-span-5 lg:grid-cols-1">
                    <input v-model="objData.body.reason" type="text" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>

                <div class="grid lg:grid-cols-1 items-center justify-items-start">
                    <label for="phone" class="mb-2 text-xl font-medium text-gray-900">故障原因</label>
                </div>
                <div class="col-span-5 lg:grid-cols-1">
                    <input v-model="objData.body.reason" type="text" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>

                <div class="grid lg:grid-cols-1 items-center justify-items-start">
                    <label for="website" class="mb-2 text-xl font-medium text-gray-900">交換部品</label>
                </div>
                <div class="col-span-5 lg:grid-cols-1">
                    <input v-model="objData.body.nameOfReplacedItem" type="text" id="website"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
            </div>

            <div class="grid grid-cols-8 grid-flow-row grid-rows-2">
                <div class="grid col-span-2 row-start-1 row-end-4 justify-start items-center">
                    <label for="visitors" class="mb-2 text-xl font-medium text-gray-900">工事費</label>
                </div>
                <div class="grid col-span-2 justify-center items-center">
                    <label for="gokei" class="mb-2 text-xl font-medium text-gray-900">合計</label>
                </div>
                <div class="grid col-span-2 justify-center items-center">
                    <label for="koriu" class="mb-2 text-xl font-medium text-gray-900">工料</label>
                </div>
                <div class="grid col-span-2 justify-center items-center">
                    <label for="zairiuhi" class="mb-2 text-xl font-medium text-gray-900">材料費</label>
                </div>
                <div class="col-span-2 px-2">
                    <input v-model="objData.body.total" type="number" id="gokei"
                        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
                <div class="col-span-2 px-2">
                    <input v-model="objData.body.laborFee" type="number" id="koriu"
                        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
                <div class="col-span-2 px-2">
                    <input v-model="objData.body.itemCost" type="number" id="zairiuhi"
                        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
            </div>
            <div class="pt-7">
                <label for="seiko" class="mb-2 text-xl font-medium text-gray-900">施工内容</label>
            </div>
            <div class="pt-3">
                <textarea v-model="objData.body.comment" id="seiko"
                    class="h-48 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:border-blue-500 block w-full p-2.5"
                    required></textarea>
            </div>
        </form>
        <button @click="log()"
            class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">保存
        </button>
    </div>
    <!-- Save successfully -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box max-w-xs">
            <h3 class="font-bold text-lg text">保存しました。</h3>
            <p class="py-4">維持で入力する又は戻る
            </p>
            <div class="flex justify-between">
                <button class="flex btn">Button</button>
                <label for="my-modal" class="btn">Yay!</label>
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
            <div class="alert alert-error shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>エラーが発生しました。もう一度お試しください。</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import dayjs from 'dayjs';

const dateBeforeParse = ref(dayjs().format('YYYY-MM-DDTHH:mm').toString());
const parseBeforeDate = computed(() => {
    return dayjs(dateBeforeParse.value).unix()
})

const dateAfterParse = ref(dayjs().format('YYYY-MM-DDTHH:mm').toString());
const parseAfterDate = computed(() => {
    return dayjs(dateAfterParse.value).unix()
})

const objData = reactive({
    head: {
        company: '',
        repairer: '',
        from: parseBeforeDate
    },
    body: {
        to: parseAfterDate,
        process: '工程?',
        machinePartName: '',
        reason: '',
        nameOfReplacedItem: '',
        total: 0,
        laborFee: 0,
        itemCost: 0,
        comment: ''
    }
})

const process = [
    'ピッキング',
    '横架材',
    '柱材',
    'メタルジョイント',
    'モルダー内装材',
    '羽柄材',
    '合板材',
    '断熱材',
    'プレウォール'];

const facility = [
    '横架材ライン',
    '柱材ライン',
    '束ライン',
    'クロスカット',
    '木口加工機'];

function validateObj(obj) {
    const isHeadNotEmpty = Object.values(obj.head).every(x => x !== null && x !== '');
    const isBodyNotEmpty = Object.values(obj.body).every(x => x !== null && x !== '');
    const isCostNotEmpty =
        obj.body.total >= 0 ? true : false &&
            obj.body.laborFee >= 0 ? true : false &&
                obj.body.itemCost >= 0 ? true : false;
    const isProcessNotEmpty = obj.body.process != '工程?' ? true : false &&
        obj.body.machinePartName != '設備名称?' ? true : false;
    return isHeadNotEmpty && isBodyNotEmpty && isCostNotEmpty && isProcessNotEmpty
}

// const log = () => {

//     console.log(objData)
//     console.log(validateObj(objData))
// }

const log = async () => {
    const isOK = validateObj(objData)
    if (isOK) {
        document.getElementById("my-modal2").checked = true;
        await axios
            .post('/add', objData)
            .then((response) => {
                console.log(response.data)
                console.log(dayjs.unix(response.data[0].Time).format('YYYY/MM/DD HH:mm'))
                document.getElementById("my-modal2").checked = false;
                document.getElementById("my-modal").checked = true;
            })
            .catch((error) => {
                console.log(error);
                document.getElementById("my-modal-3").checked = true;
                document.getElementById("my-modal2").checked = false;
            });
    } else {
        document.getElementById("my-modal-3").checked = true;
    }

}
</script>

<style scoped>
.tudinhnghia {
    transform: translate(-50%, 0);
}

@media print {
    .myDivToPrint {
        background-color: white;
        width: 100.1%;
        position: absolute;
        top: 0;
        left: 50%;
        margin: 0;
        padding: 15px;
        font-size: 14px;
        line-height: 18px;
    }
}
</style>