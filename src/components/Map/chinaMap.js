import { Component } from 'react';
import { Spin } from 'antd';
//引入echart
import echarts from 'echarts/lib/echarts';
//引入地图组件
import 'echarts/lib/chart/map';
//引入带有涟漪特效动画的散点
import 'echarts/lib/chart/effectScatter';
//引入散点图组件
import 'echarts/lib/chart/scatter';
//引入地理坐标系组件
import 'echarts/lib/component/geo';
//引入提示框
import 'echarts/lib/component/tooltip';
import './index.scss';
import starIcon from './star.png'
//中国城市描点
let cityMap = require('./cityMap.json');
//战区地图
let zoneMap = require('./zoneMap.json');
//民航地图
let minMap = require('./minMap.json');

export default class MapModule extends Component {
  UNSAFE_componentWillReceiveProps(props) {
    //在组件接收到一个新的 prop (更新后)时被调用
    if (props.loading === false && this.props.loading === true) { //判断是否加载完成数据
      if (props.customerBigTypeValue === '军用') { //大类为军用
        //初始化军用战区地图
        this.mapZoneLoad(props.data, props.listName, props.highOrganValue, props.selectType, props.mapPointData)
      } else if (props.customerBigTypeValue === '民用') {
        //初始化民用地图
        this.mapMinLoad(props.data, props.listName, props.highOrganValue, props.selectType, props.mapPointData)
      }
    }
  }

