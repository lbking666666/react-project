//大屏第一屏
import React, { Component } from 'react'; //引入react
import config from 'utils/config'; //引入公共属性配置
import { connect } from 'dva'; //dva
import SelectModule from 'components/Select'; //顶部选择组件
import ListModule from 'components/List'; //列表组件
import MapModule from 'components/Map'; //地图组件
import BlockCharts1 from 'components/Block/blockCharts1'; //统计图表
import BlockCharts2 from 'components/Block/blockCharts2'; //外场故障信息
import BlockCharts3 from 'components/Block/blockCharts3'; //交付信息
import BlockCharts4 from 'components/Block/blockCharts4'; //客户需求任务监控图表
import SelecComponents from 'components/Select/chartsSelect'; //图表下拉
import ListTable from 'components/ListTable'; //列表组件
import Charts1 from 'components/Charts/charts1'; //机群统计
import Charts2 from 'components/Charts/charts2'; //机型故障
import Charts3 from 'components/Charts/charts3'; //供应商故障统计
import Charts4 from 'components/Charts/charts4'; //返修周期统计
import Charts5 from 'components/Charts/charts5'; //航材投产
import Charts6 from 'components/Charts/charts6'; //产品故障统计
import ChartsCol1 from 'components/ChartsCol/index1'; //技术问题流程
import ChartsCol2 from 'components/ChartsCol/index2'; //航材投产流程
import ChartsCol3 from 'components/ChartsCol/index3'; //客户需求办理流程
import { Select } from 'antd';
import 'assets/iconfont.css'; //引入字体图标
const { Option } = Select;
//定时
let time;
//命名空间
const namespace = 'mix';
//Class 可以通过extends关键字实现继承 es6语法 继承react
@connect(({ mix, loading }) => ({
  mix,
  loading
}))
class mixView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: '', //传入的类型
      currentIndex: null, //list点击active
      dataId: '', //列表类型
      customerBigTypeId: '1', //接口大类选择
      customerTypeId: '0000', //接口客户类型
      highOrganId: '0000', //接口机关名称
      customerBigTypeValue: '军用', //大类名称文字
      customerTypeValue: '全部', //客户类型文字
      highOrganValue: '全部', //机关名称文字
      listName: '', //左侧列表选中的名称
      isLoading: true,
      rushTime: 7200000, //刷新时间2小时
      selectType: 1, //地图默认选择
      userNum: 0, //地图用户数量
      serverNum: 0, //地图服务组数量
      chartType: '',
      chartId5: '',
      chartId6: '',
      chartId7: '',
      startTime: '', //开始时间
      endTime: '', //结束时间
    };
  }
  //在第一次渲染后调用
  componentDidMount() {
    //初始化时候调用数据
    document.title = '服务保障管控系统';
    this.getLargeClassData(); //加载后调用大类类型接口
    this.getCustomerTypeData(); //加载后调用客户类型接口
    this.getNameOrganData(); //加载后调用机关名称即可
    this.getApi();
    time = setInterval(() => {
      this.getApi();
      this.setState({
        isLoading: false
      })
    }, this.state.rushTime);
    document.addEventListener("keydown", this.onKeyDown) //键盘监听
    document.addEventListener('click', e => {
      if (e.path && e.path.findIndex(v => { return v.className === 'sider-layout-title' }) > -1) {
        this.handleClick()
      } else {
        return;
      }
    });
  }
  componentWillUnmount() {
    clearTimeout(time)
    document.removeEventListener('click', this.handleClick);
  }
  /*** 接口调用 ***/
  //请求select接口
  getSelectData = () => {
    this.props.dispatch({
      type: `${namespace}/selectList`
    })
  }
  //请求大类接口
  getLargeClassData = () => {
    this.props.dispatch({
      type: `${namespace}/largeClassList`,
    });
  }
  //请求客户类型接口
  getCustomerTypeData = () => {
    this.props.dispatch({
      type: `${namespace}/customerList`,
      payload: {
        customerBigTypeId: this.state.customerBigTypeId, //大类类型
        highOrganId: this.state.highOrganId, //机关类型
      }
    })
  }
  //请求机关名称接口
  getNameOrganData = () => {
    this.props.dispatch({
      type: `${namespace}/nameOrganList`,
      payload: {
        customerBigTypeId: this.state.customerBigTypeId, //大类类型
        customerTypeId: this.state.customerTypeId, //客户类型
      }
    });
  }
  //请求列表接口
  getlistData = (params) => {
    this.props.dispatch({
      type: `${namespace}/list`,
      payload: params
    });
  }
  //请求统计数据接口
  getTotalData = (params) => {
    this.props.dispatch({
      type: `${namespace}/total`,
      payload: params
    });
  }
  //请求外场故障信息接口
  postOutData = (params) => {
    this.props.dispatch({
      type: `${namespace}/outList`,
      payload: params
    });
  }
  //请求交付信息接口
  postAnnualData = (params) => {
    this.props.dispatch({
      type: `${namespace}/annualList`,
      payload: params
    });
  }
  //请求客户需求任务监控接口
  postDemandTask = (params) => {
    this.props.dispatch({
      type: `${namespace}/demandList`,
      payload: params
    });
  }
  //请求地图接口
  postMapData = (params) => {
    this.props.dispatch({
      type: `${namespace}/mapList`,
      payload: params
    });
  }
  //左侧点击时查询地图对应点
  postMapPointData = (params) => {
    this.props.dispatch({
      type: `${namespace}/mapPoint`,
      payload: params
    });
  }
  //请求列表接口
  postListTableData = (params) => {
    this.props.dispatch({
      type: `${namespace}/listTable`,
      payload: params
    });
  }
  //请求统计图表1数据接口
  postChart1Data = (params) => {
    this.props.dispatch({
      type: `${namespace}/chart1`,
      payload: params
    });
  }
  //请求统计图表5数据接口
  postChart5Data = (params) => {
    this.props.dispatch({
      type: `${namespace}/chart5`,
      payload: params
    });
  }
  //请求统计图表6数据接口
  postChart6Data = (params) => {
    this.props.dispatch({
      type: `${namespace}/chart6`,
      payload: params
    });
  }
  //请求统计图表7数据接口
  postChart7Data = (params) => {
    this.props.dispatch({
      type: `${namespace}/chart7`,
      payload: params
    });
  }
  //请求航材投产接口
  postCommissioningData = (params) => {
    this.props.dispatch({
      type: `${namespace}/commissioningList`,
      payload: params
    });
  }
  //请求统计图表9数据接口
  postChart9Data = (params) => {
    this.props.dispatch({
      type: `${namespace}/chart9`,
      payload: params
    });
  }

  postChartColData1 = (params) => {
    this.props.dispatch({
      type: `${namespace}/chartcol1`,
      payload: {
        ...params,
        chartId: 'chart1'
      }
    });
  }
  postChartColData2 = (params) => {
    this.props.dispatch({
      type: `${namespace}/chartcol2`,
      payload: {
        ...params,
        chartId: 'chart2'
      }
    });
  }
  postChartColData3 = (params) => {
    this.props.dispatch({
      type: `${namespace}/chartcol3`,
      payload: {
        ...params,
        chartId: 'chart3'
      }
    });
  }
  /*
   接口请求汇总
   根据select联动其他接口需要重新请求
  */
  // 包含 列表list
  getApi = () => {
    //请求参数
    let params = {
      customerBigTypeId: this.state.customerBigTypeId, //大类
      customerTypeId: this.state.customerTypeId, //客户类型
      highOrganId: this.state.highOrganId, //机关名称
    }
    this.getlistData(params); //调用列表接口
    this.getTotalData(params);
    this.postOutData(params); //调用场外信息接口
    this.postAnnualData(params); //交付信息接口
    this.postDemandTask(params); //客户需求任务监控接口
    this.postMapData(params); //调用地图接口
    this.postListTableData(params);
    this.postChart1Data(params);
    this.postChart5Data(params);
    this.postChart6Data(params);
    this.postChart7Data(params);
    this.postCommissioningData(params);
    this.postChart9Data(params);
    this.postChartColData1(params);
    this.postChartColData2(params);
    this.postChartColData3(params);
  }
  // 不包含 列表list
  postApi = () => {
    //请求参数
    let params = {
      customerBigTypeId: this.state.customerBigTypeId, //大类
      customerTypeId: this.state.customerTypeId, //客户类型
      highOrganId: this.state.highOrganId, //机关名称
      dataType: this.state.dataType,
      dataId: this.state.dataId, //列表id
    }
    this.getTotalData(params);
    this.postOutData(params); //调用场外信息接口
    this.postAnnualData(params); //交付信息接口
    this.postDemandTask(params); //客户需求任务监控接口
    this.postMapData(params); //调用地图接口
    this.postListTableData(params);
    this.postChart1Data(params);
    this.postChart5Data(params);
    this.postChart6Data(params);
    this.postChart7Data(params);
    this.postCommissioningData(params);
    this.postChart9Data(params);
    this.postChartColData1(params);
    this.postChartColData2(params);
  }
  /*子传父 select*/
  //选定大类
  handleSelectLargeClass = (value, name) => {
    this.setState({
      customerBigTypeId: value, //大类下拉选定值
      customerTypeId: '0000', //切换大类客户类型重置为全部
      highOrganId: '0000', //切换大类机关名称重置为全部
      customerBigTypeValue: name, //大类名称文字
      customerTypeValue: '全部',
      listName: '',
      dataId: '',
      highOrganValue: '全部',
      currentIndex: null,
      isLoading: true
    })
    setTimeout(() => {
      this.getCustomerTypeData(); //切换大类后重新请求客户类型数据
      this.getNameOrganData(); //切换大类后重新请求机关名称数据
      this.getApi();
    }, 20)
    clearTimeout(time)
    time = setInterval(() => {
      this.getApi();
      this.setState({
        isLoading: false
      })
    }, this.state.rushTime);
  }
  //选定的客户类型
  handleSelectCustomerType = (value, name) => {
    this.setState({
      customerTypeId: value, //客户类型下拉选定值
      customerTypeValue: name, //客户类型文字
      listName: '',
      dataId: '',
      currentIndex: null,
      isLoading: true
    })
    setTimeout(() => {
      this.props.dispatch({
        type: `${namespace}/nameOrganList`,
        payload: {
          customerBigTypeId: this.state.customerBigTypeId, //大类类型
          customerTypeId: this.state.customerTypeId, //客户类型
        }
      }).then(res => {
        if (res.code === 200) {
          if (this.state.highOrganValue !== '全部' || this.state.highOrganValue !== '') {
            //如果存在对应的字段不改变 否则机关名称改变为全部
            let isChange = false;
            this.props.mix.NameOrganData.find(item => {
              if (item.value === this.state.highOrganValue) {
                isChange = true
              }
              return false
            })
            if (isChange === false) {
              this.setState({
                highOrganValue: '全部',
                highOrganId: '0000',
              })
            }
          }
          this.getApi();
        }

      });
    }, 20)

    clearTimeout(time)
    time = setInterval(() => {
      this.getApi();
      this.setState({
        isLoading: false
      })
    }, this.state.rushTime);
  }

  //选定的机关名称
  handleSelectNameOrgan = (value, name) => {
    this.setState({
      highOrganId: value,
      highOrganValue: name,
      listName: '',
      dataId: '',
      currentIndex: null,
      isLoading: true
    })
    setTimeout(() => {
      this.props.dispatch({
        type: `${namespace}/customerList`,
        payload: {
          customerBigTypeId: this.state.customerBigTypeId, //大类类型
          highOrganId: value, //机关类型
        }
      }).then(res => {
        if (res.code === 200) {
          if (this.state.customerTypeValue !== '全部' || this.state.customerTypeValue !== '') {
            //如果存在对应的字段不改变 否则机关名称改变为全部
            let isChange2 = false;
            this.props.mix.CustomerTypeData.find(item => {
              if (item.value === this.state.customerTypeValue) {
                isChange2 = true
              }
              return false
            })
            if (isChange2 === false) {
              this.setState({
                customerTypeValue: '全部',
                customerTypeId: '0000',
              })
            }
          }
          this.getApi();
        }

      });
    }, 20)

    clearTimeout(time)
    time = setInterval(() => {
      this.getApi();
      this.setState({
        isLoading: false
      })
    }, this.state.rushTime);
  }
  //列表点击
  handleListType = (value, listName, dataType, userNum, serverNum) => {
    this.setState({
      dataId: value,
      listName: listName,
      dataType: dataType,
      isLoading: true,
      userNum: userNum,
      serverNum: serverNum,
      currentIndex: 0,
    })
    setTimeout(() => {
      let params = {
        customerBigTypeId: this.state.customerBigTypeId, //大类
        customerTypeId: this.state.customerTypeId, //客户类型
        highOrganId: value, //机关名称
      }
      this.postMapPointData(params); //调用地图接口
      this.postApi();
    }, 20)
    clearTimeout(time)
    time = setInterval(() => {
      this.postApi();
      this.setState({
        isLoading: false
      })
    }, this.state.rushTime);
  }
  handleClick = () => {
    this.setState({
      currentIndex: null,

    });
    if (this.state.listName !== '') {
      this.setState({

        listName: '',
        dataId: '',
      });
      setTimeout(() => {
        this.postApi();
      }, 20)
    }

    clearTimeout(time)
    time = setInterval(() => {
      this.getApi();
      this.setState({
        isLoading: false
      })
    }, this.state.rushTime);
  }
  //选择时间
  handleselectTime = (startTime, endTime) => {
    this.setState({
      startTime: startTime,
      endTime: endTime,
      isLoading: true
    })
    setTimeout(() => {
      this.getApi();
    }, 200)
  }
  handleselectCharts = (value, name, type) => {
    let params = {
      customerBigTypeId: this.state.customerBigTypeId, //大类
      customerTypeId: this.state.customerTypeId, //客户类型
      highOrganId: this.state.highOrganId, //机关名称
      dataType: this.state.dataType,
      dataId: this.state.dataId, //列表id
      chartId: value,
    }
    switch (type) {
      case 5:
        this.setState({
          chartId5: value
        })
        this.postChart5Data(params);
        break;
      case 6:
        this.setState({
          chartId6: value
        })
        this.postChart6Data(params);
        break;
      case 7:
        this.setState({
          chartId7: value
        })
        this.postChart7Data(params);
        break;
      default:
        return false
    }
  }
  //跳转链接
  handleOpenWin = (params, id) => {
    let urlParams = '&DL=' + this.state.customerBigTypeId + '&LX=' + this.state.customerTypeId + '&ZQ=' + this.state.highOrganId;
    let urlSelect = '';
    if (id) {
      urlSelect = '&CZQ=' + ((this.props.mix.dataType === 'highOrgan') ? id : '') + '&CKH=' + ((this.props.mix.dataType === 'customer') ? id : '')
    } else {
      urlSelect = '&CZQ=&CKH='
    }
    let url = config.site + this.urlEncode(params).substr(1) + urlParams + urlSelect;
    let winSet = 'height=500,width=1000,top=100,left=100,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no'
    window.open(url, '', winSet)
  }
  //对象转url字符串
  urlEncode = (param, key, encode) => {
    if (param == null) return '';
    let paramStr = '';
    let t = typeof(param);
    if (t === 'string' || t === 'number' || t === 'boolean') {
      paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
        paramStr += this.urlEncode(param[i], k, encode);
      }
    }
    return paramStr;
  };
  //地图下拉改变事件
  typeChange = (type) => {
    this.setState({
      selectType: type
    })
    let params = {
      customerBigTypeId: this.state.customerBigTypeId, //大类
      customerTypeId: this.state.customerTypeId, //客户类型
      highOrganId: this.state.highOrganId, //机关名称
    }
    this.postMapData(params); //调用地图接口
  }
  //地图下拉渲染
  renderFooter = (type, highOrganId) => {
    if (type === '军用') {
      return (
        <Select defaultValue='用户与战区/军区' onChange={this.typeChange}>
          <Option key='1' value={1}>用户与战区/军区</Option>
          <Option key='2' value={2}>服务组</Option>
        </Select>
      )
    } else {
      return (
        <Select defaultValue='用户' onChange={this.typeChange}>
          <Option key='1' value={1}>用户</Option>
          <Option key='2' value={2}>服务组</Option>
        </Select>
      )
    }
  }
  //把jsx转换成真实的dom元素
  render() {
    //es6 对象解析
    const { mix, loading } = this.props;
    const { LargeClassData, CustomerTypeData, NameOrganData, listData, totalData, outData, annualData, demandData, mapData, mapPointData, dataType, listTableData, chart1Data, chart5Data, chart6Data, chart7Data, commissioningData, chart9Data, chartColData1, chartColData2, chartColData3 } = mix;
    const { customerBigTypeId, customerTypeId, currentIndex, userNum, serverNum, highOrganId, customerBigTypeValue, highOrganValue, isLoading, selectType, listName, chartId5, chartId6, chartId7 } = this.state;
    //渲染dom
    return (
      <div className="mix">
        <div className="mix-layout">
          <div className="sider-wrapper">
            <div className="content">
              <header className="header">
                <SelectModule 
                  customerBigTypeId = { customerBigTypeId }
                  customerTypeId = { customerTypeId }
                  highOrganId = { highOrganId }
                  selectLargeClass = { this.handleSelectLargeClass }
                  selectNameOrgan = { this.handleSelectNameOrgan }
                  selectCustomerType = { this.handleSelectCustomerType }
                  LargeClassData = { LargeClassData }
                  CustomerTypeData = { CustomerTypeData }
                  NameOrganData = { NameOrganData }
                />
              </header>
              <main className="main">
                <ListModule 
                  highOrganId = { highOrganId }
                  loading = { isLoading ? loading.effects['mix/list'] : false }
                  listData = { listData } dataType = { dataType }
                  currentIndex = { currentIndex }
                  selectListType = { this.handleListType }
                  openWin = { this.handleOpenWin }
                />
              </main>
            </div>
          </div>
          <main className="main-wrapper">
            <div className="list-click"></div>
            <div className="map-box">
              <MapModule 
                highOrganId={ highOrganId } 
                mapPointData={mapPointData} 
                customerBigTypeValue={ customerBigTypeValue } 
                highOrganValue={ highOrganValue } 
                loading={ isLoading ? loading.effects['mix/mapList'] : false } 
                mapData={ mapData } 
                currentIndex={currentIndex} 
                listName={ listName} 
                userNum={userNum} 
                serverNum={serverNum} 
                selectType={ selectType }
                openWin = { this.handleOpenWin }
               />
              <div className="footer">
                {this.renderFooter(customerBigTypeValue,highOrganId)}
              </div>
            </div>
          </main>
          <div className="asider-wrapper">
            <div className="info-box">
              <div className="asider-srcoll">
                <div className="info-col">
                  <div className="info-content">
                    <header className="header">
                      <i className="icon iconfont icon-chanpin"></i>
                      <h3 className="title">机群状态统计</h3>
                    </header>
                    <main className="main">
                      <BlockCharts1 
                        loading = { isLoading ? loading.effects['mix/total'] : false }
                        chartsData = { totalData }
                        openWin = { this.handleOpenWin }
                      />
                    </main>
                  </div>
                </div>
                <div className="info-col">
                  <div className="info-content">
                    <header className="header">
                      <i className="icon iconfont icon-chanpin"></i>
                      <h3 className="title">客户需求任务监控</h3>
                    </header>
                    <main className="main">
                      <BlockCharts4 
                        loading = { isLoading ? loading.effects['mix/demandList'] : false }
                        chartsData = { demandData }
                        openWin = { this.handleOpenWin }
                      />
                    </main>
                  </div>
                </div>
                <div className="info-col">
                  <div className="info-content">
                    <header className="header">
                      <i className="icon iconfont icon-feijichang"></i>
                      <h3 className="title">外场故障信息</h3>
                    </header>
                    <main className="main">
                      <BlockCharts2 
                        loading = { isLoading ? loading.effects['mix/outList'] : false }
                        chartsData = { outData }
                        openWin = { this.handleOpenWin }
                      />
                    </main>
                  </div>
                </div>
                <div className="info-col">
                  <div className="info-content">
                    <header className="header">
                      <i className="icon iconfont icon-xiuli"></i>
                      <h3 className="title">交付信息</h3>
                    </header>
                    <main className="main">
                      <BlockCharts3 
                        loading = { isLoading ? loading.effects['mix/annualList'] : false }
                        chartsData = { annualData }
                        openWin = { this.handleOpenWin }
                      />
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mix-layout">
          <div className="sider-wrapper w20">
            <div className="content">
              <main className="main">
                <ListTable 
                  loading = { isLoading ? loading.effects['mix/listTable'] : false }
                  listData = { listTableData }
                  openWin = { this.handleOpenWin }
                />
              </main>
            </div>
          </div>
          <div className="main-wrapper">
            <div className="charts-box">
              <ChartsCol1 
                loading = { loading.effects['mix/chartcol1'] }
                chartsData = { chartColData1 }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <ChartsCol2 
                loading = { loading.effects['mix/chartcol2'] }
                chartsData = { chartColData2 }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <ChartsCol3 
                loading = { loading.effects['mix/chartcol3'] }
                chartsData = { chartColData3 }
                openWin = { this.handleOpenWin } 
              />
            </div>
          </div>
          <div className="asider-wrapper">
            <div className="charts-box">
              <Charts1 
                loading = { loading.effects['mix/chart1'] }
                chartsData = { chart1Data }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <Charts5 
                loading = { loading.effects['mix/commissioningList'] }
                chartsData = { commissioningData }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <SelecComponents 
                data = { chart5Data.selectData }
                type = { 5 }
                selectCharts = { this.handleselectCharts }
               />
              <Charts2 
                loading = { loading.effects['mix/chart5'] }
                chartId = { chartId5 }
                chartsData = { chart5Data.data }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <SelecComponents 
                data = { chart6Data.selectData }
                type = { 6 }
                selectCharts = { this.handleselectCharts }
              />
              <Charts3 
                loading = { loading.effects['mix/chart6'] }
                chartId = { chartId6 }
                chartsData = { chart6Data.data }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <SelecComponents 
                data = { chart7Data.selectData }
                type = { 7 }
                selectCharts = { this.handleselectCharts }
              />
              <Charts4 
                loading = { loading.effects['mix/chart7'] }
                chartId = { chartId7 }
                chartsData = { chart7Data.data }
                openWin = { this.handleOpenWin }
              />
            </div>
            <div className="charts-box">
              <Charts6 
                loading = { loading.effects['mix/chart9'] }
                chartsData = { chart9Data }
                openWin = { this.handleOpenWin }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default mixView;
