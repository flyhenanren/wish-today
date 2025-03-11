export default function () {

  function createWindow(opt: any){
    window.ipcRenderer.send('window-new', opt)
  }

  function onOpenSpace(cb: (_event: any, workSapceId: string)=>void) {
    window.ipcRenderer.on('open-work-space', cb)
  }

  function getData(callBack: (data: any)=> void){
    getWinId().then(winId => {
        window.ipcRenderer.invoke(`get-window-params-${winId}`).then(data=>{
          callBack(data)
        })
    })
  }

  function onOpenFile(cb: (_event: any, workSapceId: string)=>void) {
    window.ipcRenderer.on('open-file', cb)
  }

  function cleanWorkSpace(cb: (_event: any)=>void) {
    window.ipcRenderer.on('clean-work-space', cb)
  }

  function getWinId(){
    return window.ipcRenderer.invoke("get-window-id")
  }

  function refreshMenu(){
    window.ipcRenderer.send('refresh-menu')
  }
  
  function loadConfig(){
      return window.ipcRenderer.invoke("load-config")
  }
  function saveConfig(config: any){
    return window.ipcRenderer.send("save-config", config)
}
  return{
    createWindow,
    onOpenSpace,
    getData,
    getWinId,
    onOpenFile,
    refreshMenu,
    cleanWorkSpace,
    loadConfig,
    saveConfig
  }

}

