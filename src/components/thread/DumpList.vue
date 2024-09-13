<script setup lang="ts">
import { h, nextTick, ref, watch } from 'vue'
import type { DataTableColumns, DataTableRowKey, DropdownOption } from 'naive-ui'
import ThreadInfo from './detail/ThreadInfo.vue';
import DumpCount from './DumpCount.vue';
const splitMin = ref(0.3)
const splitMax = ref(0.6)



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
  {
    fileName: "threaddump_20240402_102234.txt_12",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  },
  {
    fileName: "threaddump_20240402_102234.txt_13",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  },
  {
    fileName: "threaddump_20240402_102234.txt_14",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  },
  {
    fileName: "threaddump_20240402_102234.txt_15",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  },
  {
    fileName: "threaddump_20240402_102234.txt_16",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  },
  {
    fileName: "threaddump_20240402_102234.txt_17",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  }, {
    fileName: "threaddump_20240402_102234.txt_18",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  }, {
    fileName: "threaddump_20240402_102234.txt_19",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  }, {
    fileName: "threaddump_20240402_102234.txt_20",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  }, {
    fileName: "threaddump_20240402_102234.txt_21",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  }, {
    fileName: "threaddump_20240402_102234.txt_22",
    timeStamp: "2024/04/02 10:22:34",
    alive: "1/22",
    gcCount: 0,
    monitorCount: 0
  },

]
const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
  },
  {
    title: '文件名',
    key: 'fileName'
  },
  {
    title: '时间',
    key: 'timeStamp'
  },
  {
    title: '运行中',
    key: 'alive',
    width: 100
  },
  {
    title: '阻塞',
    key: 'monitorCount',
    width: 60
  }
]

function rowProps(row: RowData) {
  return {
    style: 'cursor: pointer;',
    onDblclick: () => {
      selectedFile(row.fileName)
    },
    onContextmenu: (e: MouseEvent) => {
      e.preventDefault()
      showDropdownRef.value = false
      nextTick().then(() => {
        showDropdownRef.value = true
        xRef.value = e.clientX
        yRef.value = e.clientY
      })
    }
  }
}
const rowKey = (row: RowData) => row.fileName

const currentFile = ref<String | undefined>()

function selectedFile(fileName: String) {
  currentFile.value = fileName
}

function handleCheck(rowKeys: DataTableRowKey[]) {
  console.log(rowKeys)
}
const checkedRowKeys = ref(['threaddump_20240402_102234.txt_8'])

watch(() => checkedRowKeys.value,
  (value) => {
    console.log(checkedRowKeys.value)
  })


const showDropdownRef = ref(false)

const options: DropdownOption[] = [
  {
    label: '编辑',
    key: 'edit'
  },
  {
    label: () => h('span', { style: { color: 'red' } }, '删除'),
    key: 'delete'
  }
]
const xRef = ref(0)
const yRef = ref(0)

function onClickoutside() {
  showDropdownRef.value = false
 
}
function handleSelect(item: DropdownOption){
  showDropdownRef.value = false
  console.log(item)
}
</script>

<template>
  <div class="dump-file-container">
    <n-split direction="horizontal" :max="splitMax" :min="splitMin">
      <template #1>
        <div class="dump-list">
          <n-data-table virtual-scroll v-model:checked-row-keys="checkedRowKeys" size="small" max-height="800px"
            :row-props="rowProps" :columns="columns" :data="data" :row-key="rowKey"
            @update:checked-row-keys="handleCheck" />
          <n-dropdown placement="bottom-start" trigger="manual" :x="xRef" :y="yRef" :options="options" :show="showDropdownRef"
            :on-clickoutside="onClickoutside" @select="handleSelect" />
        </div>
      </template>
      <template #2>
        <!-- <ThreadInfo :fileName="currentFile"/> -->
        <DumpCount />
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
}
</style>
