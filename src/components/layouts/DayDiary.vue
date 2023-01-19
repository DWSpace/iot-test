<template>
    <div class="max-w-4xl relative left-1/2 myDivToPrint tudinhnghia bg-white p-24 md:p-5 font-NotoJP">
        <div class="text-center font-bold text-2xl">工場（修理）実施情報事</div>
        <div class="text-right font-medium text-xl pt-5">ウッドリンク株式会社</div>
        <div class="text-right font-medium text-xl">住宅資材事業部</div>
        <div class="text-left font-medium text-xl pt-7">名業者の方へ願い　
        </div>
        <div class="text-center font-medium text-xl p-5">
            この情報書は工場（修理）後了後。下の頂日を記入の上事務所へ必ず提出してください。請求書と照合し、確認して上でお支払い致します。

        </div>

        <form class="pt-7">
            <div class="grid gap-5 mb-6 grid-cols-6 md:grid-cols-1">
                <div class="grid w-80 md:grid-cols-1 items-center justify-items-start">
                    <label for="first_name" class="mb-2 text-xl font-medium text-gray-900">実施業者名</label>
                </div>
                <div class="col-span-5 md:grid-cols-1">
                    <input type="text" id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>


                <div class="grid md:grid-cols-1 items-center justify-items-start">
                    <label for="last_name" class="mb-2 text-xl font-medium text-gray-900">実施日</label>
                </div>
                <div class="col-span-5 md:grid-cols-1">
                    <input type="datetime-local" id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        lang="ja-JP" required>
                </div>


                <div class="grid md:grid-cols-1 items-center justify-items-start">
                    <label for="company" class="mb-2 text-xl font-medium text-gray-900">設備名称</label>
                </div>
                <div class="col-span-5 md:grid-cols-1">
                    <input type="text" id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>


                <div class="grid md:grid-cols-1 items-center justify-items-start">
                    <label for="phone" class="mb-2 text-xl font-medium text-gray-900">故障原因</label>
                </div>
                <div class="col-span-5 md:grid-cols-1">
                    <input type="text" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>


                <div class="grid md:grid-cols-1 items-center justify-items-start">
                    <label for="website" class="mb-2 text-xl font-medium text-gray-900">交換部品</label>
                </div>
                <div class="col-span-5 md:grid-cols-1">
                    <input type="text" id="website"
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
                    <input type="number" id="gokei"
                        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
                <div class="col-span-2 px-2">
                    <input type="number" id="koriu"
                        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
                <div class="col-span-2 px-2">
                    <input type="number" id="zairiuhi"
                        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
            </div>
            <div class="pt-7">
                <label for="seiko" class="mb-2 text-xl font-medium text-gray-900">施工内容</label>
            </div>
            <div class="pt-3">
                <textarea id="seiko"
                    class="h-48 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:border-blue-500 block w-full p-2.5"
                    required></textarea>
            </div>
            <div class="grid justify-start pl-5 py-5">
                <p class="mb-2 text-base font-medium text-gray-900">名業者担当者に写真を提出し、作業完了とします。</p>
            </div>

            <div class></div>

            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">提出</button>
        </form>
    </div>
</template>

<script setup>

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