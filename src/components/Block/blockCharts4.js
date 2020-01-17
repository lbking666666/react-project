//客户需求任务监控组件
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
      urlid: 'custNeed',
      busState: '',
      requestType: '',
      ...data,
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let categories = [];
    let lineArr1 = data.line.doing,
      lineArr2 = data.line.done,
      pieArr = data.ratio;
    for (let i = 0; i < lineArr1.length; i++) {
      categories.push(lineArr1[i].name)
    }

    let charts = echarts.init(document.getElementById('blockCharts4'));
    charts.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: (params, ticket, callback) => {
          if (params.seriesType === 'bar') { //柱状图
            return (params.name + '<br/>' + params.seriesName + ':' + params.value + '项')
          } else if (params.seriesType === 'pie') { //饼状图
            return (params.name + ': <b style="color:#07e5ff">' + params.value + '</b>项 占比: <b style="color:#ff6261">' + params.percent + '</b>%')
          }
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
        width: '50%',
        bottom: 5,
        left: 5,
        containLabel: true
      }],
      series: [{
        type: 'bar',
        data: lineArr1,
        center: ['25%', '50%'],
        barWidth: 40,
        name: '未完成',
        stack: '投产信息',
      }, {
        type: 'bar',
        barGap: '-100%',
        barWidth: 40,
        data: lineArr2,
        center: ['25%', '50%'],
        name: '已完成',
        stack: '投产信息',
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
      let arr = { '航材支援': 1, '技术支援': 2, '其他': 3 }
      let status = { '未完成': 1, '已完成': 2 }
      if (params.seriesType === 'bar') {
        let data = {
          requestType: arr[params.name],
          busState: status[params.seriesName]
        }
        that.goUrl(data)
      } else if (params.seriesType === 'pie') {
        let data = {
          busState: status[params.name]
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
          <div id="blockCharts4" className="charts"></div>
        </div>
      </Spin>
    )
  }
}
