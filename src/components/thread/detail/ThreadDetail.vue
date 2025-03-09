<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { ThreadStatus } from '../../../types';
import useIpc from '../../../ipc/useIpc';
import { ThreadDetail, useThread } from '../../../api/api';

const {queryThreadDetail, getContent} = useThread()
const {getData} = useIpc()

onMounted(()=>{
  getData((param)=>{
    queryThreadDetail({
      file_id: param.file,
      status: param.status,
      thread_ids: param.ids
    }).then((resp) => {
      if(resp.code === 200){
        buildRowData(resp.data)
      }
    })
  })
})


const split = ref(0.4)
const splitMin = ref('500px')
const splitMax = ref('800px')


interface RowData {
    id: string
    name: string
    status: ThreadStatus
    nativeId: string
    method: string
    statckDepth: number
}

const tableData: RowData[] = reactive([])
const columns: DataTableColumns<RowData> = [
    {
        title: '线程',
        key: 'name',
        resizable: true
    },
    {
        title: '状态',
        key: 'status',
        width: 100,
        resizable: true
    },
    {
        title: 'Native ID',
        key: 'nativeId',
        width: 80,
        align: 'right',
        resizable: true
    },
    {
        title: '方法',
        key: 'method',
        resizable: true
    },
    {
        title: '栈深',
        key: 'statckDepth',
        width: 60
    }
]

const rowKey = (row: RowData) => row.name

function rowProps(row: RowData) {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      selectThread(row)
    },
  }
}

function buildRowData(data: ThreadDetail[]){
  data.forEach(e => {
      tableData.push({
        id: e.id,
        name: e.name,
        status: e.status,
        nativeId: e.nid,
        method: e.method,
        statckDepth: e.stack_dep > 2 ? e.stack_dep - 2: 0
      })
  })
}

const threadName =  ref<string>('')
const threadStatus = ref<ThreadStatus>()

const content = ref<string[]>([])
function selectThread(row: RowData){
  getContent(row.id).then(resp => {
    if(resp.code === 200){
      content.value = resp.data.content
      threadName.value = row.name
      threadStatus.value = row.status 
    }
  })
}
</script>

<template>
  <div class="thread-detail">
    <Split v-model="split" :min="splitMin" :max="splitMax">
      <template #left>
        <div class="thread-pannel">
          <n-data-table 
            virtual-scroll
            size="small"
            :max-height="800"
             :row-props="rowProps"
            :columns="columns" :data="tableData" :row-key="rowKey" />
        </div>
      </template>
      <template #right>
        <div class="thread-pannel">
          <div>
            <n-space>
              <span>线程名称</span>
            <span>{{ threadName }}</span>
              </n-space>
            
          </div>
          <n-divider />
          <div>
            <n-space>
              <span>状态</span>
              <span>{{ threadStatus }}</span>
              </n-space>
          </div>
          <n-divider />
          <div>
            <div class="content-container">
              <span v-for="item in content"> {{ item }}</span>
            </div>
          </div>
        </div>
      </template>
    </Split>
  </div>
</template>

<style scoped>
.thread-detail {
  height: 100%;
  border: 1px solid #dcdee2;
}
.thread-pannel{
  padding: 10px;
  width: 100%;
  height: 100%;

}

.content-container{
  display: flex;
  flex-direction: column;
}
</style>
