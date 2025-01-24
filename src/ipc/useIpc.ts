export default function () {

  function createWindow(opt: any){
    window.ipcRenderer.send('window-new', opt)
  }

  function onOpenSapce(event: string, cb: (_event: any, workSapceId: string)=>void) {
    window.ipcRenderer.on(event, cb)
  }

  return{
    createWindow,
    onOpenSapce
  }

}

