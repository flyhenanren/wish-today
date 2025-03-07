<template>
  <div class="progress-bar">
    <div
      v-for="status in statuses"
      :key="status"
      :style="[segmentStyles(status), isHovered === status ? hoverStyle : {}]"
      class="progress-segment"
      @mouseenter="isHovered = status"
      @mouseleave="isHovered = null"
      @click="() => openWindow(status)"
    >
      <span class="percentage-text"  v-show="getPercentage(status) > 0">{{ getPercentage(status) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,ref } from 'vue'
import { ThreadStatus } from '../../../types'
import useColor from '../hooks/useColor'
interface IProps {
  runnable: number
  timeWaitting: number
  waitting: number
  blocked: number
}

const props = defineProps<IProps>()

const emit = defineEmits(["open"])
const statuses = [
  ThreadStatus.RUNNABLE,
  ThreadStatus.WAITING,
  ThreadStatus.TIMED_WAITING,
  ThreadStatus.BLOCKED,
];
const isHovered = ref<ThreadStatus | null>(null);
const hoverStyle = {
  transform: "translateY(-2px)", // 浮动幅度降低，使动画更自然
  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
};

const total = computed(() => { return props.runnable + props.timeWaitting + props.waitting + props.blocked })

const { getBackground } = useColor()

function getPercentage(type: ThreadStatus) {
  const percentages = {
    [ThreadStatus.RUNNABLE]: props.runnable,
    [ThreadStatus.WAITING]: props.waitting,
    [ThreadStatus.TIMED_WAITING]: props.timeWaitting,
    [ThreadStatus.BLOCKED]: props.blocked,
    [ThreadStatus.NEW]: 0,
    [ThreadStatus.UNKNOWN]: 0,
    [ThreadStatus.TERMINATED]: 0
  }
  return (percentages[type] / total.value) * 100
}
function segmentStyles(type: ThreadStatus) {
  const percentages = {
    [ThreadStatus.RUNNABLE]: props.runnable,
    [ThreadStatus.WAITING]: props.waitting,
    [ThreadStatus.TIMED_WAITING]: props.timeWaitting,
    [ThreadStatus.BLOCKED]: props.blocked,
    [ThreadStatus.NEW]: 0,
    [ThreadStatus.UNKNOWN]: 0,
    [ThreadStatus.TERMINATED]: 0
  }
  return {
    width: `${(percentages[type] / total.value) * 100}%`,
    backgroundColor: getBackground(type),
    cursor: "pointer"
  };
}

function openWindow(status: ThreadStatus) {
  emit("open", status)
}
</script>

<style scoped>
.progress-bar {
  display: flex;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.progress-segment {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
