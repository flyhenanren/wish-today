<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

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
    <div>
        <n-data-table 
        :columns="columns" 
        :data="data"
        :row-key="rowKey"
         />
    </div>
</template>

<style scoped></style>
