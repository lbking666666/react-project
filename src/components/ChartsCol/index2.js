//航材投产流程组件
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

export default class Chart6Module extends Component {
  UNSAFE_componentWillReceiveProps(props) { //组件更新
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      this.chartLoad(props.chartsData)
    }
  }
  //点击跳转
  goUrl = (data) => {
    let params = {
      urlid: 'bpm',
      deptid: '',
      ifRemind: '',
      ifOver: '2',
      ifFinish:'',
      bpmType:'2',
      ...data
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let chartData2 = [],
      chartData3 = [];
    let categories = [];
    let lineData = data.lineData,
      pieData = data.pieData;
    for (let i = 0; i < lineData.length; i++) {
      categories.push(lineData[i].name)
    }
    for (let i = 0; i < pieData.length; i++) {
      let param = {
        name: pieData[i].name,
        value: Number(pieData[i].value),
      }
      chartData2.push(param);
       if(pieData[i].list){
          let pieList = pieData[i].list;
          for (let j = 0; j < pieList.length; j++) {
            let itemParams = {
              value: Number(pieList[j].value),
              status:pieData[i].name,
              name: pieList[j].name
            }
            chartData3.push(itemParams);
          }
        }
    }

    let charts = echarts.init(document.getElementById('chartscol2'));
    charts.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: (params, ticket, callback) => {
          if (params.seriesType === 'bar') {
            return (params.name + ':' + params.value + '项')
          } else if (params.seriesType === 'pie') {
            return ((params.data.status?params.data.status+'<br>':'' )+ params.name + ': <b style="color:#07e5ff">' + params.value + '</b>项 占比: <b style="color:#ff6261">'+params.percent+'</b>%')
          }
        }
      },
      color: ['#ff6261', '#0394d8', '#ffc000', '#1eab8f'],
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
            rotate: 30
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
        data: lineData,
        center: ['25%', '50%'],
        barWidth: 20,
        label: {
          show: true,
          position: 'top'
        },
      }, {
        type: 'pie',
        radius: [0, '30%'],
        data: chartData2,
        center: ['75%', '50%'],
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
      }, {
        type: 'pie',
        data: chartData3,
        radius: ['40%', '55%'],
        center: ['75%', '50%'],
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
      }]
    })
    //点击事件
    let that = this
    charts.on('click', function(params) {
      let data = {}
      if (params.seriesType === 'bar') {
        data = {
          deptid:params.data.id
        }
      } else if (params.seriesType === 'pie') {
        if(params.name === '未完成'){
          data={
            ifFinish:1
          }
        }else if(params.name === '已完成'){
          data = {
            ifFinish:2
          }
        }else if(params.name === '未提醒' || params.name === '未通知'){
          if(params.data.status === '未完成'){
            data={
              ifFinish:1,
              ifRemind:1,
            }
          }else{
            data={
              ifFinish:1,
              ifRemind:1
            }
          }
        }else if(params.name === '已提醒' || params.name === '已通知'){
          if(params.data.status === '未完成'){
            data={
              ifFinish:1,
              ifRemind:2,
            }
          }else{
            data={
              ifFinish:1,
              ifRemind:2
            }
          }
        }
      }
      that.goUrl(data)
    });
    //响应式
    window.addEventListener("resize", () => { charts.resize(); });
  }
  render() {
    const { loading, chartsData } = this.props
    return (
      <Spin spinning={ loading }>
         <div className="charts-module border-box">
            <header className="header">航材投产流程</header>
            <main className="body">
            <div className="notice-text">
                <span>未提醒</span><span className='num red' onClick={(e)=>{this.goUrl({ifRemind:1}) }}>{chartsData.titleData?(chartsData.titleData.todo?chartsData.titleData.todo:0):0}</span>
                <span>已提醒</span><span className='num red' onClick={(e)=>{this.goUrl({ifRemind:2}) }}>{ chartsData.titleData?(chartsData.titleData.done?chartsData.titleData.done:0):0}</span>
              </div>
              <div className="charts-col">
                 <div id="chartscol2" className="charts"></div>
               </div>
            </main>
         </div>
      </Spin>
    )
  }
}
