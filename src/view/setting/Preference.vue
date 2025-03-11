<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  modelValue: {
    storage: 'db' | 'file' | 'mem'
    exit: 'exit'
  }
}
const props = defineProps<IProps>()

interface IEmit {
  (event: 'update:modelValue', value: any): void
}

const emit = defineEmits<IEmit>()
const fileConfig = ref(props.modelValue)

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
  <div class="setting-preference">
    <n-form ref="formRef"   label-width="auto" label-placement="left" :model="fileConfig">
      <n-form-item label="存储模式">
        <n-select v-model:value="fileConfig.storage" disabled :options="storageOption" style="width: 150px;"/>
      </n-form-item>
      <n-form-item label="退出确认">
        <n-radio-group v-model:value="fileConfig.exit" name="radiogroup" disabled>
          <n-space>
            <n-radio label="直接退出" value="exit"></n-radio>
            <n-radio label="每次询问" value="ask"> </n-radio>
          </n-space>
      </n-radio-group>
      </n-form-item>
    </n-form>
  </div>

</template>

<style scoped>
.setting-preference {
  width: 100%;
  height: 100%;
}
</style>
