import {
  app,
  BrowserWindow,
} from "electron";
import os from "node:os";
import { window } from "../windows/window";


// Disable GPU Acceleration for Windows 7
if (os.release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

let win: BrowserWindow | null = null;

async function createWindow() {
  let wd = new window();
  wd.listen(); // 设置监听事件，比如主进程与渲染进程之间的通信事件
  win = wd.createWindows({ isMainWin: true }); // 创建窗口，默认为主窗口
  // wd.createTray(); // 创建系统托盘
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

// 运行第二个实例。
app.on("second-instance", () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
