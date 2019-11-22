<template>
  <div class="requestOperationSection">
    <h3>操作</h3>
    <div>
      <a-row>
        <a-col :span="12">
          <a-slider :min="1" :max="500" v-model="requestNumber" />
        </a-col>
        <a-col :span="4">
          <a-input-number :min="1" :max="500" style="marginLeft: 16px" v-model="requestNumber" />
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <a-button type="primary" @click="sendRequest">发送请求</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { Row, Col, Slider, InputNumber } from "ant-design-vue";
import axios from "axios";
export default {
  components: {
    aRow: Row,
    aCol: Col,
    aSlider: Slider,
    aInputNumber: InputNumber
  },
  name: "",
  data() {
    return {
      requestNumber: 1
    };
  },
  methods: {
    sendRequest: function() {
      for (let i = 0; i < this.requestNumber; i++) {
        axios
          .get("https://www.baidu.com", {})
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.requestOperationSection {
  width: 90%;
  height: 400px;
  margin: 0 auto;
}
</style>