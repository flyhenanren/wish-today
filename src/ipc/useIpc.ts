export default function () {

  function createWindow(opt: any){
    window.ipcRenderer.send('window-new', opt)
  }

  function onOpenSpace(cb: (_event: any, workSapceId: string)=>void) {
    window.ipcRenderer.on('open-work-space', cb)
  }

  function getData(callBack: (data: any)=> void){
    getWinId().then(winId => {
      console.log("winId" + winId)
        window.ipcRenderer.invoke(`get-window-params-${winId}`).then(data=>{
          callBack(data)
        })
    })
    
  }

  function getWinId(){
    return window.ipcRenderer.invoke("get-window-id")
  }
  
  return{
    createWindow,
    onOpenSpace,
    getData,
    getWinId
  }

}

