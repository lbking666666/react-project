//外场故障组件
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss'
//引入echart
import echarts from 'echarts/lib/echarts';
//引入饼状图
import 'echarts/lib/chart/pie';
//引入标题
import 'echarts/lib/component/title';
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
      urlid: 'IrpmAmClaimSheetInfo',
      debugeDate: '',
      supplier: '',
      ...data
    }
    this.props.openWin(params)
  }

  //图表展示
  chartLoad = (data) => {
    let chartsData1 = [{
      'name': '已完成',
      'value': Number(data.faultSituation.done)
    }, {
      'name': '未完成',
      'value': Number(data.faultSituation.doing)
    }];
    let chartsData2 = [{
      'name': '122厂故障',
      'value': Number(data.faultLiability.myFault)
    }, {
      'name': '配套供应商故障',
      'value': Number(data.faultLiability.otherFault)
    }]
    //判断是否为大屏
    let isBigScreen = (window.screen.width > 1920) ? true : false
    let charts = echarts.init(document.getElementById('blockCharts2'));
    charts.setOption({
      title: [{
        text: '通报航材',
        x: '25%',
        textAlign: 'center',
        y: '85%',
        textStyle: {
          color: '#fff',
          fontSize: isBigScreen ? 15 : 12
        }
      }, {
        text: '销售航材',
        x: '75%',
        textAlign: 'center',
        y: '85%',
        textStyle: {
          color: '#fff',
          fontSize: isBigScreen ? 15 : 12
        }
      }],
      tooltip: {
        trigger: 'item',
        formatter: '{b} : <b style="color:#07e5ff">{c}</b> 占比：<b style="color:#ff6261">{d}</b>%'
      },
      color: ['#0394d8', '#ff6261', '#ffc000', '#1eab8f'],
      series: [{
        type: 'pie',
        data: chartsData1,
        center: ['25%', '48%'],
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
      }, {
        type: 'pie',
        data: chartsData2,
        center: ['75%', '48%'],
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
      let data = {}
      if (params.name === '未完成') {
        data = {
          debugeDate: 2
        }
      } else if (params.name === '已完成') {
        data = {
          debugeDate: 1
        }
      } else if (params.name === '配套供应商故障') {
        data = {
          supplier: 0
        }
      } else if (params.name === '122厂故障') {
        data = {
          supplier: 122
        }
      }
      that.goUrl(data)
    });
    //响应式
    window.addEventListener("resize", () => { charts.resize(); });
  }
  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={ loading }>
        <div className="blockCharts">
          <div id="blockCharts2" className="charts"></div>
        </div>
      </Spin>
    )
  }
}
