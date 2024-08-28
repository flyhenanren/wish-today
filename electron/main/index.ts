// electron-main/index.ts
import { app, BrowserWindow } from "electron";
import { Window } from "../windows/window"; // 具体方法放在此处
const isDevelopment: boolean = process.env.NODE_ENV !== "production";


// 创建主窗口
async function createWindow() {
  let window = new Window();
  window.listen(); // 设置监听事件，比如主进程与渲染进程之间的通信事件
  window.createWindows({ isMainWin: true }); // 创建窗口，默认为主窗口
  window.createTray(); // 创建系统托盘
}


// 关闭所有窗口
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});


// 准备完成，初始化窗口等操作
app.on("ready", async () => {
  createWindow();
});


// 根据环境处理不同操作
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
