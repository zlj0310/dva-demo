/* eslint-disable no-unused-vars,eqeqeq */
import * as demoService from '../services/demo';

export default {
  namespace: 'demo',
  state: {
    userData: [],
    decoInfoData: {},
  },
  reducers: {
    userData(state, { payload: { userData } }) {
      return { ...state, userData }; // 必须有返回值（纯函数必须有返回值），否则会报错
    },
    decoInfoData(state, { payload: { decoInfoData } }) {
      return { ...state, decoInfoData };
    },
  },
  effects: {
    *getData(action, { call, put }) {
      const userData = yield call(demoService.getUserData);
      yield put({
        type: 'userData',
        payload: { userData },
      });
    },
    *getDecoInfo(action, { call, put }) {
      const decoInfoData = yield call(demoService.getDecoInfo);
      yield put({
        type: 'decoInfoData',
        payload: { decoInfoData },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname == '/demo') {
          dispatch({ type: 'getData' });
          dispatch({ type: 'getDecoInfo' });
        }
      });
    },
  },
};
