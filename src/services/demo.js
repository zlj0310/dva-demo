import axios from '../utils/axios';

export function getUserData(params) {
  return axios.get('/shop/category/list.do', {
    params: params || {},
  });
}

export function getDecoInfo(params) {
  return axios.get('/shop/decoinfo.do', {
    params: params || {},
  });
}
