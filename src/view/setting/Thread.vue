<script setup lang="ts">
import { reactive } from 'vue'
const threadParser = reactive({
  expression: '^(?P<name>".+?")(?: #(?P<number>\d+))?(?P<daemon> daemon)?(?: prio=(?P<prio>\d+))?(?: os_prio=(?P<os_prio>\d+))? tid=(?P<tid>0x[0-9a-fA-F]+) nid=(?P<nid>0x[0-9a-fA-F]+) (?P<state>[a-zA-Z\s.()]+)(?:\[(?P<hex_address>0x[0-9a-fA-F]+)\])?$',
    state: 'State:\s(\w+)',
    stack:'at\s+([\w.$]+)\.(<init>|[\w$]+(?:\$\$Lambda\$\d+/\d+)?)(?:\.(\w+))?\(([^:]+|Unknown Source)(?::(\d+))?\)'
})

const threadCount = reactive({
  defaultNumber: 10
})

function resetParserInfo(){

}
</script>

<template>
  <div class="setting-thread">
    <n-card title="解析">
      <n-form ref="parserRef" 
      :label-width="80"
       label-placement="left"
       :model="threadParser">
        <n-form-item label="线程信息">
          <n-input v-model:value="threadParser.expression" />
        </n-form-item>
        <n-form-item label="线程状态">
          <n-input v-model:value="threadParser.state" /> 
        </n-form-item>
        <n-form-item label="堆栈">
          <n-input v-model:value="threadParser.stack" />
        </n-form-item>
      </n-form>
      <n-button @click="resetParserInfo">重置</n-button>
    </n-card>
    <n-card title="统计">
      <n-form ref="countRef" 
      :label-width="80"
       label-placement="left"
       :model="threadCount">
        <n-form-item label="展示数量">
          <n-input-number v-model:value="threadCount.defaultNumber" 
          :precision="0"
          :min="10"
          :max="50"></n-input-number>
        </n-form-item>
      </n-form>
      <n-button @click="resetParserInfo">重置</n-button>
    </n-card>
  </div>
</template>

<style scoped>
.setting-thread {
  width: 100%;
  height: 100%;
}
</style>
