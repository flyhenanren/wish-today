<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { CalleeList } from '../stackTrace'

const split = ref(0.4)
const splitMin = ref('100px')
const splitMax = ref('300px')

interface RowData {
    method: string
    time: number
    children?: RowData[]
}

const data: RowData[] = [
    {
        method: '07akioni',
        time:1
    },
    {
        method: '11akioni',
        time:2
    },
    {
        method: '12akioni',
        time:2
    }
]
const columns: DataTableColumns<RowData> = [
    {
        title: 'method',
        key: 'method'
    },
    {
        title: 'time(s)',
        key: 'time',
        width:100,
        fixed: 'right'
    }
]

const rowKey = (row: RowData) => row.method

</script>

<template>
  <div :class="$style.container">
    <Split v-model="split" mode="vertical" :min="splitMin" :max="splitMax">
      <template #top>
        <CalleeList/>
      </template>
      <template #bottom>
        <div>
          <Tabs size="small">
            <TabPane label="标签一">标签一的内容</TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
          </Tabs>
        </div>
      </template>
    </Split>
  </div>
</template>

<style scoped module>
.container {
  height: 100%;
}
</style>