  goUrl = (data) => {
    //es6拼接对象
    let params = {
      urlid: 'custNeed',
      currentState: '7',
      planeNoId: '',
      statusCause: 1,
      ...data,
    }
    this.props.openWin(params)
  }
  //初始化战区地图
  mapZoneLoad = (data, listName, highOrganValue, selectType, mapPointData) => {
    let zoneData = [], //战区集合
      userData = [], //非故障集合
      serverData = [], //用户组
      faultData = [], //故障集合
      lujunData = [], //陆军集合
      haijunData = [], //海军集合
      kongjunData = [], //空军集合
      wujingData = [], //武警集合
      lujunFaultData = [], //陆军故障集合
      haijunFaultData = [], //海军故障集合
      kongjunFaultData = [], //空军故障集合
      wujingFaultData = [], //武警故障集合
      currentData = []; //左侧点击时地图战区当前点
    //战区数据处理
    if (data.highOrgans) {
      let highOrgansData = data.highOrgans.data;
      for (let i = 0; i < highOrgansData.length; i++) {
        if (cityMap[highOrgansData[i].name]) {
          let params = {
            ...highOrgansData[i],
            point: 'user',
            value: [cityMap[highOrgansData[i].name].lon + 0.35, cityMap[highOrgansData[i].name].lat + 0.35, highOrgansData[i].total]
          }
          zoneData.push(params)
        }
      }
    }
    //当前点数据处理
    if (mapPointData.users) {
      if (listName !== '') { //判断如果左侧列表已点击
        let usersData = mapPointData.users.data;
        let usersArr = []
        for (let i = 0; i < usersData.length; i++) {
          if (cityMap[usersData[i].name]) { //如果城市存在
            let params = {
              ...usersData[i],
              value: [cityMap[usersData[i].name].lon, cityMap[usersData[i].name].lat, usersData[i].total]
            }
            usersArr.push(usersData[i].name);
            usersArr.filter((item, index) => { //判断是否有重复的城市
              if (usersArr.indexOf(item) !== index) {
                if (usersData[i].name === item) {
                  params = {
                    ...usersData[i],
                    value: [cityMap[usersData[i].name].lon - 0.3, cityMap[usersData[i].name].lat + 0.3, usersData[i].total]
                  }
                }
              }
              return false
            })
            currentData.push(params);
          }
        }
      } else { //左侧点击为空
        currentData = []
      }
    }
    //军用用户数据处理
    if (data.users) {
      let usersData = data.users.data;
      let usersArr = []
      for (let i = 0; i < usersData.length; i++) {
        if (cityMap[usersData[i].name]) { //如果城市存在
          let params = {
            ...usersData[i],
            point: 'user',
            value: [cityMap[usersData[i].name].lon, cityMap[usersData[i].name].lat, usersData[i].total]
          }
          usersArr.push(usersData[i].name);
          usersArr.filter((item, index) => { //判断是否有重复的城市
            if (usersArr.indexOf(item) !== index) {
              if (usersData[i].name === item) {
                params = {
                  ...usersData[i],
                  point: 'user',
                  value: [cityMap[usersData[i].name].lon - 0.3, cityMap[usersData[i].name].lat + 0.3, usersData[i].total]
                }
              }
            }
            return false
          })
          let zoneType = usersData[i].dataType;
          switch (zoneType) { //军种不同点数据处理
            case '陆军':
              if (usersData[i].status[4] !== 0) {
                lujunFaultData.push(params); //陆军故障点
              } else {
                lujunData.push(params); //陆军非故障点
              }
              break;
            case '海军':
              if (usersData[i].status[4] !== 0) {
                haijunFaultData.push(params); //海军故障点
              } else {
                haijunData.push(params); //海军非故障点
              }
              break;
            case '空军':
              if (usersData[i].status[4] !== 0) {
                kongjunFaultData.push(params); //空军故障点
              } else {
                kongjunData.push(params); // 空军非故障点
              }
              break;
            case '武警':
              if (usersData[i].status[4] !== 0) {
                wujingFaultData.push(params); //武警故障点
              } else {
                wujingData.push(params); //武警非故障点
              }
              break;
            default:
              if (usersData[i].status[4] !== 0) {
                faultData.push(params); //故障点
              } else {
                usersData.push(params); //非故障点
              }
          }
        }
      }
    }
    //服务组数据处理
    if (data.servers) {
      let serversData = data.servers.data;
      for (let i = 0; i < serversData.length; i++) {
        if (cityMap[serversData[i].name]) {
          let params = {
            ...serversData[i],
            point: 'servers',
            value: [cityMap[serversData[i].name].lon, cityMap[serversData[i].name].lat, serversData[i].value]
          }
          serverData.push(params)
        }
      }
    }
    //战区判断
    let zoneArr = ["东部", "南部", "西部", "北部", "中部", "西藏", "新疆"];
    let selectName = listName + highOrganValue;
    let zoneName = '';
    for (let i = 0; i < zoneArr.length; i++) {
      //左侧点击或下拉的名称包含arr中项改变地图区域颜色
      if (selectName.indexOf(zoneArr[i]) > -1) {
        zoneName = zoneArr[i]
      }
    }
    //战区echarts数据配置项
    let seriesZoneOptions = [];
    //判断是否为大屏
    let isBigScreen = (window.screen.width > 1920) ? true : false
    //战区和用户
    if (selectType === 1) {
      seriesZoneOptions = [{ //战区点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: zoneData,
        symbol: 'image://' + starIcon,
        symbolSize: isBigScreen ? 18 : 10,
        zlevel: 10,
      }, { //用户点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: userData,
        symbol: 'circle',
        symbolSize: isBigScreen ? 12 : 6,
        itemStyle: {
          color: '#fff'
        },
        zlevel: 5,
      }, { //故障用户点
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: faultData,
        effectType: 'ripple',
        showEffectOn: 'render',
        symbolSize: isBigScreen ? 12 : 6,
        rippleEffect: {
          brushType: 'stroke',
          color: '#fff',
          scale: 4
        },
        itemStyle: {
          color: '#fff'
        },
        hoverAnimation: true,
        zlevel: 2,
      }, { //陆军点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: lujunData,
        symbolSize: isBigScreen ? 12 : 6,
        itemStyle: {
          color: '#e88b00',
        },
        zlevel: 5,
      }, { //陆军故障点
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: lujunFaultData,
        effectType: 'ripple',
        showEffectOn: 'render',
        symbolSize: isBigScreen ? 12 : 6,
        rippleEffect: {
          brushType: 'stroke',
          color: '#e88b00',
          scale: 6
        },
        itemStyle: {
          color: '#e88b00',
        },
        hoverAnimation: true,
        zlevel: 2,
      }, { //海军点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: haijunData,
        symbol: 'circle',
        symbolSize: isBigScreen ? 12 : 6,
        itemStyle: {
          color: '#fff',
        },
        zlevel: 5,
      }, { //海军故障点
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: haijunFaultData,
        effectType: 'ripple',
        showEffectOn: 'render',
        symbolSize: isBigScreen ? 12 : 6,
        rippleEffect: {
          brushType: 'stroke',
          color: '#fff',
          scale: 4
        },
        itemStyle: {
          color: '#fff',
        },
        hoverAnimation: true,
        zlevel: 2,
      }, { //空军点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: kongjunData,
        symbol: 'circle',
        symbolSize: isBigScreen ? 12 : 6,
        itemStyle: {
          color: '#0090ff'
        },
        zlevel: 5,
      }, { //空军故障点
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: kongjunFaultData,
        effectType: 'ripple',
        showEffectOn: 'render',
        symbolSize: isBigScreen ? 12 : 6,
        rippleEffect: {
          brushType: 'stroke',
          color: '#0090ff',
          scale: 4
        },
        itemStyle: {
          color: '#0090ff'
        },
        hoverAnimation: true,
        zlevel: 2,
      }, { //武警点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: wujingData,
        symbol: 'circle',
        symbolSize: isBigScreen ? 12 : 6,
        itemStyle: {
          color: '#1e9a87'
        },
        zlevel: 5,
      }, { //武警故障点
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: wujingFaultData,
        effectType: 'ripple',
        showEffectOn: 'render',
        symbolSize: isBigScreen ? 12 : 6,
        rippleEffect: {
          brushType: 'stroke',
          color: '#1e9a87',
          scale: 4
        },
        itemStyle: {
          color: '#1e9a87'
        },
        hoverAnimation: true,
        zlevel: 2,
      }, { //当前点
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin', //气泡
        symbolSize: isBigScreen ? 36 : 18,
        animationDelay: function(idx) {
          return idx * 10;
        },
        itemStyle: {
          normal: {
            color: '#F62157', //标志颜色
          }
        },
        zlevel: 6,
        data: currentData,
      }]
    } else if (selectType === 2) { //服务组
      seriesZoneOptions = [{
        type: 'scatter',
        coordinateSystem: 'geo',
        data: serverData,
        symbol: 'circle',
        symbolSize: isBigScreen ? 12 : 6,
        itemStyle: {
          color: '#fff'
        },
        zlevel: 5,
      }]
    }
    //战区echarts配置项
    let zoneOptions = {
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
          if (params.data.point === 'user') {
            let point = params.data;
            return '<div style="padding:0.4em; line-height:1.8em;>' +
              '<span style="display:inline-block; width:12em;">城市：</span>' + point.name + '<br/>' +
              '客户名称:' + point.user + '<br/>' +
              '机型:' + point.type.join(',') + '<br/>' +
              '机群总数：<span style="color:#56b2d7;font-size:1.2em">' + point.total + '</span><br/>' +
              '当前状态：<br/>' +
              '<p>在役：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[0] ? point.status[0] : 0) +
              '</span> 退役：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[1] ? point.status[1] : 0) +
              '</span><br/>停飞：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[2] ? point.status[2] : 0) +
              '</span> (大修：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[3] ? point.status[3] : 0) +
              '</span>故障：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[4] ? point.status[4] : 0) +
              '</span>)</p></div>';
          } else if (params.data.point === 'servers') {
            let point = params.data;
            return '<div style="padding:0.4em; line-height:1.8em;>' +
              '<span style="display:inline-block; width:12em;">城市：</span>' + point.name + '<br/>' +
              '总人数：<span style="color:#56b2d7;font-size:1.2em">' + point.value[2] + '</span></div>'

          } else {
            return
          }
        }
      },
      geo: {
        name: '数据名称',
        type: 'map',
        roam: false,
        map: 'zone',
        top: 0,
        bottom: 0,
        silent:true,
        regions: [{
          name: zoneName,
          itemStyle: {
            areaColor: 'rgba(0,27,93,0.2)',
            color: '#4bb6dd'
          }
        }, {
          name: "南海诸岛",
          value: 0,
          itemStyle: {
            normal: {
              opacity: 0,
              label: {
                show: false
              }
            }
          }
        }],
        itemStyle: {
          areaColor: 'rgba(0,27,93,0.4)',
          borderColor: '#4bb6dd',
        },
        emphasis: {
          label: {
            show: false
          },
          itemStyle: {
            areaColor: 'rgba(0,27,93,0.4)',
            borderColor: '#4bb6dd',
          },
        }
      },
      series: seriesZoneOptions
    };
    //绑定dom
    let zoneCharts = echarts.init(document.getElementById('chinaMap'));
    //注册地图
    echarts.registerMap('zone', zoneMap);
    //echarts渲染dom
    zoneCharts.setOption(zoneOptions, true);
    //响应式
    window.addEventListener("resize", () => { zoneCharts.resize(); });
    //点击事件
    let that = this
    zoneCharts.on('click', function(params) {
      if(params.data.status[4] && params.data.status[4] !== 0){
        let data = {
          planeNoId:params.data.id,
        }
        that.goUrl(data)
      }
    })
  }
  //民用地图渲染
  mapMinLoad = (data, listName, highOrganValue, selectType, mapPointData) => {
    let zoneData = [], //大区集合
      userData = [], //非故障集合
      serverData = [], //用户组
      faultData = [], //故障集合
      currentData = []; //当前点
    //大区数据处理
    if (data.highOrgans) {
      let highOrgansData = data.highOrgans.data;
      for (let i = 0; i < highOrgansData.length; i++) {
        if (cityMap[highOrgansData[i].name]) {
          let params = {
            ...highOrgansData[i],
            point: 'user',
            value: [cityMap[highOrgansData[i].name].lon + 0.35, cityMap[highOrgansData[i].name].lat + 0.35, highOrgansData[i].total]
          }
          zoneData.push(params)
        }
      }
    }
    //民用用户数据处理
    if (mapPointData.min) {
      if (listName !== '') {
        let minData = mapPointData.min.data;
        for (let i = 0; i < minData.length; i++) {
          if (cityMap[minData[i].name]) {
            let params = {
              ...minData[i],
              value: [cityMap[minData[i].name].lon, cityMap[minData[i].name].lat, minData[i].total]
            }
            currentData.push(params)
          }
        }
      } else {
        currentData = []
      }
    }
    //民用用户数据处理
    if (data.min) {
      let minData = data.min.data;
      for (let i = 0; i < minData.length; i++) {
        if (cityMap[minData[i].name]) {
          let params = {
            ...minData[i],
            point: 'user',
            value: [cityMap[minData[i].name].lon, cityMap[minData[i].name].lat, minData[i].total]
          }
          if (minData[i].status[4] === 0) {
            userData.push(params)
          } else {
            faultData.push(params)
          }
        }
      }
    }
    //服务组数据处理
    if (data.servers) {
      let serversData = data.servers.data;
      for (let i = 0; i < serversData.length; i++) {
        if (cityMap[serversData[i].name]) {
          let params = {
            ...serversData[i],
            point: 'servers',
            value: [cityMap[serversData[i].name].lon, cityMap[serversData[i].name].lat, serversData[i].value]
          }
          serverData.push(params)
        }
      }
    }
    //大区判断
    let minArr = ["西南", "华中", "中南", "华东", "华北", "东北", "西北"];
    let selectName = listName + highOrganValue;
    let minName = '';
    for (let i = 0; i < minArr.length; i++) {
      if (selectName.indexOf(minArr[i]) > -1) {
        minName = minArr[i]
      }
    }
    //echarts数据配置
    let seriesMinOptions = [];
    //判断是否为大屏
    let isBigScreen = (window.screen.width > 1920) ? true : false
    if (selectType === 1) {
      seriesMinOptions = [{ //战区点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: zoneData,
        symbol: 'image://' + starIcon,
        symbolSize: isBigScreen ? 18 : 10,
        zlevel: 10,
      }, { //用户点
        type: 'scatter',
        coordinateSystem: 'geo',
        data: userData,
        symbol: 'circle',
        itemStyle: {
          color: '#fff'
        },
        symbolSize: isBigScreen ? 12 : 6,
        zlevel: 5,
      }, { //故障用户点
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: faultData,
        effectType: 'ripple',
        showEffectOn: 'render',
        symbolSize: isBigScreen ? 10 : 6,
        rippleEffect: {
          brushType: 'stroke',
          color: '#fff',
          scale: 4
        },
        itemStyle: {
          color: '#fff'
        },
        hoverAnimation: true,
        zlevel: 2,
      }, { //当前点
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin', //气泡
        symbolSize: isBigScreen ? 36 : 18,
        animationDelay: function(idx) {
          return idx * 10;
        },
        itemStyle: {
          normal: {
            color: '#F62157', //标志颜色
          }
        },
        zlevel: 6,
        data: currentData,
      }]
    } else if (selectType === 2) {
      seriesMinOptions = [{ //服务组
        type: 'scatter',
        coordinateSystem: 'geo',
        data: serverData,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#fff'
        },
        zlevel: 5,
      }]
    }
    //民用echarts配置项
    let minOptions = {
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
          if (params.data.point === 'user') {
            let point = params.data;
            return '<div style="padding:0.4em; line-height:1.8em;>' +
              '<span style="display:inline-block; width:12em;">城市：</span>' + point.name + '<br/>' +
              '客户名称:' + point.user + '<br/>' +
              '机型:' + point.type.join(',') + '<br/>' +
              '机群总数：<span style="color:#56b2d7;font-size:1.2em">' + point.total + '</span><br/>' +
              '当前状态：<br/>' +
              '<p>在役：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[0] ? point.status[0] : 0) +
              '</span> 退役：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[1] ? point.status[1] : 0) +
              '</span><br/>停飞：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[2] ? point.status[2] : 0) +
              '</span> (大修：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[3] ? point.status[3] : 0) +
              '</span>故障：<span style="color:#56b2d7;font-size:1.2em">' + (point.status[4] ? point.status[4] : 0) +
              '</span>)</p></div>';
          } else if (params.data.point === 'servers') {
            let point = params.data;
            return '<div style="padding:0.4em; line-height:1.8em;>' +
              '<span style="display:inline-block; width:12em;">城市：</span>' + point.name + '<br/>' +
              '总人数：<span style="color:#56b2d7;font-size:1.2em">' + point.value[2] + '</span></div>'

          } else {
            return
          }
        }
      },
      geo: {
        name: '数据名称',
        type: 'map',
        roam: false,
        map: 'min',
        top: 0,
        bottom: 0,
        silent:true,
        regions: [{
          name: minName,
          itemStyle: {
            areaColor: 'rgba(0,27,93,0.2)',
            color: '#4bb6dd'
          }
        }, {
          name: "南海诸岛",
          value: 0,
          itemStyle: {
            normal: {
              opacity: 0,
              label: {
                show: false
              }
            }
          }
        }],
        itemStyle: {
          areaColor: 'rgba(0,27,93,0.4)',
          borderColor: '#4bb6dd',
        },
        emphasis: {
          label: {
            show: false
          },
          itemStyle: {
            areaColor: 'rgba(0,27,93,0.4)',
            borderColor: '#4bb6dd',
          },
        }
      },
      series: seriesMinOptions
    };
    //绑定dom
    let minCharts = echarts.init(document.getElementById('chinaMap'));
    //注册地图
    echarts.registerMap('min', minMap);
    //echarts渲染
    minCharts.setOption(minOptions, true);
    //响应式
    window.addEventListener("resize", () => { minCharts.resize(); });
     //点击事件
    let that = this
    minCharts.on('click', function(params) {
      if(params.data.status[4] && params.data.status[4] !== 0){
        let data = {
          planeNoId:params.data.id,
        }
        that.goUrl(data)
      }
    })
  }

  totalRender = (type, selectType, data, currentIndex) => {
    if (selectType === 1 && currentIndex === null) {
      if (type === '军用') {
        return (
          <div className="total-map">
            <div className="legend-name">战区/军区：{data.highOrgans?data.highOrgans.total:0}个</div>
            <div className="legend-name">用户：{data.users?data.users.total:0}</div>
          </div>
        )
      } else if (type === '民用') {
        return (
          <div className="total-map">
            <div className="legend-name">用户：{data.min?data.min.total:0}</div>
          </div>
        )
      }
    } else if (selectType === 2 && currentIndex === null) {
      return (
        <div className="total-map">
          <div className="legend-name">用户组：{data.servers?data.servers.total:0}个</div>
        </div>
      )
    } else if (selectType === 1 && currentIndex !== null) {
      if (type === '军用') {
        return (
          <div className="total-map">
            <div className="legend-name">战区/军区：1个</div>
            <div className="legend-name">用户：{this.props.userNum}</div>
          </div>
        )
      } else {
        return (
          <div className="total-map">
            <div className="legend-name">用户：{this.props.userNum}</div>
          </div>
        )
      }
    } else if (selectType === 2 && currentIndex !== null) {
      return (
        <div className="total-map">
          <div className="legend-name">用户组：{this.props.serverNum}个</div>
        </div>
      )
    }
  }
  renderLegend = (type) => {
    if (type === '军用') {
      let arr = [];
      ['陆军', '海军', '空军', '武警'].forEach((item, i) => {
        arr.push(
          <div className={'legend-col col-'+i} key={i}>
            <i></i>
            <span>{item}</span>
          </div>
        )
      })
      return arr
    } else {
      return
    }
  }

  render() {
    const { loading, customerBigTypeValue, selectType, data, currentIndex } = this.props
    return (
      <Spin spinning={ loading }>
        <div className="map-module">
          <div className="body">
            <div id="chinaMap" className="map"></div>
          </div>
          <div className="map-legend">
            {this.renderLegend(customerBigTypeValue)}
          </div>
          <div className="footer-total">
            {this.totalRender(customerBigTypeValue,selectType,data,currentIndex)}
          </div>
        </div>
      </Spin>
    )
  }
}
