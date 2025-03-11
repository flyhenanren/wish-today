<script setup lang="ts">
import { ref, watch,provide } from 'vue'
import useIpc from './ipc/useIpc';
import { TaskStatus, useTask } from './api/api';
import { IGlobalProvider } from './types';
import Bus from './bus/bus';
const { onOpenFile,refreshMenu } = useIpc()
const { queryProcess } = useTask()

const bus = new Bus()
provide<IGlobalProvider>('globalProvider',{
  bus: bus
})

onOpenFile((_event: any, arg: any) => {
  showModal.value = true
  startInterval(arg)
})

let interval: any
function startInterval(taskId: string) {
  if (!interval) {
    stopInterval()
  }
  status.value = 'default'
  percentage.value = 0
  closable.value = false
  message.value = ''
  interval = setInterval(() => {
    queryProcess(taskId).then((resp) => {
      if (resp.code === 200) {
        parseProgress(resp.data)
      } else {
        stopInterval(false)
      }
    }).catch(err => {
      stopInterval(false)
    })
  }, 2000)
}

function stopInterval(success?: boolean) {
  if (interval) {
    clearInterval(interval)
  }
  interval = null
  if (success !== undefined) {
    status.value = success ? 'success' : 'error'
    if(success){
      showModal.value = false
    }else{
      closable.value = true
    }
  }
}

function parseProgress(progress: TaskStatus) {
  percentage.value = progress.progress
  message.value = progress.message
  if (progress.progress === 100 || progress.phase === 'Completed') {
    stopInterval(true)
    bus.emit('openSpace', progress.result)
    refreshMenu()
  } else {
    if (progress.phase === 'Failed') {
      stopInterval(false)
    }
  }
}

const showModal = ref(false)
const modalTitle = ref('解析文件')
const percentage = ref(0)
const message = ref()
const status = ref('default')
const closable = ref(false)
watch(() => percentage.value,
  (value) => {
    if (value === 100) {
      interval = undefined
    }
  })

  function handleClose(){
    showModal.value = false
  }
</script>

<template>
  <n-message-provider>
    <div :class="$style.rootContainer">
      <RouterView />
    </div>
    <n-modal :show="showModal">
      <n-card style="width: 600px" 
      :title="modalTitle"
       size="medium"
       :closable="closable"
       @close="handleClose"
        :bordered="false"
         role="dialog" aria-modal="true">
        <div>
          <n-progress type="line" :status="status" :percentage="percentage" />
          <div>{{ message }}</div>
        </div>
      </n-card>
    </n-modal>
  </n-message-provider>
</template>

<style scoped module>
.rootContainer {
  width: 100%;
  height: 100%;
}
</style>
