<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  config: {
    storage: 'db' | 'file' | 'mem'
    exit: 'exit'
  }
}
const props = defineProps<IProps>()

interface IEmit {
  (event: 'update:modelValue', value: any): void
}

const emit = defineEmits<IEmit>()

const fileConfig = ref(props)
const storageOption = [
  {
    label: '数据库',
    value: 'db',
  },{
    label: '内存',
    value: 'mem',
  },{
    label: '文件',
    value: 'file',
  },
]
</script>

<template>
  <div class="setting-file">
    <n-form ref="formRef" inline :label-width="80" :model="fileConfig">
      <n-form-item label="存储模式">
        <n-select v-model:value="fileConfig.storage" disabled :options="storageOption" />
      </n-form-item>
      <n-form-item label="退出确认">
        <n-radio-group v-model:value="fileConfig.exit" name="radiogroup">
          <n-space>
            <n-radio label="exit" value="直接退出"></n-radio>
            <n-radio label="ask" value="每次询问"> </n-radio>
          </n-space>
      </n-radio-group>
      </n-form-item>
    </n-form>
  </div>
</template>

<style scoped>
.setting-file {
  width: 100%;
  height: 100%;
}
</style>
