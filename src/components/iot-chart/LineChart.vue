<template>
  <div class="w-full">
      <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/export-data";
import exportingInit from "highcharts/modules/exporting";
import axios from 'axios';
import { reactive } from 'vue';
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
  components: {
    highcharts: Chart
  },
  setup() {
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
      await axios.get('https://dust-bucket-1.s3.ap-northeast-1.amazonaws.com/dust4-2023-03-30.csv')
      .then((response) => parseCSV(response.data));
      // await axios.get('https://dust-bucket-1.s3.ap-northeast-1.amazonaws.com/dust7-2023-03-30.csv')
      // .then((response) => this.parseCSV(response.data));
    }

    const parseCSV = (f) => {
      const arr = f.split('\r\n')
      const formatArr = arr.map( x =>  x.split(','))
      const xData = formatArr.map( x => x[0])
      const yData = formatArr.map( x => parseFloat(x[1]))
      chartOptions.xAxis.categories = xData.splice(1)
      chartOptions.series[0].data = yData.splice(1)
      // this.chartOptionsArray[1] = this.chartOptions
      // this.chartOptionsArray.push(chartOptions)
      // console.log(this.chartOptionsArray)
      // this.chartOptionsArray.dust1 = Object.assign({}, chartOptions);
      // this.chartOptionsArray.splice(0,1,this.chartOptions);
      // this.chartOptionsArray[0] = JSON.parse(JSON.stringify(this.chartOptions));
      // this.chartOptionsArray.splice(0,1,this.chartOptions);
    }

    fetchCSV()
    return { chartOptions }
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