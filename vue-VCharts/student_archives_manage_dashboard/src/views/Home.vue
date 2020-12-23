<template>
    <div class="home">
      <div class="chart-wrap">
       <div class="chart">
        <ve-histogram :data="chartData" :settings="chartSetting"></ve-histogram>
       </div>
      </div>
      <div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    this.chartSetting = {
      metrics: ['访问人数', '查询次数'],
      dimension: ['日期']
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户'],
        rows: [
          { '日期': 'Mon', '访问人数': 1393, '查询次数': 1093 },
          { '日期': 'Tue', '访问人数': 3530, '查询次数': 3230 },
          { '日期': 'Wed', '访问人数': 2923, '查询次数': 2623 },
          { '日期': 'Thu', '访问人数': 1723, '查询次数': 1423 },
          { '日期': 'Fri', '访问人数': 3792, '查询次数': 3492 },
          { '日期': 'Sat', '访问人数': 4593, '查询次数': 4293 },
          { '日期': 'Sun', '访问人数': 1281, '查询次数': 3391 }
        ]
      }
    }
  }
}
</script>

<style scoped>
.home{
  width:100%;
}
.chart-wrap{
  text-align: center;
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 1px 2px 3px 2px #efefef;
  border-radius: 10px;
  padding:30px;
}
  .chart{
    width:800px;
    margin:0 auto;
  }
</style>
