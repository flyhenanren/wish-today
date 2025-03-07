<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { ThreadStatus } from '../../../types';
import useIpc from '../../../ipc/useIpc';
import { ThreadDetail, useThread } from '../../../api/api';


const {queryThreadDetail} = useThread()
const {getData} = useIpc()

onMounted(()=>{
  getData((param)=>{
    queryThreadDetail({
      file_id: param.file,
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
        width: 60,
        resizable: true
    }
]

const rowKey = (row: RowData) => row.name


function buildRowData(data: ThreadDetail[]){
  data.forEach(e => {
      tableData.push({
        name: e.name,
        status: e.status,
        nativeId: e.nid,
        method: e.method,
        statckDepth: e.stack_dep
      })
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
            :columns="columns" :data="tableData" :row-key="rowKey" />
        </div>
      </template>
      <template #right>
        <div class="thread-pannel">
          Right Pane
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
</style>
