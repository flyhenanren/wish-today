
window.ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

window.ipcRenderer.on('main-process-message-sum', (_event, ...args) => {
  console.log('[Receive Main-process message-sum]:', ...args)
})


window.ipcRenderer.on('main-process-message-sub', (_event, ...args) => {
  console.log('[Receive Main-process message-sub]:', ...args)
})

