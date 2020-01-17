//机群占比统计组件
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss'
//引入echart
import echarts from 'echarts/lib/echarts';
//引入饼状图
import 'echarts/lib/chart/pie';
//引入提示框
import 'echarts/lib/component/tooltip';

export default class Chart1Module extends Component {
  UNSAFE_componentWillReceiveProps(props) { //组件更新
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      this.chartLoad(props.chartsData)
    }
  }
  //点击跳转
  goUrl = (data) => {
    let params = {
      urlid: 'fmPlaneInfo',
      serialId: '',
      modelId: '',
      ...data
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let charts = echarts.init(document.getElementById('charts1'));
    charts.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : <b style="color:#07e5ff">{c}</b>架 占比：<b style="color:#ff6261">{d}</b>%'
      },
      color: ['#0394d8', '#ff6261', '#ffc000', '#1eab8f', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
      series: [{
        name: '机型',
        type: 'pie',
        data: data,
        center: ['50%', '50%'],
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
        },
      }]
    });
    //响应式
    window.addEventListener("resize", () => { charts.resize(); });
    //点击事件
    let that = this
    charts.on('click', function(params) {
      let data = {
        serialId: params.data.id
      }
      that.goUrl(data)
    });
  }
  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={ loading }>
         <div className="charts-module border-box">
          <header className="header">机群占比统计</header>
          <main className="body">
             <div id="charts1" className="charts"></div>
          </main>
         </div>
      </Spin>
    )
  }
}
