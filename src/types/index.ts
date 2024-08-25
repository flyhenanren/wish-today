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
    NEW,
    RUNNABLE,
    "TIMED_WAITING (sleeping)", //SLEEPING
    "WAITING (on object monitor)",//IN_OBJECT_WAIT
    "TIMED_WAITING (on object monitor)", //IN_OBJECT_WAIT_TIMED
    "WAITING (parking)", //PARKED
    "TIMED_WAITING (parking)", //PARKED_TIMED
    "BLOCKED (on object monitor)",//BLOCKED_ON_MONITOR_ENTER
    TERMINATED, //TERMINATED
    UNKNOWN
}
export interface Thread {
    tid: string
    nid: string
    name: string
    status:  ThreadStatus
    waitting?: string
}  