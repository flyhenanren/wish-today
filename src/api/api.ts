import { get } from './axios'


export function useApi(){
    function check(){
        return get("/health")
    }
    return {
        check
    }
}