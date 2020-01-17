//航材投产统计组件
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

export default class Chart8Module extends Component {
  UNSAFE_componentWillReceiveProps(props) { //组件更新
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      this.chartLoad(props.chartsData)
    }
  }
  //点击跳转
  goUrl = (data) => {
    let params = {
      urlid: 'SmCommandNoShowVInfo',
      productionOrderNo: '',
      planType: '', // (point.name === '供应件') ? 1 : 0,
      aogOrNOt: '', //(point.stack === 'AOG') ? 1 : 2,
      ...data
    }
    this.props.openWin(params)
  }
  //图表展示
  chartLoad = (data) => {
    let arr1 = [],
      arr2 = [],
      arr3 = [];
    let arr1In = [],
      arr2In = [],
      arr3In = [];
    let arr1Out = [],
      arr2Out = [],
      arr3Out = [];
    if (data[0].list) {
      arr1 = data[0].list;
      for (let i = 0; i < arr1.length; i++) {
        let paramsIn = {
          name: arr1[i].name,
          value: 0,
        }
        for (let j = 0; j < arr1[i].list.length; j++) {
          paramsIn.value += Number(arr1[i].list[j].value)
          let params = {
            name: arr1[i].list[j].name,
            status: arr1[i].name,
            value: arr1[i].list[j].value
          }
          arr1Out.push(params)
        }
        arr1In.push(paramsIn)
      }
    }
    if (data[1].list) {
      arr2 = data[1].list;
      for (let i = 0; i < arr2.length; i++) {
        let paramsIn = {
          name: arr2[i].name,
          value: 0,
        }
        for (let j = 0; j < arr2[i].list.length; j++) {
          paramsIn.value += Number(arr2[i].list[j].value)
          let params = {
            name: arr2[i].list[j].name,
            status: arr2[i].name,
            value: arr2[i].list[j].value
          }
          arr2Out.push(params)
        }
        arr2In.push(paramsIn)
      }
    }
    if (data[2].list) {
      arr3 = data[2].list;
      for (let i = 0; i < arr3.length; i++) {
        let paramsIn = {
          name: arr3[i].name,
          value: 0,
        }
        for (let j = 0; j < arr3[i].list.length; j++) {
          paramsIn.value += Number(arr3[i].list[j].value)
          let params = {
            name: arr3[i].list[j].name,
            status: arr3[i].name,
            value: arr3[i].list[j].value
          }
          arr3Out.push(params)
        }
        arr3In.push(paramsIn)
      }
    }

    let charts = echarts.init(document.getElementById('charts8'));
    charts.setOption({
      title: [{
        text: '服务航材',
        x: '16.666%',
        subtext: '',
        textAlign: 'center',
        y: '76%',
        textStyle: {
          color: '#fff',
          fontSize: 18
        }
      }, {
        text: '通报航材',
        x: '50%',
        textAlign: 'center',
        y: '76%',
        textStyle: {
          color: '#fff',
          fontSize: 18
        }
      }, {
        text: '销售航材',
        x: '82.666%',
        textAlign: 'center',
        y: '76%',
        textStyle: {
          color: '#fff',
          fontSize: 18
        }
      }],
      tooltip: {
        trigger: 'item',
        formatter: (params, ticket, callback) => {
          return (params.seriesName + '<br>' + (params.data.status ? params.data.status + '<br>' : '') + params.name + ': <b style="color:#07e5ff">' + params.value + '</b>件 占比: <b style="color:#ff6261">' + params.percent + '</b>%')
        }
      },
      color: ['#0394d8', '#ff6261', '#ffc000', '#1eab8f'],
      series: [{
        name: '服务航材',
        type: 'pie',
        data: arr1In,
        radius: [0, '30%'],
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        center: ['16.666%', '40%']
      }, {
        name: '服务航材',
        type: 'pie',
        data: arr1Out,
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        radius: ['40%', '55%'],
        center: ['16.666%', '40%']
      }, {
        name: '通报航材',
        type: 'pie',
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        data: arr2In,
        radius: [0, '30%'],
        center: ['50%', '40%'],
      }, {
        name: '通报航材',
        type: 'pie',
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        data: arr2Out,
        radius: ['40%', '55%'],
        center: ['50%', '40%'],
      }, {
        name: '销售航材',
        type: 'pie',
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        radius: [0, '30%'],
        data: arr3In,
        center: ['82.666%', '40%'],
      }, {
        name: '销售航材',
        type: 'pie',
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        data: arr3Out,
        radius: ['40%', '55%'],
        center: ['82.666%', '40%'],
      }]
    });
    //点击事件
    let that = this
    charts.on('click', function(params) {
      let arr = { '服务航材': 1, '通报航材': 2, '销售航材': 3 }
      let data = {}
      if (params.name === '紧急') {
        data = {
          planType: arr[params.seriesName],
          aogOrNOt: 1,
        }
      } else if (params.name === '一般') {
        data = {
          planType: arr[params.seriesName],
          aogOrNOt: 2,
        }
      } else if (params.name === '投产中') {
        if (params.data.status === '紧急') {
          data = {
            planType: arr[params.seriesName],
            aogOrNOt: 1,
            productionOrderNo: 0,
          }
        } else if (params.data.status === '一般') {
          data = {
            planType: arr[params.seriesName],
            aogOrNOt: 2,
            productionOrderNo: 0,
          }
        }
      } else if (params.name === '已交付') {
        if (params.data.status === '紧急') {
          data = {
            planType: arr[params.seriesName],
            aogOrNOt: 1,
            productionOrderNo: 1,
          }
        } else if (params.data.status === '一般') {
          data = {
            planType: arr[params.seriesName],
            aogOrNOt: 2,
            productionOrderNo: 1,
          }
        }
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
          <header className="header">航材投产统计</header>
          <main className="body">
             <div id="charts8" className="charts"></div>
          </main>
         </div>
      </Spin>
    )
  }
}
