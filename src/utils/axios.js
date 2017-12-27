/* eslint-disable no-param-reassign,no-unused-vars,import/first,eqeqeq,import/newline-after-import,default-case,no-case-declarations */
import axios from 'axios';
const basicConfig = require('./config.js');
import { getStorageToken } from './global';


axios.interceptors.request.use((config) => {
  config.url = basicConfig.baseURL + config.url;
  const method = config.method;
  switch (method) {
    case 'get':
      const params = config.params || {};
      params.shopId = basicConfig.shopId;
      break;
    case 'post':
      const data = config.data || {};
      data.shopId = basicConfig.shopId;
      break;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  if (response.data && response.data.success && response.data.data) {
    return response.data.data;
  }else {
    return response;
  }
}, (error) => {
  return Promise.reject(error); // 返回接口返回的错误信息
});

export default axios;

