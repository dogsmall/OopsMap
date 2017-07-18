<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="3">
        <el-select v-model="year" placeholder="请选择年份">
          <el-option v-for="item in years" :key="item.lable" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select v-model="quarter" placeholder="请选择季度">
          <el-option v-for="item in quarters" :key="item.label" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" icon="search" @click="submit">搜索</el-button>
      </el-col>
    </el-row>
  
    <div id="allmap">
    </div>
  
  </div>
</template>

<script>
// import selectyear from './select'
import axios from 'axios'
export default {
  name: 'hello',
  data() {
    return {
      years: [{
        value: '2016',
        label: '2016'
      }, {
        label: '2017',
        value: '2017'
      }, {
        label: '2018',
        value: '2018'
      }],
      year: '',
      quarters: [{
        label: '1',
        value: '1'
      }, {
        label: '2',
        value: '2'
      }, {
        label: '3',
        value: '3'
      }, {
        label: '4',
        value: '4'
      }],
      quarter: ''
    }
  },
  components: {
  },
  mounted() {
    var map = new BMap.Map('allmap')    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
    map.setCurrentCity('北京')          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true)     // 开启鼠标滚轮缩放
  },
  methods: {
    async submit() {
      let s = await axios.get('/map', {
        params: {
          year: this.year,
          quarter: this.quarter
        }
      })
      console.log(s)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#allmap {
  width: 100%;
  height: 800px
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
