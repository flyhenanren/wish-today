<script setup lang="ts">
import { reactive, ref } from 'vue'

interface IProps {
  config: {
    fullPath: boolean,
    showParentPath: boolean
  }
}
const props = defineProps<IProps>()

interface IEmit {
  (event: 'update:modelValue', value: any): void
}

const emit = defineEmits<IEmit>()

const fileConfig = reactive({
  fullPath: true,
  showParentPath: true
})

function changeFullPath(value) {
  if (value) {
    fileConfig.showParentPath = true
  }
}

</script>

<template>
  <div class="setting-file">
    <n-card title="路径显示">
      <n-form ref="pathFormRef" label-placement="left" :label-width="80" :model="fileConfig">
        <n-form-item label="完整路径">
          <n-switch v-model:value="fileConfig.fullPath" @update:value="changeFullPath" />
        </n-form-item>
        <n-form-item label="上级路径">
          <n-switch v-model:value="fileConfig.showParentPath" :disabled="fileConfig.fullPath" />
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped>
.setting-file {
  width: 100%;
  height: 100%;
}
</style>
