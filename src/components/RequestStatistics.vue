<template>
  <div class="requestStatistics">
    <v-chart :options="line" style="margin:0 auto;"></v-chart>
  </div>
</template>

<script>
import Echarts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/axis";
import store from "../store";
setInterval(() => {
  store.dispatch("setsuccessRequestDataAsync");
}, 10000);

export default {
  name: "requestStatistics",
  components: {
    "v-chart": Echarts
  },
  data() {
    return {
      line: {
        title: {
          text: "请求数量分析",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: store.state.successRequestData
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
.requestStatistics {
  width: 100%;
  height: 400px;
}
</style>