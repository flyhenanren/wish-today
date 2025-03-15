<script setup lang="ts">
import { h, nextTick, shallowRef, ref, watch, inject } from 'vue'
import type { DataTableColumns, DataTableRowKey, DropdownOption  } from 'naive-ui'
import {useMessage} from 'naive-ui'
import { DumpInfo, useDump } from '../../api/api';
import DumpCount from './DumpCount.vue';
import ThreadInfo from './ThreadInfo.vue';
import useIpc from '../../ipc/useIpc';
import { IGlobalProvider } from '../../types';
const message = useMessage()
const {onOpenSpace, createWindow} = useIpc()

const provider = inject<IGlobalProvider>('globalProvider')

provider?.bus.on('openSpace', (workSpaceId)=>{
  openSpace(workSpaceId)
})

const splitMin = ref(0.3)
const splitMax = ref(0.6)

const useFileApi = useDump()

// 当前的文件
const currentFile = ref<RowData | undefined>()
const rowKey = (row: RowData) => row.file_id

// 勾选的文件
const selectedRows = ref<DumpInfo[]>([])

const currentComponent = shallowRef<any>(DumpCount)
const bindParam = ref<{
  selected?: DumpInfo[]
  file?: RowData
}>({
  selected: []
})

const actionEvent = ref<{[key:string]: (...args:any[]) => void}>({
  back: closeDetail
})

function closeDetail() {
  currentComponent.value = DumpCount
  bindParam.value = {
    selected: selectedRows.value
  }
}

onOpenSpace((_event: any, arg: any) => {
  openSpace(arg.id)
})

function openSpace(id: string){
  useFileApi.list(id).then((resp) => {
    if(resp.code === 200){
      buildRows(resp.data)
    }else{
      message.error(resp.message!)
    }
  })
}

const checkedRowKeys = ref<string[]>([])
const data = ref<RowData[]>([])
function buildRows(resp: DumpInfo[]) {
  selectedRows.value = []
  data.value = []
  resp.forEach(e =>{
    data.value.push({
      file_id: e.file_id,
      file_name: e.file_name,
      time: e.time,
      alive: `${e.run_threads}/${e.threads}`,
      block_threads: e.block_threads
    })
    checkedRowKeys.value.push(e.file_id)
    selectedRows.value.push(e)
    bindParam.value.selected = selectedRows.value
  })
}
interface RowData {
  file_id: string
  file_name: string
  time: string
  alive: string
  block_threads: number
}



const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
  },
  {
    title: '文件名',
    key: 'file_name',
    className: 'show-text',
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '时间',
    key: 'time',
    width: 200,
    className: 'show-text'
  },
  {
    title: '运行中',
    key: 'alive',
    width: 100,
    className: 'show-text'
  },
  {
    title: '阻塞',
    key: 'block_threads',
    width: 60,
    className: 'show-text'
  }
]

function rowProps(row: RowData) {
  return {
    style: 'cursor: pointer;',
    onDblclick: () => {
      selectedFile(row)
    },
    onContextmenu: (e: MouseEvent) => {
      e.preventDefault()
      showDropdownRef.value = false
      currentFile.value = row
      nextTick().then(() => {
        showDropdownRef.value = true
        xRef.value = e.clientX
        yRef.value = e.clientY
      })
    }
  }
}


function selectedFile(file: RowData) {
  currentFile.value = file
  currentComponent.value = ThreadInfo
  bindParam.value.file = file
}

function handleCheck(rowKeys: DataTableRowKey[]) {

}


function rowClassName(row: RowData) {
    if (row.file_id === currentFile.value?.file_id){
      return 'selected-row'
    }
    return ''
}

const showDropdownRef = ref(false)

const options: DropdownOption[] = [
  {
    label: '线程详情',
    key: 'threadDetail'
  },
  {
    label: '锁详情',
    key: 'monitorDetail'
  },
  {
    label: '比较选中线程',
    key: 'compareThreads'
  },
  {
    label: '比较选中锁',
    key: 'compareMonitors'
  },
  {
    label: () => h('span', { style: { color: 'red' } }, '删除'),
    key: 'delete'
  },
  {
    label: () => h('span', { style: { color: 'red' } }, '删除所有'),
    key: 'deleteAll'
  }
]
const xRef = ref(0)
const yRef = ref(0)

function onClickoutside() {
  showDropdownRef.value = false
}
function handleSelect(item: string) {
  showDropdownRef.value = false
  switch(item){
    case 'threadDetail':{
      createWindow({ isMainWin: false, route: `/threadDetail`, data: {
            file: currentFile.value?.file_id
        }})
      break;
    }
  }
}

</script>

<template>
  <div class="dump-file-container">
    <n-split direction="horizontal" :max="splitMax" :min="splitMin">
      <template #1>
        <div class="dump-list">
          <n-data-table virtual-scroll v-model:checked-row-keys="checkedRowKeys" size="small" max-height="800px"
            :row-props="rowProps" :columns="columns" :data="data" :row-key="rowKey"
            :row-class-name="rowClassName"
            @update:checked-row-keys="handleCheck" />
          <n-dropdown placement="bottom-start" trigger="manual" :x="xRef" :y="yRef" :options="options"
            :show="showDropdownRef" :on-clickoutside="onClickoutside" @select="handleSelect" />
        </div>
      </template>
      <template #2>
        <KeepAlive include="DumpCount">
            <component :is="currentComponent" 
            v-bind="bindParam"
            v-on="actionEvent"
            />
        </KeepAlive>
      </template>
    </n-split>
  </div>
</template>

<style scoped>
.dump-file-container {
  border: 1px solid #dcdee2;
}

.dump-list {
  /* padding: 10px; */
  height: 100%;
}
</style>

<style>
.selected-row  .show-text{
  color: #18a058;
}
</style>
