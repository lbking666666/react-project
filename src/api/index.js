import request from '../utils/request';
//获取select
export function getSelectData() {
  return request('/api/getSelectData');
}
//获取大类
export function getLargeClassData() {
  return request('/api/getLargeClassData');
}
//获取客户类型
export function getCustomerData(data) {
  return request('/api/postCustomerData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//获取机关名称
export function postNameOrgan(data) {
  return request('/api/postNameOrganData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//获取列表数据
export function postListData(data) {
  return request('/api/postListData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//获取统计数据
export function getTotalData(data) {
  return request('/api/getTotalData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//外场故障信息
export function postOutData(data) {
  return request('/api/postOutData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//停飞信息
export function postListTableData(data) {
  return request('/api/postListTableData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//航材投产
export function postCommissioningData(data) {
  return request('/api/postCommissioningData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//交付信息
export function postAnnualData(data) {
  return request('/api/annualDelivery', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//地图
export function postMapData(data) {
  return request('/api/postMapData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//图表统计1
export function postChart1Data(data) {
  return request('/api/chartPlaneData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//图表统计2
export function postChart2Data(data) {
  return request('/api/chartAviationMaterialsData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//图表统计3
export function postChart3Data(data) {
  return request('/api/chartLifepartData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//图表统计4
export function postChart4Data(data) {
  return request('/api/chartPlanestateData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//图表统计5
export function postChart5Data(data) {
  return request('/api/chartPlaneerroData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//图表统计6
export function postChart6Data(data) {
  return request('/api/chartCusterrData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//图表统计7
export function postChart7Data(data) {
  return request('/api/chartRevisTimeData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//图表统计8
export function postChart8Data(data) {
  return request('/api/chartCommissioningData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
//图表统计9
export function postChart9Data(data) {
  return request('/api/chartAmClaimSheeData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//postChartColData
export function postChartColData(data) {
  return request('/api/postChartColData', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}

//客户需求任务监控
export function postDemandTask(data) {
  return request('/api/demandTask', {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
