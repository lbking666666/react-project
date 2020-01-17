import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss';
import dotIcon from './dot.gif'
// 加载 Highmaps
let Highcharts = require('highcharts/highmaps.src.js');
//七大洲地图
let worldMap = require('./worldMap.json');
let nanjiMap = require('./nanji.json')
//国家首都经纬度
let coordinateMap = require('./coordinateMap.json');

export default class MapModule extends Component {
  UNSAFE_componentWillReceiveProps(props) {
    //在组件接收到一个新的 prop (更新后)时被调用
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      //初始化世界地图
      this.mapWorld(props.data, props.selectType);
    }
  }

  mapWorld = (data, selectType) => {
    let userData = [], //非故障集合
      serverData = [], //用户组
      faultData = []; //故障集合
    //用户数据处理
    if (data.world) {
      data.world.data.forEach(item => {
        if (coordinateMap[item.code]) {
          let params = {
            ...item,
            x: coordinateMap[item.code].x, //x
            y: coordinateMap[item.code].y, //y
            name: item.name, //城市名称
          }
          if (item.status[4] === 0) {
            userData.push(params)
          } else {
            faultData.push(params)
          }
        }
        return false;
      })
    }
    //服务组数据处理
    if (data.servers) {
      data.servers.data.forEach(item => {
        if (coordinateMap[item.code]) {
          let params = {
            ...item,
            x: coordinateMap[item.code].x, //x
            y: coordinateMap[item.code].y, //y
          }
          serverData.push(params)
        }
        return false;
      })
    }

    let dataSeries = [{ //第一层世界地图
        mapData: worldMap,
        zIndex: 1,
        type: 'map',
        joinBy: 'name',
        data: [{
          "code": "CN",
          "value": 3,
          'borderWidth': 1,
          'olor': '#0090ff',
          "name": "China"
        }],
        borderWidth: 1,
        borderColor: '#0090ff',
        color: '#0090ff',
        nullColor: '#19216a',
        showInLegend: false,
        enableMouseTracking: false,
      },
      { //第二层用户描点没有故障的
        type: 'mappoint',
        name: '用户',
        id: 2,
        data: userData,
        zIndex: 11,
        dataLabels: {
          enabled: false
        },
        marker: {
          symbol: 'circle',
          fillColor: '#fff',
        }
      },
      { //第二层用户描点有故障的
        type: 'mappoint',
        colorAxis: false,
        name: '用户',
        id: 3,
        zIndex: 11,
        data: faultData,
        dataLabels: {
          enabled: false
        },
        showInLegend: false,
        marker: {
          symbol: 'url(' + dotIcon + ')',
        }
      }, { //第三层机群描点
        type: 'mappoint',
        colorAxis: false,
        name: '服务组',
        id: 4,
        zIndex: 11,
        data: serverData,
        dataLabels: {
          enabled: false
        },
        marker: {
          symbol: 'circle',
          fillColor: '#fff',
        }
      }
    ]

    if (selectType === 1) {
      dataSeries.splice(dataSeries.findIndex(item => item.id === 4), 1)
    } else if (selectType === 2) {
      dataSeries.splice(dataSeries.findIndex(item => item.id === 2), 1)
      dataSeries.splice(dataSeries.findIndex(item => item.id === 3), 1)
    }
    //世界地图配置
    let worldOptions = {
      chart: {
        backgroundColor: '', //背景颜色
      },
      title: {
        text: '', //清空标题
      },
      legend: { //图例
        enabled: false
      },plotOptions: {
        series: {
          dataLabels: {
            enabled: false
          },
          states: {
            hover: {
              enabled: false,
              opacity: 1,
            },
            select: {
              enabled: true,
              opacity: 1,
            }
          },
          marker: {
            radius: 5,
            width: 20,
            height: 20,
          }
        }
      },
      credits: { //版权信息
        enabled: false,
      },
      tooltip: { //提示
        shared: true,
        formatter: function() {
          if (this.point.total) {
            return '<div style="padding:0.4em; line-height:1.8em;>' +
              '<span style="display:inline-block; width:12em;">国家：</span>' + this.point.name + '<br/>' +
              '客户名称:' + this.point.user + '<br/>' +
              '机型:' + this.point.type.join(',') + '<br/>' +
              '机群总数：<span style="color:#56b2d7;font-size:1.2em">' + this.point.total + '</span><br/>' +
              '当前状态：<br/>' +
              '<p>在役：<span style="color:#56b2d7;font-size:1.2em">' + this.point.status[0] +
              '</span> 退役：<span style="color:#56b2d7;font-size:1.2em">' + this.point.status[1] +
              '</span><br/>停飞：<span style="color:#56b2d7;font-size:1.2em">' + this.point.status[2] +
              '</span> (大修：<span style="color:#56b2d7;font-size:1.2em">' + this.point.status[3] +
              '</span>故障：<span style="color:#56b2d7;font-size:1.2em">' + this.point.status[4] +
              '</span>)</p></div>';
          } else { //判断是否为省
            return '<div style="padding:0.4em; line-height:1.8em;>' +
              '<span style="display:inline-block; width:12em;">国家：</span>' + this.point.name + '<br/>' +
              '总人数：<span style="color:#56b2d7;font-size:1.2em">' + this.point.value + '</span></div>'
          }
        }
      },
      series: dataSeries,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            credits: {
              enabled: false
            },
            plotOptions: {
              series: {
                marker: {
                  radius: 3,
                  width: 10,
                  height: 10,
                }
              }
            }
          }
        }]
      }
    }
    //南极地图
    let nanjiOptions = {
      chart: {
        backgroundColor: '', //背景颜色
      },
      title: {
        text: '', //清空标题
      },
      legend: { //图例
        enabled: false,
      },
      credits: { //版权信息
        enabled: false,
      },
      tooltip: { //提示
        enabled: false,
      },
      series: [{ //第一层世界地图
        mapData: nanjiMap,
        zIndex: 1,
        type: 'map',
        borderWidth: 1,
        borderColor: '#0090ff',
        color: '#19216a',
        nullColor: '#19216a',
        joinBy: 'name',
        showInLegend: false,
        enableMouseTracking: false,
      }]
    }
    Highcharts.Map('worldmap', worldOptions);
    Highcharts.Map('nanjimap', nanjiOptions);
  }
  totalRender = (type, selectType, data, currentIndex) => {
    if (selectType === 1 && currentIndex === null) {
       return (
          <div className="total-map">
            <div className="legend-name">用户：{data.world?data.world.total:0}</div>
          </div>
        )
    } else if (selectType === 2 && currentIndex === null) {
      return (
        <div className="total-map">
          <div className="legend-name">用户组：{data.servers?data.servers.total:0}个</div>
        </div>
      )
    } else if (selectType === 1 && currentIndex !== null) {
       return (
          <div className="total-map">
            <div className="legend-name">用户：{this.props.userNum}</div>
          </div>
        )
    } else if (selectType === 2 && currentIndex !== null) {
      return (
        <div className="total-map">
          <div className="legend-name">用户组：{this.props.serverNum}个</div>
        </div>
      )
    }
  }

  render() {
    const { loading, customerBigTypeValue, selectType, data, currentIndex } = this.props
    return (
      <Spin spinning={ loading }>
        <div className="map-module">
          <div className="body">
            <div id="worldmap" className="map"></div>
            <div id="nanjimap" className="nanji-map"></div>
          </div>
          <div className="footer-total">
            {this.totalRender(customerBigTypeValue,selectType,data,currentIndex)}
          </div>
        </div>
      </Spin>
    )
  }
}
