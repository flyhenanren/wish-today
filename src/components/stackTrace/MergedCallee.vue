<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

interface RowData {
    callTree: string
    time: number
    index: string
    children?: RowData[]
}

const data: RowData[] = [
    {
        callTree: 'com.jiuqi.nr.entity.engine',
        time: 10,
        index: '07',
        children: [
            {
                callTree: 'com.jiuqi.nr.entity.engine.intenal',
                time: 10,
                index: '08',
                children: [
                    {
                        callTree: 'com.jiuqi.nr.entity.engine.intenal.query',
                        time: 2,
                        index: '09',
                        children:[
                                {
                                callTree: 'com.jiuqi.nr.entity.engine.intenal.query',
                                time: 2,
                                index: '091',
                                children:[
                                    {
                                        callTree: 'com.jiuqi.nr.entity.engine.intenal.query',
                                        time: 2,
                                        index: '0911',
                                        children:[
                                            {
                                                callTree: 'com.jiuqi.nr.entity.engine.intenal.query',
                                                time: 2,
                                                index: '09111',
                                                children:[
                                                    {
                                                        callTree: 'com.jiuqi.nr.entity.engine.intenal.query',
                                                        time: 2,
                                                        index: '091111',
                                                    },
                                                    {
                                                        callTree: 'com.jiuqi.nr.entity.engine.intenal.update',
                                                        time: 8,
                                                        index: '092111'
                                                    }
                                                ]
                                            },
                                            {
                                                callTree: 'com.jiuqi.nr.entity.engine.intenal.update',
                                                time: 8,
                                                index: '09211'
                                            }
                                        ]
                                    },
                                    {
                                        callTree: 'com.jiuqi.nr.entity.engine.intenal.update',
                                        time: 8,
                                        index: '0921'
                                    }
                                ]
                            },
                            {
                                callTree: 'com.jiuqi.nr.entity.engine.intenal.update',
                                time: 8,
                                index: '092'
                            }
                        ]
                    },
                    {
                        callTree: 'com.jiuqi.nr.entity.engine.intenal.update',
                        time: 8,
                        index: '10'
                    }
                ]
            },
            {
                callTree: 'com.jiuqi.nr.entity.engine.intf',
                time: 10,
                index: '11',
                children: [
                    {
                        callTree: 'com.jiuqi.nr.entity.engine.intf.table',
                        time: 2,
                        index: '12'
                    },
                    {
                        callTree: 'com.jiuqi.nr.entity.engine.intf.row',
                        time: 8,
                        index: '13'
                    }
                ]
            }
        ]
    },
    {
        callTree: 'com.jiuqi.nr.entity.metaservice',
        time: 20,
        index: '11'
    }
]
const columns: DataTableColumns<RowData> = [
    {
        title: 'callTree',
        key: 'callTree'
    },
    {
        title: 'time(s)',
        key: 'time',
        width:100,
        fixed: 'right'
    },
    {
        title: 'samples',
        key: 'samples',
        width:100,
        fixed: 'right'
    }
]

const rowKey = (row: RowData) => row.index

</script>

<template>
    <div>
        <n-data-table 
        virtual-scroll
        size="small"
        :max-height="400"
        :scroll-x="5000"
        :columns="columns" :data="data" :row-key="rowKey" />
    </div>
</template>

<style scoped></style>
