//图表下拉组件
import { Component } from 'react';
import { Select, DatePicker } from 'antd';
const { Option } = Select; //select控件
const { RangePicker } = DatePicker; //日期选择器
export default class SelecComponents extends Component {
  renderSelect = (data) => {
    let arr = [];
    if (data && data.length > 0) {
      data.forEach((item, index) => {
        arr.push(<Option key={index} value={item.id}>{item.name}</Option>)
        return false;
      })
      if (this.props.timeType) {//日期控件
        let dateArr = ['选择时间', '至今一年', '至今半年', '至今一季', '至今一月', '至今一周', '本月至今'];
        return (
          <div>
    		      <RangePicker
    	            format="YYYY-MM-DD"
    	            placeholder={['开始日期', '结束日期']}
    	            onChange={this.dateChange}
    	          /> 
    		      <Select defaultValue='选择时间' onChange={this.timeChange}>
                {dateArr.forEach((item,index)=>{
                  return (<Option key={index} value={index}>{item}</Option>)
                })}
      			  </Select>
    		      <Select defaultValue='全部' onChange={this.typeChange}>
    				    {arr}
    			   </Select>
    		  </div>
        )
      } else {
        return (
          <div>
      			<Select defaultValue={data[0].name} onChange={this.typeChange}>
      				{arr}
      			</Select>
      		</div>
        )
      }
    }
  }
  //下拉选择
  typeChange = (value, root) => {
    this.props.selectCharts(value, root.props.children, this.props.type)
  }

  //下拉时间
  timeChange = (value, root) => {
    this.props.selectChartsTime(value, root.props.children, this.props.type)
  }
  //时间选择
  dateChange = (value, dateString) => {
    this.props.selectChartsDate(dateString[0], dateString[1], this.props.type)
  }
  //渲染dom
  render() {
    const { data } = this.props;
    return (
      <div className="select-components">
			{this.renderSelect(data)}
		</div>
    )
  }
}
