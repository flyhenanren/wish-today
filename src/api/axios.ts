import axios from "axios";
import { showMessage } from "./status"; // 引入状态码文件

// 设置接口超时时间
axios.defaults.timeout = 60000;

// 请求地址，这里是动态赋值的的环境变量
// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL;

console.log('url='+import.meta.env.VITE_API_BASEURL)
//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // 配置请求头
    config.headers?.setContentType("application/json;charset=UTF-8");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status); // 传入响应码，匹配响应码对应信息
      return Promise.reject(response.data);
    } else {
      console.log("网络连接异常,请稍后再试!");
    }
  }
);


// 封装GET请求
export function get<T>(url: string, params?: any): Promise<T> {
   return axios.get<T>(url, { params })
      .then(response => response.data)
      .catch(error => {
         throw error;
      });
}

// 封装POST请求
export function post<T>(url: string, data?: any): Promise<T> {
   return axios.post<T>(url, data)
      .then(response => response.data)
      .catch(error => {
         throw error;
      });
}

// put
export function put<T>(url: string, data?: any): Promise<T> {
   return axios.put<T>(url, data)
      .then(response => response.data)
      .catch(error => {
         throw error;
      });
}
//delete
export function del<T>(url: string): Promise<T> {
   return axios.delete<T>(url)
      .then(response => response.data)
      .catch(error => {
         throw error;
      });
}

