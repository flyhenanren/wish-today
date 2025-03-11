import {
  BrowserWindow,
  Menu,
  dialog,
  MenuItem,
  ipcMain
} from "electron";

import Api from "../api/axios";

export default class MenuBuilder{

  buildMenuTemplate(main: BrowserWindow) {
    const {openFile} = Api()
    // 创建主菜单
    const menu = new Menu();
    // 创建第一级菜单
    const fileMenu = new Menu();

    fileMenu.append(
      new MenuItem({
        label: "打开文件",
        accelerator: "ctrl+o",
        click: () => {
          dialog
            .showOpenDialog({
              title: "选择压缩包",
            })
            .then((result) => {
              if (!result.canceled) {
                openFile(result.filePaths[0]).then(data => {
                  main.webContents.send("open-file", data);
                })
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
      })
    );

    fileMenu.append(
      new MenuItem({ id: "openRecent", label: "打开最近的文件", submenu: [] })
    );

    const viewMenu = new Menu();
    const cpuMenu = new Menu();
    const memoryMenu = new Menu();
    const helpMenu = new Menu();
    helpMenu.append(new MenuItem({
      label: "设置",
      click: () => {
        ipcMain.emit("setting");
      },
    }))
    helpMenu.append(new MenuItem({
      label: "关于",
      click: () => {
        ipcMain.emit("about");
      },
    }))

    // 将二级菜单添加到主菜单
    menu.append(new MenuItem({ label: "文件", submenu: fileMenu }));
    menu.append(new MenuItem({ label: "视图", submenu: viewMenu }));
    menu.append(new MenuItem({ label: "cpu", submenu: cpuMenu }));
    menu.append(new MenuItem({ label: "memory", submenu: memoryMenu }));
    menu.append(new MenuItem({ label: "帮助", submenu: helpMenu }));
    return menu;
  }

  async syncRecentMenu(main:BrowserWindow, menu: Electron.Menu) {
    const {cleanSubMenu, fetchSubMenu} = Api()
    const openRecent = menu.getMenuItemById("openRecent");
    const newSubMenuItems = await fetchSubMenu(); 
    // 移除当前的所有子菜单项
    if (openRecent.submenu.items.length > 0) {
      openRecent.submenu.items.splice(0, openRecent.submenu.items.length);
    }
  
    // 添加新的二级菜单项
    newSubMenuItems.forEach((item) => {
      openRecent.submenu.append(
        new MenuItem({
          label: item.file_path,
          click: () => {
            main.webContents.send("open-work-space", item);
          },
        })
      );
    });
  
    if (newSubMenuItems.length !== 0) {
      openRecent.submenu.append(new MenuItem({ type: "separator" }));
      openRecent.submenu.append(
        new MenuItem({
          label: "清空最近的文件",
          click: () => {
            cleanSubMenu().then(() => {
              main.webContents.send("clean-work-space");
              const newMenu = this.buildMenuTemplate(main)
              Menu.setApplicationMenu(newMenu)
            });
          },
        })
      );
    }
    Menu.setApplicationMenu(menu); // 更新菜单
  }
}
