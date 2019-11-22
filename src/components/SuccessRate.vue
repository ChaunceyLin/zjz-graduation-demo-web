<template>
  <div class="successRateSection">
    <v-chart :options="pie" style="margin:0 auto;"></v-chart>
  </div>
</template>

<script>
import Echarts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/legendScroll";
export default {
  components: {
    "v-chart": Echarts
  },
  data() {
    return {
      pie: {
        title: {
          text: "请求结果占比",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}-{b}:{c}({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: ["成功", "失败", "进行中"]
        },
        series: [
          {
            name: "请求结果",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { value: 123, name: "成功" },
              { value: 223, name: "失败" },
              { value: 312, name: "进行中" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: ["#87d068", "#c11415", "#2db7f5"]
      }
    };
  }
};
</script>

<style lang="css" scoped>
.successRateSection {
  width: 100%;
  height: 400px;
}
</style>





