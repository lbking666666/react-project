import { Component } from 'react';
import ChinaMap from './ChinaMap';
import WorldMap from './worldMap'

export default class MapModule extends Component {
  handleOpenWin = (params, id) => {
    this.props.openWin(params, id)
  }
  renderMap = (highOrganId, customerBigTypeValue, highOrganValue, loading, mapData, currentIndex, listName, userNum, serverNum, selectType, mapPointData) => {
    if (customerBigTypeValue === '外贸') {
      return (
        <WorldMap 
          highOrganId = { highOrganId }
          customerBigTypeValue = { customerBigTypeValue }
          highOrganValue = { highOrganValue }
          loading = { loading }
          data = { mapData }
          currentIndex = { currentIndex }
          listName = { listName }
          userNum = { userNum }
          serverNum = { serverNum }
          selectType = { selectType }
          openWin = { this.handleOpenWin }
        />
      )
    } else {
      return (
        <ChinaMap 
          highOrganId = { highOrganId }
          customerBigTypeValue = { customerBigTypeValue }
          highOrganValue = { highOrganValue }
          loading = { loading }
          data = { mapData }
          currentIndex = { currentIndex }
          listName = { listName }
          userNum = { userNum }
          serverNum = { serverNum }
          selectType = { selectType }
          mapPointData = { mapPointData }
          openWin = { this.handleOpenWin }
        />
      )
    }
  }
  render() {
    const { highOrganId, customerBigTypeValue, highOrganValue, loading, mapData, currentIndex, listName, userNum, serverNum, selectType, mapPointData } = this.props
    return (
      <div className='map-box'>
          {this.renderMap(highOrganId ,customerBigTypeValue,highOrganValue,loading,mapData,currentIndex,listName,userNum,serverNum,selectType,mapPointData)}
         </div>
    )
  }
}
