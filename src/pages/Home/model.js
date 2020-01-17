//引入api
import * as api from 'api'

export default {
  namespace: 'home', //命名空间
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
    mapPointData: {}, //地图当前区域点集合
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
  },
}
