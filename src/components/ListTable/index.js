//故障列表
import { Component } from 'react';
import { Spin } from 'antd';
import './index.scss';
/**故障列表***/
export default class ListTableModule extends Component {
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
  renderList = (listData) => {
    let listDom = [];
    if (listData.list) {
      let data = listData.list
      for (let i = 0; i < data.length; i++) {
        listDom.push(
          <div className="list-column" key={i} onClick={()=>{this.goUrl({planeNoId:data[i].id})}}>
            <span className="no">{i+1}</span>
            <span className="name">{data[i].name}</span>
            <span className="col">{data[i].code}</span>
            <span className="col">{data[i].model}</span>
          </div>
        )
      }
    }
    return listDom;
  }
  render() {
    const { listData, loading } = this.props;
    return (
      <Spin spinning={ loading }>
        <div className="list-table">
          <h4 className="table-title">当前共<span className="num red" onClick={()=>{this.goUrl()}}>{listData.total?listData.total.value:0}</span>架机因故障停飞</h4>
          <div className="list-table-con">{this.renderList(listData)}</div>
        </div>
      </Spin>
    )
  }
}
