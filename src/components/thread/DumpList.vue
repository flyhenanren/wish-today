<script setup lang="ts">
import { h, nextTick, onMounted, ref, watch } from 'vue'
import type { DataTableColumns, DataTableRowKey, DropdownOption } from 'naive-ui'
import { DumpInfo, useDump } from '../../api/api';
import DumpCount from './DumpCount.vue';
const splitMin = ref(0.3)
const splitMax = ref(0.6)

const useFileApi = useDump()


const selectedRows = ref<DumpInfo[]>([])

onMounted(() => {
  useFileApi.list().then((resp: DumpInfo[]) => {
    buildRows(resp)
  })
})

function buildRows(resp: DumpInfo[]) {
  const tempRows = ref<DumpInfo[]>([])
  resp.forEach(e =>{
    data.value.push({
      file_name: e.file_name,
      time: e.time,
      alive: `${e.run_threads}/${e.threads}`,
      block_threads: e.block_threads
    })
    checkedRowKeys.value.push(e.file_name)
    tempRows.value.push(e)
  })
  selectedRows.value = tempRows.value
}
interface RowData {
  file_name: string
  time: string
  alive: string
  block_threads: number
}

const data = ref<RowData[]>([])

const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
  },
  {
    title: '文件名',
    key: 'file_name'
  },
  {
    title: '时间',
    key: 'time',
    width: 200
  },
  {
    title: '运行中',
    key: 'alive',
    width: 100
  },
  {
    title: '阻塞',
    key: 'block_threads',
    width: 60
  }
]

function rowProps(row: RowData) {
  return {
    style: 'cursor: pointer;',
    onDblclick: () => {
      selectedFile(row.file_name)
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
const rowKey = (row: RowData) => row.file_name

const currentFile = ref<String | undefined>()

function selectedFile(fileName: String) {
  currentFile.value = fileName
}

function handleCheck(rowKeys: DataTableRowKey[]) {
  console.log(rowKeys)
}
const checkedRowKeys = ref<String[]>([])

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
function handleSelect(item: DropdownOption) {
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
          <n-dropdown placement="bottom-start" trigger="manual" :x="xRef" :y="yRef" :options="options"
            :show="showDropdownRef" :on-clickoutside="onClickoutside" @select="handleSelect" />
        </div>
      </template>
      <template #2>
        <DumpCount :selected="selectedRows"/>
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
