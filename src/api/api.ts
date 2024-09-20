import { get, post } from './axios'


export function useApi(){
    function check(){
        return get("/health")
    }
    return {
        check
    }
}

export function useFile(){
    const root = "/file"

    function open(data?: any){
        return post(`${root}/open`, data)
    }
    return {
        open
    }
}

export function useDump(){
     const root = "/dump"
    function list(){
        return get(`${root}/list`)
    }
    function queryDetail(fileName: String){
        return post(`${root}/query`, fileName)
    }
    function countThread(param: any){
        return post(`${root}/count_thread`, param)
    }
    return {
        list,
        queryDetail,
        countThread
    }
}