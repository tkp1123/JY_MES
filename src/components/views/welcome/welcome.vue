<template>
  <div class="container">
    <el-row class="panel-group">
      <el-col :xs="6" :sm="6" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetClick('apple')">
          <div class="card-panel-description">
            <div class="card-panel-text">
              <i
                class="iconfont iconfenbu"
                style="color: #528fcc; padding-right: 10px; font-size: 25px"
              ></i
              >涨跌分布
            </div>
            <div class="card-panel-num">
              <el-row>
                <el-col :span="12" class="text-red">上涨： 1844只</el-col>
                <el-col :span="12" class="text-green">下跌： 2030只</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="card-panel" @click="handleSetClick('apple')">
          <div class="card-panel-description">
            <div class="card-panel-text">
              <i
                class="iconfont iconcaizhangdie_link"
                style="color: #528fcc; padding-right: 10px; font-size: 25px"
              ></i
              >涨跌停
            </div>
            <div class="card-panel-num">
              <el-row>
                <el-col :span="12" class="text-red">涨停： 35只</el-col>
                <el-col :span="12" class="text-green">跌停： 12只</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="card-panel" @click="handleSetClick('apple')">
          <div class="card-panel-description">
            <div class="card-panel-text">
              <i
                class="iconfont iconshouyi1"
                style="color: #528fcc; padding-right: 10px; font-size: 30px"
              ></i
              >今日收益
            </div>
            <div class="card-panel-num text-red">今收益 : 2.69%</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="18" :sm="18" :lg="18" class="card-panel-col">
        <div class="card-panel-right">
          <ChartsModal :id="id" :option="option"></ChartsModal>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ChartsModal from './components/chartsModal'
export default {
  name: 'welcome',
  components: {
    ChartsModal,
  },
  data() {
    return {
      id: 'id',
      option: {
        chart: {
          type: 'column',
        },
        title: {
          text: '月平均降雨量',
        },
        xAxis: {
          categories: [
            '跌停',
            '-8%',
            '-6%',
            '-4%',
            '-2%',
            '0',
            '2%',
            '4%',
            '6%',
            '8%',
            '涨停',
          ],
          labels: {
            align: 'center',
            x: -25,
            y: 25,
          },
          tickPosition: 'outside',
          tickWidth: 1,
          tickAmount: 12,
        },
        yAxis: {
          min: 0,
          title: {
            text: '',
          },
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            borderWidth: 0,
          },
        },
        series: [
          {
            name: '东京',
            data: [
              {
                name: 'Point 1',
                color: '#59b881',
                y: 40,
              },
              {
                name: 'Point 1',
                color: '#59b881',
                y: 50,
              },
              {
                name: 'Point 1',
                color: '#59b881',
                y: 125,
              },
              {
                name: 'Point 1',
                color: '#59b881',
                y: 454,
              },
              {
                name: 'Point 1',
                color: '#59b881',
                y: 1748,
              },
              {
                name: 'Point 1',
                color: '#d75442',
                y: 1109,
              },
              {
                name: 'Point 1',
                color: '#d75442',
                y: 307,
              },
              {
                name: 'Point 1',
                color: '#d75442',
                y: 108,
              },
              {
                name: 'Point 1',
                color: '#d75442',
                y: 46,
              },
              {
                name: 'Point 1',
                color: '#d75442',
                y: 56,
              },
            ],
          },
        ],
      },
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
.panel-group {
  margin: 30px 80px;
  .card-panel-col {
    margin-bottom: 32px;
    height: 100%;
  }
  .card-panel {
    height: 126px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    .card-panel-icon-wrapper {
      float: left;
      margin: 5px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      font-weight: bold;
      text-align: center;
      margin-top: 25px;
      .card-panel-text {
        color: #000;
        font-size: 16px;
      }

      .card-panel-num {
        padding-top: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .text-red {
    color: red;
  }
  .text-green {
    color: green;
  }
  .card-panel-right {
    height: 378px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
  }
}
</style>