import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import 'assets/layout.scss';
import 'assets/themes.scss'
@withRouter
class SiderLayout extends Component {
  renderDom = (children) => {
    //根据屏幕不同展示不同的页面
    if (window.screen.width > 1920) {//大屏尺寸 正常路由
      return (
        <div className="big-screen">
          {children}
        </div>
      )
    } else {//小屏尺寸 mix页面
      return (
        <div className="small-screen">
          {children.props.children[2]}
        </div>
      )
    }
  }
  render() {
    const { children } = this.props
    return (
      <div className="wrapper">
        <div className="sider-layout-title">
          服务保障管控系统
        </div>
        <div className="sider-layout-body">
          {this.renderDom(children)}
        </div>
      </div>
    )
  }
}
export default SiderLayout
