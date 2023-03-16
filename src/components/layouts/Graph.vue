<template>
  <div class="grid w-full grid-cols-2 gap-2">
    <highcharts :options="chartOptions"></highcharts>
    <highcharts :options="chartOptions"></highcharts>
    <highcharts :options="chartOptions"></highcharts>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue';
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/export-data";
import exportingInit from "highcharts/modules/exporting";
import axios from 'axios';
exportingInit(Highcharts);
Exporting(Highcharts);
Highcharts.setOptions({credits: false})
export default {
components: {
  highcharts: Chart
  },

  data() {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          zoomType: 'x'
        },
        title: {
          text: 'abcxyz'
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
        
      }
    }
  },
  async mounted(){
    await this.fetchCSV()
  },
  methods: {
    async fetchCSV(){
      await axios.get('https://dust-bucket-1.s3.ap-northeast-1.amazonaws.com/dust4-2023-03-15.csv')
      .then((response) => this.parseCSV(response.data));
    },
    parseCSV(f){
      const arr = f.split('\r\n')
      const formatArr = arr.map( x =>  x.split(','))
      const xData = formatArr.map( x => x[0])
      const yData = formatArr.map( x => parseFloat(x[1]))
      this.chartOptions.xAxis.categories = xData.splice(1)
      this.chartOptions.series[0].data = yData.splice(1)
    }
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