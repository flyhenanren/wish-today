<script setup lang="ts">
import { ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'

const split = ref(0.5)
const splitMin = ref('100px')
const splitMax = ref('300px')



interface RowData {
    fileName: string
    timeStamp: string
    alive: string
    gcCount: number
    monitorCount: number
}

const data: RowData[] = [
    {
      fileName: "threaddump_20240402_102234.txt_1",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_2",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_3",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_4",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_5",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_6",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_7",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_8",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_9",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_10",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
    {
      fileName: "threaddump_20240402_102234.txt_11",
      timeStamp: "2024/04/02 10:22:34",
      alive: "1/22",
      gcCount: 0,
      monitorCount: 0
    },
   
]
const columns: DataTableColumns<RowData> = [
    {
        title: '文件名',
        key: 'fileName'
    },
    {
        title: '时间',
        key: 'timeStamp'
    },
    {
        title: '执行率',
        key: 'alive',
        width: 100
    },
    {
        title: 'GC',
        key: 'gcCount',
        width: 40
    },
    {
        title: '阻塞',
        key: 'monitorCount',
        width: 60
    }
]

const rowKey = (row: RowData) => row.fileName
</script>

<template>
  <div class="demo-split">
    <Split v-model="split" :min="splitMin" :max="splitMax">
      <template #left>
        <div class="demo-split-pane">
          <n-data-table 
            virtual-scroll
            size="small"
            :max-height="400"
            :columns="columns" :data="data" :row-key="rowKey" />
        </div>
      </template>
      <template #right>
        <div class="demo-split-pane">
          Right Pane
        </div>
      </template>
    </Split>
  </div>
</template>

<style scoped>
.demo-split {
  height: 600px;
  border: 1px solid #dcdee2;
}

.demo-split-pane {
  padding: 10px;
}
</style>
