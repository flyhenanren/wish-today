export default function () {

  function createWindow(opt: any){
    window.ipcRenderer.send('window-new', opt)
  }

  return{
    createWindow
  }
}

