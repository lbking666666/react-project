//引入api
import * as api from 'api'
export default {
  namespace: 'mix', //命名空间
  state: { //dva中state状态数据
    LargeClassData: [], //大类数据
    CustomerTypeData: [], //客户类型数据
    NameOrganData: [], //机关名称数据
    listData: [], //列表数据
    totalData: [], //统计数据
    outData: {}, //场外信息数据
    annualData: {}, //交付信息
    demandData: {}, //客户需求任务监控
    mapData: {}, //地图数据
    dataType: '',
    chart1Data: [], //图表统计1
    chart5Data: {}, //图表统计5
    chart6Data: {}, //图表统计6
    chart7Data: {}, //图表统计7
    commissioningData: [], //航材投产数据
    chart9Data: [], //图表统计9
    chartColData1: {}, //多图表
    chartColData2: {}, //多图表
    chartColData3: {}, //多图表
    listTableData: {}, //停飞信息
    mapPointData: {},//当前地图区域点集合
  },
  //处理异步逻辑的 effects
  effects: {
    * largeClassList({ _ }, { put, call }) {
      //请求api中大类
      const rsp = yield call(api.getLargeClassData);
      if (rsp.code === 200) {
        yield put({
          type: 'getLargeClassData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp;
    },
    * customerList({ payload }, { put, call }) {
      //请求api中客户类型
      const rsp = yield call(api.getCustomerData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postCustomerTypeData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp;
    },
    * nameOrganList({ payload }, { put, call }) {
      //请求api中机关名称
      const rsp = yield call(api.postNameOrgan, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postNameOrganData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * list({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postListData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'getListData',
          payload: rsp //网络返回的要保留的数据
        });
      }
    },
    * total({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.getTotalData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'getTotalData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * outList({ payload }, { put, call }) {
      //请求api中外场故障信息
      const rsp = yield call(api.postOutData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postOutData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * annualList({ payload }, { put, call }) {
      //请求api中交付信息
      const rsp = yield call(api.postAnnualData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postAnnualData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * demandList({ payload }, { put, call }) {
      //请求api中客户需求任务
      const rsp = yield call(api.postDemandTask, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postDemandTask',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * mapList({ payload }, { put, call }) {
      //请求api中地图
      const rsp = yield call(api.postMapData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postMapData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * mapPoint({ payload }, { put, call }) {
      //请求api中地图
      const rsp = yield call(api.postMapData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postMapPointData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * listTable({ payload }, { put, call }) {
      //请求api中停飞信息
      const rsp = yield call(api.postListTableData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postListTableData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * chart1({ payload }, { put, call }) {
      //请求api中机群占比统计
      const rsp = yield call(api.postChart1Data, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChart1Data',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * chart5({ payload }, { put, call }) {
      //请求api中机型故障统计
      const rsp = yield call(api.postChart5Data, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChart5Data',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * chart6({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postChart6Data, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChart6Data',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * chart7({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postChart7Data, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChart7Data',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * commissioningList({ payload }, { put, call }) {
      //请求api中航材投产
      const rsp = yield call(api.postCommissioningData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postCommissioningData',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
      return rsp
    },
    * chart9({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postChart9Data, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChart9Data',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * chartcol1({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postChartColData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChartColData1',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * chartcol2({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postChartColData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChartColData2',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    },
    * chartcol3({ payload }, { put, call }) {
      //请求api中列表
      const rsp = yield call(api.postChartColData, payload);
      if (rsp.code === 200) {
        yield put({
          type: 'postChartColData3',
          payload: rsp.result //网络返回的要保留的数据
        });
      }
    }
  },
  //同步更新 state 的 reducers
  reducers: {
    getLargeClassData(state, { payload: LargeClassData }) {
      //返回state 大类数据
      return {
        ...state,
        LargeClassData: [...LargeClassData]
      };
    },
    postCustomerTypeData(state, { payload: CustomerTypeData }) {
      //返回state 客户类型数据
      return {
        ...state,
        CustomerTypeData: [...CustomerTypeData]
      };
    },
    postNameOrganData(state, { payload: NameOrganData }) {
      //返回state 机关名称数据
      return {
        ...state,
        NameOrganData: [...NameOrganData]
      };
    },
    getListData(state, { payload: data }) {
      //返回state 列表数据
      return {
        ...state,
        listData: [...data.result],
        dataType: data.dataType
      };
    },
    getTotalData(state, { payload: totalData }) {
      //返回state 统计数据
      return {
        ...state,
        totalData: [...totalData],
      };
    },
    postOutData(state, { payload: outData }) {
      //返回state 场外信息数据
      return {
        ...state,
        outData: { ...outData },
      };
    },
    postAnnualData(state, { payload: data }) {
      //返回state 交付信息数据
      return {
        ...state,
        annualData: { ...data },
      };
    },
    postDemandTask(state, { payload: data }) {
      //返回state 客户需求任务监控数据
      return {
        ...state,
        demandData: { ...data },
      };
    },
    postMapData(state, { payload: mapData }) {
      //返回state 地图数据
      return {
        ...state,
        mapData: { ...mapData },
      };
    },
    postMapPointData(state, { payload: mapData }) {
      //返回state 地图数据
      return {
        ...state,
        mapPointData: { ...mapData },
      };
    },
    postListTableData(state, { payload: data }) {
      //返回state 列表数据
      return {
        ...state,
        listTableData: data,
      };
    },
    postChart1Data(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chart1Data: [...chartData],
      };
    },
    postChart5Data(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chart5Data: chartData,
      };
    },
    postChart6Data(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chart6Data: chartData,
      };
    },
    postChart7Data(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chart7Data: chartData,
      };
    },
    postCommissioningData(state, { payload: commissioningData }) {
      //返回state 航材投产数据
      return {
        ...state,
        commissioningData: [...commissioningData],
      };
    },
    postChart9Data(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chart9Data: [...chartData],
      };
    },
    postChartColData1(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chartColData1: chartData,
      };
    },
    postChartColData2(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chartColData2: chartData,
      };
    },
    postChartColData3(state, { payload: chartData }) {
      //返回state 列表数据
      return {
        ...state,
        chartColData3: chartData,
      };
    },
  },
}
