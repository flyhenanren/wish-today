import { get, post, Response } from "./axios";

export function useApi() {
  function check() {
    return get("/health");
  }
  return {
    check,
  };
}

export function useFile() {
  const root = "/file";

  function open(data?: any) {
    return post(`${root}/open`, data);
  }
  return {
    open,
  };
}

export function useDump() {
  const root = "/dump";
  function list(workSapceId: string): Promise<Response<DumpInfo[]>> {
    return get<DumpInfo[]>(`${root}/list/${workSapceId}`);
  }
  function queryDetail(fileName: String) {
    return post(`${root}/query`, fileName);
  }
  function countFileStatus(param: StatusQuery): Promise<Response<StatusCount[]>>  {
    return post<StatusCount[]>(`${root}/count_file_status`, param);
  }
  function countThreadStatus(param: StatusQuery) : Promise<Response<StatusCount[]>> {
    return post<StatusCount[]>(`${root}/count_thread_status`, param);
  }
  function listThreadsPool(fileId: string) : Promise<Response<PoolThreads[]>> {
    return get<PoolThreads[]>(`${root}/list_thread_pool/${fileId}`);
  }
  return {
    list,
    queryDetail,
    countFileStatus,
    countThreadStatus,
    listThreadsPool
  };
}

export interface DumpInfo {
  file_id: string;
  block_threads: number;
  end_line: number;
  file_name: string;
  run_threads: number;
  start_line: number;
  threads: number;
  time: string;
}

export interface StatusCount{
    name: string,
    runnable: number,
    waitting: number,
    time_watting: number,
    block: number,
}

export interface StatusQuery {
  files: string[];
  total?: number;
  exclude?: string[];
  status?: string[];
}

export interface PoolThreads{
  name: string
  source_name: string
  count: number
  runnable: number
  waitting: number
  time_waitting: number
  block: number
}