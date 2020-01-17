//机型故障统计组件
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss'
//引入echart
import echarts from 'echarts/lib/echarts';
//引入柱状图
import 'echarts/lib/chart/bar';
//引入提示框
import 'echarts/lib/component/tooltip';

export default class Chart5Module extends Component {
  UNSAFE_componentWillReceiveProps(props) { //组件更新
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      this.chartLoad(props.chartsData)
    }
  }

  //点击跳转
  goUrl = (data) => {
    let params = {
      urlid: 'IrpmAmClaimSheetInfo',
      modelId: '',
      serialId: '',
      supplier: '',
      queryType: 'serSheet',
      ...data
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let categories = [];
    let arr1 = data[0].list,
      arr2 = data[1] ? data[1].list : []
    let arr = (arr1.length >= arr2.length) ? arr1 : arr2
    for (let i = 0; i < arr.length; i++) {
      categories.push(arr[i].name)
    }

    let charts = echarts.init(document.getElementById('charts5'));
    charts.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: (params, ticket, callback) => {
          return (params.name + '<br/>' + params.seriesName + ':' + params.value + '项')
        }
      },
      color: ['#ff6261', '#0394d8'],
      xAxis: [{
        type: 'category',
        data: categories,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        },
        axisLabel: {
          color: '#fff',
        },
        axisTick: {
          show: false
        }
      }],
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff',
        },
        axisTick: {
          show: false
        }
      }],
      grid: [{
        top: 15,
        width: '100%',
        bottom: 5,
        left: 5,
        containLabel: true
      }],
      series: [{
        name: '供应商故障',
        type: 'bar',
        stack: '投产信息',
        data: arr1,
        center: ['50%', '50%'],
      }, {
        type: 'bar',
        barGap: '-100%',
        data: arr2,
        center: ['50%', '50%'],
        name: '122厂故障',
        stack: '投产信息',
      }, ]
    });
    //点击事件
    let that = this
    charts.on('click', function(params) {
      let data = {
        serialId: params.data.id,
        zjtw: that.props.chartId,
        supplier: (params.seriesName.indexOf('122') > -1) ? 122 : 0
      }
      that.goUrl(data)
    });
    //响应式
    window.addEventListener("resize", () => { charts.resize(); });
  }
  render() {
    const { loading } = this.props
    return (
      <Spin spinning={ loading }>
         <div className="charts-module border-box">
          <header className="header">机型故障统计</header>
          <main className="body">
             <div id="charts5" className="charts"></div>
          </main>
         </div>
      </Spin>
    )
  }
}
