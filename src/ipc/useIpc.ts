export default function () {

  function createWindow(opt: any){
    window.ipcRenderer.send('window-new', opt)
  }

  function onOpenSpace(cb: (_event: any, workSapceId: string)=>void) {
    window.ipcRenderer.on('open-work-space', cb)
  }
  
  return{
    createWindow,
    onOpenSpace
  }

}

