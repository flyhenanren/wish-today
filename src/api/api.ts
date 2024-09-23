import { get, post } from "./axios";

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
  function list(): Promise<DumpInfo[]> {
    return get<DumpInfo[]>(`${root}/list`);
  }
  function queryDetail(fileName: String) {
    return post(`${root}/query`, fileName);
  }
  function countDumpStatus(param: StatusQuery): Promise<StatusCount[]>  {
    return post<StatusCount[]>(`${root}/count_dump`, param);
  }
  function countThreadStatus(param: StatusQuery) : Promise<StatusCount[]> {
    return post<StatusCount[]>(`${root}/count_threads`, param);
  }
  return {
    list,
    queryDetail,
    countDumpStatus,
    countThreadStatus,
  };
}

export interface DumpInfo {
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
