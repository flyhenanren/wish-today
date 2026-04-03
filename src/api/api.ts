import { ThreadStatus } from "../types";
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
    countFileStatus,
    countThreadStatus,
    listThreadsPool
  };
}


export function useThread(){
  const root = "/thread";
  function queryThreadDetail(query?: ThreadQuery):Promise<Response<ThreadListResponse>>{
    return post<ThreadListResponse>(`${root}/query`, query);
  }

  function getContent(threadId?: string):Promise<Response<ThreadContent>>{
    return get<ThreadContent>(`${root}/content/${threadId}`);
  }


  return {
    queryThreadDetail,
    getContent
  }
}

export function useTask(){
  const root = 'task'
  function queryProcess(task_id: string): Promise<Response<TaskStatus>>{
    return get<TaskStatus>(`${root}/query_process/${task_id}`);
  }
  return {
    queryProcess
  }
}

// CallTree API
export function useCallTree() {
  const root = "/calltree";
  function getRoots(fileId: string, page?: number, pageSize?: number): Promise<Response<CallTreeRootsResponse>> {
    return get<CallTreeRootsResponse>(`${root}/roots/${fileId}`, { page, page_size: pageSize });
  }
  function getChildren(parentMethod: string, fileId: string, page?: number, pageSize?: number): Promise<Response<CallTreeChildrenResponse>> {
    return get<CallTreeChildrenResponse>(`${root}/children/${encodeURIComponent(parentMethod)}`, { file_id: fileId, page, page_size: pageSize });
  }
  function getWorkspaceRoots(workspaceId: string, limit?: number): Promise<Response<CallTreeNode[]>> {
    return get<CallTreeNode[]>(`${root}/workspace/${workspaceId}`, { limit });
  }
  function buildCallTree(fileId: string): Promise<Response<string>> {
    return post<string>(`${root}/build/${fileId}`, {});
  }
  function deleteByFile(fileId: string): Promise<Response<void>> {
    return del<void>(`${root}/file/${fileId}`);
  }
  return {
    getRoots,
    getChildren,
    getWorkspaceRoots,
    buildCallTree,
    deleteByFile
  };
}

// Search API
export function useSearch() {
  const root = "/search";
  function searchMethods(param: SearchQuery): Promise<Response<MethodMatch[]>> {
    return post<MethodMatch[]>(`${root}/methods`, param);
  }
  return {
    searchMethods
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
  thread_ids: string[]
}

export type ThreadQuery ={
  file_id?: string
  status?: string
  thread_ids?: string[]
  page?: number
  page_size?: number
}

export interface ThreadDetail{
  id: string,
  name: string,
  status: ThreadStatus,
  nid: string,
  method: string,
  stack_dep: number,
}

export interface ThreadContent{
  id: string,
  name: string,
  status: ThreadStatus,
  content: string[]
}

export interface ThreadListResponse {
  threads: ThreadDetail[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}


export interface TaskStatus{
  progress: number,
  message: string,
  phase: string
  result: string
}

// CallTree types
export interface CallTreeNode {
  id: string;
  file_id: string;
  workspace: string;
  method_name: string;
  depth: number;
  parent_method: string | null;
  samples: number;
  is_leaf: boolean;
  child_count: number;
}

export interface CallTreeRootsResponse {
  nodes: CallTreeNode[];
  total: number;
  file_id: string;
}

export interface CallTreeChildrenResponse {
  nodes: CallTreeNode[];
  total: number;
  has_more: boolean;
}

// Search types
export interface SearchQuery {
  workspace_id?: string;
  query: string;
  fuzzy?: boolean;
  max_results?: number;
}

export interface MethodMatch {
  method_name: string;
  total_samples: number;
  file_count: number;
}