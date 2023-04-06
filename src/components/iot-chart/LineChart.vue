<template>
  <div class="w-full mt-4">
      <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/export-data";
import exportingInit from "highcharts/modules/exporting";
import axios from 'axios';
import { useToast } from "primevue/usetoast";
import { reactive, watch } from 'vue';

exportingInit(Highcharts);
Exporting(Highcharts);
Highcharts.setOptions({
  chart: {
    type: 'area',
    zoomType: 'x',
    animation: true
  }, 
  credits: false
})
export default {
  props: {
    name: String,
    date: String
  },
  components: {
    highcharts: Chart,
  },
  setup(props) {
    const toast = useToast();
    const chartOptions = reactive({
        title: {
          text: ''
        },
        xAxis: {
          categories: []        
        },
        yAxis: {
            title: {text:'cac'},
            min: 0,
            max: 80,
            tickInterval: 5
        },      
        series: [{
          name:'lon',
          color: 'rgba(106,166,46,.9)',
          data: []
        }],
      })

    const fetchCSV = async () => {
      await axios.get(`https://dust-bucket-1.s3.ap-northeast-1.amazonaws.com/${props.name}-${props.date}.csv`)
      .then((response) => parseCSV(response.data))
      .catch ((err) => {
        toast.add({ severity: 'error', summary: 'エラー', detail: `集塵機${props.name.replace(/[^0-9]/g, '')}のデータがありません。`, life: 3000 });
      })
    }

    const parseCSV = (f) => {
      const arr = f.split('\r\n')
      const formatArr = arr.map( x =>  x.split(','))
      const xData = formatArr.map( x => x[0])
      const yData = formatArr.map( x => parseFloat(x[1]))
      chartOptions.xAxis.categories = xData.splice(1)
      chartOptions.series[0].data = yData.splice(1)
    }
    fetchCSV()

    watch(() => props.date, () => fetchCSV())

    return { chartOptions, fetchCSV }
  }
}
</script>

<style>
/* input[type="date"] {
  background-color: #0080ff;
  padding: 15px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 50%;
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 5px;
} */
</style>