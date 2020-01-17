import { Component } from 'react';
import { Select, DatePicker } from 'antd';
import './index.scss';
const { Option } = Select; //select控件
const { RangePicker } = DatePicker; //日期选择器

export default class SelectModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '机关名称'
    };
  }
  //大类切换
  largeClassChange = (value, root) => {
    if (root.props.children === '外贸') {
      this.setState({
        label: '经销商'
      })
    } else {
      this.setState({
        label: '机关名称'
      })
    }
    this.props.selectLargeClass(value, root.props.children)
  }
  //客户类型切换选项
  customerTypeChange = (value, root) => {
    this.props.selectCustomerType(value, root.props.children)
  }
  //机关名称切换选项
  nameOrganChange = (value, root) => {
    this.props.selectNameOrgan(value, root.props.children)
  }
  //时间选择
  timeChange = (value, dateString) => {
    this.props.selectTime(dateString[0], dateString[1])
  }
  //渲染大类
  selectLargeClass = (listData) => {
    let arr = []
    listData.forEach((item, index) => {
      arr.push(<Option key={index} value={item.id}>{item.value}</Option>)
      return item;
    })
    return arr;
  }
  //渲染客户类型select
  selectCustomerType = (listData) => {
    let arr = []
    listData.forEach((item, index) => {
      arr.push(<Option key={index} value={item.id}>{item.value}</Option>)
      return item;
    })
    return arr;
  }
  //渲染机关名称select
  selectNameOrgan = (listData) => {
    let arr = []
    listData.forEach((item, index) => {
      arr.push(<Option key={index} value={item.id}>{item.value}</Option>)
      return item;
    })
    return arr;
  }

  //渲染dom
  render() {
    //父传递的值
    const { LargeClassData, CustomerTypeData, NameOrganData, customerBigTypeId, customerTypeId, highOrganId } = this.props;
    const { label } = this.state;
    return (
      <div className="select-module">
        <div className="select-content">
          <div className="select-col col-1">
            <span className="label">
              大类：
            </span>
            <Select 
              defaultValue='军用' 
              onChange={this.largeClassChange}
              value={customerBigTypeId}
            >
              {this.selectLargeClass(LargeClassData)}
            </Select>
          </div>
          <div className="select-col col-2">
            <span className="label">
              客户类型：
            </span>
            <Select 
              defaultValue='全部'
              onChange={this.customerTypeChange}
              value={customerTypeId}
            >
              {this.selectCustomerType(CustomerTypeData)}
            </Select>
          </div>
          <div className="select-col col-3">
            <span className="label">
              {label+'：'}
            </span>
            <Select 
              defaultValue='全部'
              value={highOrganId}
              onChange={this.nameOrganChange}
            >
              {this.selectNameOrgan(NameOrganData)}
            </Select>
          </div>
        </div>
        <div className="select-time">
          <span className="label">
            时间：
          </span>
          <RangePicker
            format="YYYY-MM-DD"
            placeholder={['请选择开始日期', '请选择结束日期']}
            onChange={this.timeChange}
          />
        </div>
      </div>
    )
  }
}
