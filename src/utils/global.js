// 获取匿名token
export const getStorageToken = (str) => {
  const headerStorage = str.split(';');
  let token;
  for (let i = 0; i < headerStorage.length; i++) {
    if (headerStorage[i].indexOf('token') > -1) {
      token = headerStorage[i].split('=')[1];
    }
  }
  return token;
};
