import { S } from "vite/dist/node/types.d-aGj9QkWt";

export interface Sheet{
    key: string
    name: string
    route: string
    show: boolean
    icon?: string
}

export interface StackTrace {
    id: string;
    name: string;
    value: number;
    children?: [StackTrace];
}
  
export enum ThreadStatus {
    NEW = "NEW",
    RUNNABLE = "RUNNABLE",
    TIMED_WAITING = "TIMED_WAITING",
    WAITING="WAITING",
    BLOCKED ="BLOCKED",
    TERMINATED="TERMINATED", 
    UNKNOWN="UNKNOWN"
}

// 函数：将字符串转换为枚举
export function statusTransfer(status: string): ThreadStatus | undefined {
    if (Object.values(ThreadStatus).includes(status as ThreadStatus)) {
        return status as ThreadStatus;
    }
    return undefined; // 如果没有匹配的值，返回 undefined
}

export interface Thread {
    tid: string
    nid: string
    name: string
    status:  ThreadStatus
    waitting?: string
}  