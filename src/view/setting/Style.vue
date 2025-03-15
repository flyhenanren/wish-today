<script setup lang="ts">
import { reactive, ref } from 'vue'

const threadColor = reactive({
  runnable: '#E5F5F5',
  watting: '#F6E9DE',
  timedWating: '#c4daec',
  block: '#F9DFDE',
})

function resetColorInfo() {

}
</script>

<template>
  <div class="setting-style">
    <n-card title="颜色">
      <n-form ref="countRef" :label-width="80" :model="threadColor">
        <n-form-item label="线程状态颜色">
          <div class="thread-color">
            <span class="color-item">
              <span>runnable：</span>
              <n-color-picker v-model:value="threadColor.runnable" :show-alpha="false" style="width: 80px;" />
            </span>
            <span class="color-item">
              <span>watting：</span>
              <n-color-picker v-model:value="threadColor.watting" :show-alpha="false" style="width: 80px;" />
            </span>
            <span class="color-item">
              <span>timedWating：</span>
              <n-color-picker v-model:value="threadColor.timedWating" :show-alpha="false" style="width: 80px;" />
            </span>
            <span class="color-item">
              <span>block：</span>
              <n-color-picker v-model:value="threadColor.block" :show-alpha="false" style="width: 80px;" />
            </span>
          </div>
        </n-form-item>
      </n-form>
      <n-button @click="resetColorInfo">重置</n-button>
    </n-card>
  </div>

</template>

<style scoped>
.setting-style {
  width: 100%;
  height: 100%;
}
.thread-color{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.color-item{
  display: flex;
  align-items: center;
}
</style>
