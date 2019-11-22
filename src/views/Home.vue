<template>
  <div>
    <a-row>
      <a-col :span="12">
        <success-rate></success-rate>
      </a-col>
      <a-col :span="12">
        <request-statistic></request-statistic>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <request-list></request-list>
      </a-col>
      <a-col :span="12">
        <request-operation></request-operation>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { Row, Col } from "ant-design-vue";
import successRate from "../components/SuccessRate";
import requestStatistic from "../components/RequestStatistics";
import requestList from "../components/RequestList";
import requestOperation from "../components/RequestOperation";
export default {
  components: {
    aRow: Row,
    aCol: Col,
    successRate: successRate,
    requestStatistic: requestStatistic,
    requestList: requestList,
    requestOperation: requestOperation
  },
  name: "home"
};
</script>
