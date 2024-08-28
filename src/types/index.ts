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
export interface Thread {
    tid: string
    nid: string
    name: string
    status:  ThreadStatus
    waitting?: string
}  