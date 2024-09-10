import {
  app,
  BrowserWindow,
  shell,
  ipcMain,
  Menu,
  Tray,
  dialog,
  IpcMainEvent,
} from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import os from "node:os";
import path from "node:path";
import { IGroup, IWindowOpt, windowsCfg } from "./types";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_ROOT = path.join(__dirname, "../..");

// 表示 Electron 主进程文件的输出目录路径
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
// 渲染进程文件的输出目录路径。
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

// Disable GPU Acceleration for Windows 7
if (os.release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

const preload = path.join(__dirname, "../preload/index.mjs");
const indexHtml = path.join(RENDERER_DIST, "index.html");

export class window {
  main: BrowserWindow | null | undefined;
  group: IGroup;
  tray: Tray | null;
  constructor() {
    this.main = null; //当前页
    this.group = {}; //窗口组
    this.tray = null; //托盘
  }
  // 获取窗口
  getWindow(id: number): any {
    return BrowserWindow.fromId(id);
  }

  createWindows(options: object) {
    console.log("------------start create window...");
    let args = Object.assign({}, windowsCfg, options);
    // 判断窗口是否存在
    for (let i in this.group) {
      if (
        this.getWindow(Number(i)) &&
        this.group[i].route === args.route &&
        !this.group[i].isMultiWindow
      ) {
        console.log("window is exits");
        this.getWindow(Number(i)).focus();
        return;
      }
    }
    // 创建 electron 窗口的配置参数
    let opt = this.defaultOption([args.width || 390, args.height || 590]);
    // 判断是否有父窗口
    if (args.parentId) {
      console.log("parentId:" + args.parentId);
      opt.parent = this.getWindow(args.parentId) as BrowserWindow; // 获取主窗口
    } else if (this.main) {
      console.log("current main window");
    } // 还可以继续做其它判断
    // 根据传入配置项，修改窗口的相关参数
    opt.modal = args.modal;
    opt.resizable = args.resizable; // 窗口是否可缩放
    if (args.backgroundColor) opt.backgroundColor = args.backgroundColor; // 窗口背景色
    if (args.minWidth) opt.minWidth = args.minWidth;
    if (args.minHeight) opt.minHeight = args.minHeight;
    if (args.isMainWin) opt.autoHideMenuBar = false;

    let win: BrowserWindow = new BrowserWindow(opt);
    console.log("window id:" + win.id);
    this.group[win.id] = {
      route: args.route,
      isMultiWindow: args.isMultiWindow,
    };
    // 是否最大化
    if (args.maximize && args.resizable) {
      win.maximize();
    }
    // 是否主窗口
    if (args.isMainWin) {
      if (this.main) {
        console.log("main windows exist");
        delete this.group[this.main.id];
        this.main.close();
      }
      this.main = win;
    }
    args.id = win.id;
    win.on("close", () => {
      delete this.group[win.id];
      win.setOpacity(0);
    });
    if (VITE_DEV_SERVER_URL) {
      win.loadURL(`${VITE_DEV_SERVER_URL}#${args.route}`);
      // Open devTool if the app is not packaged
      win.webContents.openDevTools();
    } else {
      win.loadFile(indexHtml, { hash: args.route });
    }

    // Test actively push message to the Electron-Renderer
    win.webContents.on("did-finish-load", () => {
      win?.webContents.send(
        "main-process-message",
        new Date().toLocaleString()
      );
    });

    // Make all links open with the browser, not with the application
    win.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith("https:")) shell.openExternal(url);
      return { action: "deny" };
    });
    // win.webContents.on('will-navigate', (event, url) => { }) #344
    win.maximize();

    win.once("ready-to-show", () => {
      win.show();
    });
    // startServer();
    return win;
  }

  listen() {
    // New window example arg: new windows url
    ipcMain.handle("open-win", (_, arg) => {
      const childWindow = new BrowserWindow({
        webPreferences: {
          preload,
          nodeIntegration: true,
          contextIsolation: false,
        },
      });

      if (VITE_DEV_SERVER_URL) {
        childWindow.loadURL(`${VITE_DEV_SERVER_URL}#${arg}`);
      } else {
        childWindow.loadFile(indexHtml, { hash: arg });
      }
    });

    // 固定
    ipcMain.on("pinUp", (event: IpcMainEvent, winId) => {
      event.preventDefault();
      if (winId && (this.main as BrowserWindow).id == winId) {
        let win: BrowserWindow = this.getWindow(
          Number((this.main as BrowserWindow).id)
        );
        if (win.isAlwaysOnTop()) {
          win.setAlwaysOnTop(false); // 取消置顶
        } else {
          win.setAlwaysOnTop(true); // 置顶
        }
      }
    });

    // 隐藏
    ipcMain.on("window-hide", (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).hide();
      } else {
        for (let i in this.group) {
          if (this.group[i]) this.getWindow(Number(i)).hide();
        }
      }
    });

    // 显示
    ipcMain.on("window-show", (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).show();
      } else {
        for (let i in this.group) {
          if (this.group[i]) this.getWindow(Number(i)).show();
        }
      }
    });

    // 最小化
    ipcMain.on("mini", (event: IpcMainEvent, winId) => {
      console.log("min window id", winId);
      if (winId) {
        this.getWindow(Number(winId)).minimize();
      } else {
        for (let i in this.group) {
          if (this.group[i]) {
            this.getWindow(Number(i)).minimize();
          }
        }
      }
    });

    // 最大化
    ipcMain.on("window-max", (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).maximize();
      } else {
        for (let i in this.group)
          if (this.group[i]) this.getWindow(Number(i)).maximize();
      }
    });

    // 创建窗口
    ipcMain.on("window-new", (event: IpcMainEvent, args) => {
      this.createWindows(args);
    });
  }

  createTray() {
    console.log("create tray");
    const contextMenu = Menu.buildFromTemplate([
      {
        label: "注销",
        click: () => {
          console.log("注销");
          // 主进程发送消息，通知渲染进程注销当前登录用户 --todo
        },
      },
      {
        type: "separator", // 分割线
      },
      // 菜单项
      {
        label: "退出",
        role: "quit", // 使用内置的菜单行为，就不需要再指定 click 事件
      },
    ]);
    this.tray = new Tray(path.join(process.env.VITE_PUBLIC, "favicon.ico")); // 图标
    // 点击托盘显示窗口
    this.tray.on("click", () => {
      for (let i in this.group) {
        if (this.group[i]) this.getWindow(Number(i)).show();
      }
    });
    // 处理右键
    this.tray.on("right-click", () => {
      this.tray?.popUpContextMenu(contextMenu);
    });
    this.tray.setToolTip("测试托盘");
  }

  createMenu() {
    let newWindow: BrowserWindow | null = null;
    //创建菜单集合
    let template = [
      {
        label: "文件",
        submenu: [
          {
            label: "打开文件",
            accelerator: "ctrl+o", //绑定快捷键
            click: () => {
              dialog
                .showOpenDialog({
                  title: "选择压缩包",
                })
                .then((result) => {
                  if (!result.canceled) {
                    console.log(result.filePaths);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            },
          },
          {
            label: "打开文件夹",
            accelerator: "ctrl+k", //绑定快捷键
            click: () => {},
          },
          {
            label: "新建窗口",
            accelerator: "ctrl+shift+n",
            click: () => {
              //绑定事件
              newWindow = new BrowserWindow({
                width: 500,
                height: 300,
                //主题渲染内容
                webPreferences: {
                  nodeIntegration: true, //集成node环境
                },
              });
              newWindow.loadFile("index.html");
              newWindow.on("closed", () => {
                newWindow = null;
              });
            },
          },
        ],
      },
      {
        label: "视图",
        submenu: [
          {
            label: "CPU",
            click: () => {},
          },
          {
            label: "线程",
            click: () => {},
          },
          {
            label: "内存",
            click: () => {},
          },
          {
            label: "总结",
            click: () => {},
          },
        ],
      },
      {
        label: "CPU",
        submenu: [
          {
            label: "更多",
            click: () => {},
          },
        ],
      },
      ,
      {
        label: "Memory",
        submenu: [
          {
            label: "更多",
            click: () => {},
          },
        ],
      },
      {
        label: "帮助(H)",
        submenu: [
          {
            label: "更多",
            click: () => {},
          },
        ],
      },
    ];
    //载入模板
    const menu = Menu.buildFromTemplate(template);
    //主进程设置应用菜单
    Menu.setApplicationMenu(menu);
  }
  // 窗口配置
  defaultOption(wh: Array<number> = []): IWindowOpt {
    return {
      width: wh[0],
      height: wh[1],
      backgroundColor: "#f7f8fc",
      autoHideMenuBar: true,
      resizable: true,
      minimizable: true,
      maximizable: true,
      frame: true,
      icon: path.join(process.env.VITE_PUBLIC, "favicon.ico"),
      show: false,
      minWidth: 0,
      minHeight: 0,
      modal: true,
      webPreferences: {
        // contextIsolation: false, //上下文隔离
        // nodeIntegration: true, //启用 Node 集成（是否完整的支持 node）
        webSecurity: false,
        preload: preload,
      },
    };
  }
}
