//军区客户列表
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss';
/**左侧列表
状态:用props传递接收status，status为顶部两个select赋值后的状态
1.初始状态:陆、空、海、武；
2.客户类型选择:东、南、西、北、中、新疆、西藏；
3.机关名称选择:各个客户机群列表
**/
export default class ListModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    }
  }
  goUrl = (data, id) => {//点击事件
    //es6拼接对象
    let params = {
      urlid: 'fmPlaneInfo',
      productState: '',
      currentState: '',
      statusCause: '',
      ...data,
    }
    this.props.openWin(params, id)
  }
  //列表点击事件
  selectId = (id, name, dataType, index, userNum, serverNum) => {
    this.props.selectListType(id, name, dataType, userNum, serverNum)
    this.setState({
      current: index
    })
  }
  //列表渲染
  renderList = (listData, highOrganId, dataType, currentIndex) => {
    let arr = []
    //按照如下数组顺序排序列表数据
    let sortArr = ['东', '南', '西', '北', '中', '新疆','西藏'];
    let listDataArr = []
    if (highOrganId === '' || highOrganId === '0000') {
      sortArr.forEach(item => {
        listData.forEach(list => {
          if (list.value.indexOf(item) > -1) {
            listDataArr.push(list)
          }
          return list;
        })
        return item
      })
    } else {
      listDataArr = listData
    }
    listDataArr.forEach((item, index) => {
      arr.push(
        <div className={(index===this.state.current && currentIndex !== null)?"list-col active":"list-col"} key={item.id} onClick={()=>{this.selectId(item.id,item.value,dataType,index,item.userNum,item.travelNum)}}>
            <header className="header">
              <h3>{item.value}</h3>
            </header>
            <main className="body">
              <div className = "main-row">
                <div className="row row-total">
                  <span className="label">总共:</span>
                  <span className="num" onClick={(e)=>{this.goUrl({}, item.id) }}>{item.total?item.total.num:0}</span>
                  <span className="txt">架</span>
                </div>
                
                <div className="row row-block">
                  <span className="label">在役:</span>
                  <span className="num" onClick={(e)=>{this.goUrl({productState:1}, item.id) }}>{item.inservice?item.inservice.num:0}</span>
                  <span className="txt">架</span>
                </div>
                <div className="row row-inline">
                  <div className="row-container">
                    <span className="label">停飞:</span>
                    <span className="num" onClick={(e)=>{this.goUrl({currentState:7}, item.id) }}>{item.grounded?item.grounded.num:0}</span>
                    <span className="txt">架</span>
                  </div>
                  <div className="row-list">
                    <div className="row-col first">
                      <span className="label">故障:</span>
                      <span className="num red" onClick={(e)=>{this.goUrl({statusCause:1}, item.id) }}>{item.fault?item.fault.num:0}</span>
                      <span className="txt">架</span>
                    </div>
                    <div className="row-col">
                      <span className="label">定检:</span>
                      <span className="num" onClick={(e)=>{this.goUrl({statusCause:5}, item.id) }}>{item.fixedInspection?item.fixedInspection.num:0}</span>
                      <span className="txt">架</span>
                    </div>
                    <div className="row-col last">
                      <span className="label">大修:</span>
                      <span className="num" onClick={(e)=>{this.goUrl({statusCause:4}, item.id) }}>{item.overhaul?item.overhaul.num:0}</span>
                      <span className="txt">架</span>
                    </div>
                  </div>
                </div>
                <div className="row row-block">
                  <span className="label">退役:</span>
                  <span className="num" onClick={(e)=>{this.goUrl({productState:2}, item.id) }}>{item.scrap?item.scrap.num:0}</span>
                  <span className="txt">架</span>
                </div>
              </div>
            </main>
          </div>)
      return false;
    })
    return arr
  }
  render() {
    const { listData, loading, highOrganId, dataType, currentIndex } = this.props;
    return (
      <Spin spinning={ loading }>
        <div className="list-module">
          {this.renderList(listData, highOrganId,dataType,currentIndex)}
        </div>
        </Spin>
    )
  }
}
