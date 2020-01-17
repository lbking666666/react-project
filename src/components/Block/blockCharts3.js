//交付信息组件
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss'
//引入echart
import echarts from 'echarts/lib/echarts';
//引入饼状图
import 'echarts/lib/chart/pie';
//引入柱状图
import 'echarts/lib/chart/bar';
//引入提示框
import 'echarts/lib/component/tooltip';

export default class Chart1Block extends Component {
  UNSAFE_componentWillReceiveProps(props) { //组件更新
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      this.chartLoad(props.chartsData)
    }
  }
  //点击跳转
  goUrl = (data) => {
    let params = {
      urlid: 'DmPlan',
      dmmId: '',
      dmStatus: '',
      year: '',
      ...data
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let categories = [];
    let lineArr = data.delivery,
      pieArr = data.planeType;
    for (let i = 0; i < lineArr.length; i++) {

      categories.push(lineArr[i].name)
    }
    let charts = echarts.init(document.getElementById('blockCharts3'));
    charts.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: (params, ticket, callback) => {
          if (params.seriesType === 'bar') { //柱状图
            return (params.name + ': <b style="color:#ff6261">' + params.value + '</b>架')
          } else if (params.seriesType === 'pie') { //饼状图
            return (params.name + ': <b style="color:#07e5ff">' + params.value + '</b>架 占比: <b style="color:#ff6261">' + params.percent + '</b>%')
          }
        }
      },
      color: ['#0394d8', '#ff6261', '#ffc000', '#1eab8f', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
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
        width: '50%',
        bottom: 5,
        left: 5,
        containLabel: true
      }],
      series: [{
        type: 'bar',
        data: lineArr,
        label: {
          show: true,
          position: 'top'
        },
        center: ['25%', '50%'],
        barWidth: 20,
      }, {
        type: 'pie',
        data: pieArr,
        center: ['75%', '50%'],
        label: {
          normal: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#fff'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        }
      }]
    })
    //点击事件
    let that = this
    charts.on('click', function(params) {
      if (params.seriesType === 'bar') {
        let arr = { '未铅封': 1, '待用户接收': 2, '正交付': 3, '已交付': 4 }
        let data = {
          dmStatus: arr[params.data.name]
        }
        that.goUrl(data)
      } else if (params.seriesType === 'pie') {
        let data = {
          dmmId: params.data.id
        }
        that.goUrl(data)
      }
    });
    //响应式
    window.addEventListener("resize", () => { charts.resize(); });
  }
  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={ loading }>
        <div className="blockCharts">
          <div id="blockCharts3" className="charts"></div>
        </div>
      </Spin>
    )
  }
}
