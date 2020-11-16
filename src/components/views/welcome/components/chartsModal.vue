<template>
  <div class="line-chart">
    <div :id="id" :option="option"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  // 验证类型
  props: {
    id: {
      type: String,
    },
    option: {
      type: Object,
    },
  },
  watch: {
    option() {
      HighCharts.chart(this.id, this.option)
    },
  },
  mounted() {
    HighCharts.chart(this.id, this.option)
  },
}
</script>
<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 378px;
}
</style>