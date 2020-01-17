//返修周期统计组件
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss'
//引入echart
import echarts from 'echarts/lib/echarts';
//引入柱状图
import 'echarts/lib/chart/bar';
//引入提示框
import 'echarts/lib/component/tooltip';

export default class Chart7Module extends Component {
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
      supplierId: '',
      ...data
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let categories = [];
    for (let i = 0; i < data.length; i++) {
      categories.push(data[i].name)
    }
    let charts = echarts.init(document.getElementById('charts7'));
    charts.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: (params, ticket, callback) => {
          return (params.name + ':' + params.value + '天')
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
          interval: 0,
          rotate: 30,
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
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'top'
        },
        center: ['50%', '50%'],
      }]
    });
    //点击事件
    let that = this
    charts.on('click', function(params) {
      let data = {
        modelId: that.props.chartId,
        supplierId: params.data.id,
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
          <header className="header">返修周期统计</header>
          <main className="body">
             <div id="charts7" className="charts"></div>
          </main>
         </div>
      </Spin>
    )
  }
}
