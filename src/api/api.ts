import { get } from './axios'

/**
 * @description -封装User类型的接口方法
 */
export class UserService {       // 模块一
    /**
     * @description 用户登录
     * @param {string} username - 用户名
     * @return {HttpResponse} result
     */
    static async health() {   // 接口一
        return get('/health')
    }
}



export function useCheck(){
    return get("/health")
}