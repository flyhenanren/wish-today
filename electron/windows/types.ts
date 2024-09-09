import { BrowserWindow } from "electron";

export interface IWindowsCfg {
  id: number | null;
  title: string;
  icon: string;
  width: number | null;
  height: number | null;
  minWidth: number | null;
  minHeight: number | null; //
  route: string; // 路由信息
  resizable: boolean; // 允许缩放
  maximize: boolean; //最大化窗口
  backgroundColor: string; //背景色
  data: object | null; // 传入数据
  isMultiWindow: boolean; // 是否支持多开窗口
  isMainWin: boolean; // 是否为主窗口
  parentId: number | null; //父窗口ID
  modal: boolean; // 模态窗口，禁用父窗口
}
export interface IWindowOpt {
  width: number;
  height: number;
  icon: string;
  backgroundColor: string;
  autoHideMenuBar: boolean;
  resizable: boolean;
  minimizable: boolean;
  maximizable: boolean;
  frame: boolean;
  show: boolean;
  parent?: BrowserWindow;
  minWidth: number;
  minHeight: number;
  modal: boolean;
  webPreferences: {
    contextIsolation?: boolean; //上下文隔离
    nodeIntegration?: boolean; //启用 Node 集成（是否完整的支持 node）
    webSecurity: boolean;
    preload: string;
  };
}

// 新建窗口时可以传入的一些options配置项
export const windowsCfg: IWindowsCfg = {
  id: null, //唯一 id
  title: "", //窗口标题
  icon:"",
  width: null, //宽度
  height: null, //高度
  minWidth: null, //最小宽度
  minHeight: null, //最小高度
  route: "/", // 页面路由 URL '/manage?id=123'
  resizable: true, //是否支持调整窗口大小
  maximize: false, //是否最大化
  backgroundColor: "#eee", //窗口背景色
  data: null, //数据
  isMultiWindow: false, //是否支持多开窗口 (如果为 false，当窗体存在，再次创建不会新建一个窗体 只 focus 显示即可，，如果为 true，即使窗体存在，也可以新建一个)
  isMainWin: false, //是否主窗口(当为 true 时会替代当前主窗口)
  parentId: null, //父窗口 id  创建父子窗口 -- 子窗口永远显示在父窗口顶部 【父窗口可以操作】
  modal: false, //模态窗口 -- 模态窗口是禁用父窗口的子窗口，创建模态窗口必须设置 parent 和 modal 选项 【父窗口不能操作】
};
// 窗口组
export interface IGroup {
  [props: string]: {
    route: string;
    isMultiWindow: boolean;
  }
}
