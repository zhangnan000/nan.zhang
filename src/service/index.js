import Axios from 'axios'

Axios.defaults.baseURL=process.env.NODE_ENV === "development"?"/api":"";
Axios.defaults.timeout = 15000;
//添加一个请求拦截器
Axios.interceptors.request.use(config => {
    //在请求发出之前进行一些操作
    return config;
},error => {
    //Do something with request error
    return Promise.reject(error);
})
  //添加一个响应拦截器
Axios.interceptors.response.use(res => {
  if(res.status===403){
    //错误处理
  }
  return res.data
  //在这里对返回的数据进行处理
  // return res
},error => {
  //Do something with response error
  return Promise.reject(error);
})
function split(url,request){
  for (var i in request) {
    url+= '/'+request[i]
  }
  return url
}
/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {},request) {
  if(request){
    url=split(url,request)
  }
  
  return new Promise((resolve, reject) => {
    Axios
      .get(url, {
        params: params
      })
      .then(response => {
        if(response.data.code!=0&&response.data.code!=200){
          return
        }
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
 
/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    Axios.post(url, data).then(
      response => {
        // console.log(response.data.code)
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
