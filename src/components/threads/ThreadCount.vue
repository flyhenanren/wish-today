
<script setup lang="ts">
import { ref } from "vue"


let threadCount = ref(0)
let theadNumber = ref(222)
let theadStatus = ref("runnable")
</script>

<template>
  <div >
    <div :class="$style.threadCountContainer">
      <span>Total Threads count: {{ threadCount }}  </span>
    </div>
    <div class="thread-view">
      <div class="thread-list">
        <div>
          <div :class="[$style.threadRunnable, $style.textCenter]">
            <Icon type="ios-cog" :class="$style.threadIcon" style="background: #E5F5F5;color: #00A99D;"/>
          </div>
          <div :class="[$style.threadNum, $style.textCenter]">{{ theadNumber }}</div>
          <div :class="[$style.threadStatus, $style.textCenter]">{{ theadStatus }}</div>
          <div :class="[$style.theadDetail, $style.textCenter]">
            <span>viewDetail</span>
          </div>
        </div>
      </div>
      <div class="thread-count"></div>
    </div>
  </div>
</template>

<style scoped module>
.threadCountContainer{
    color: #1A1A1A;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 37px;
}

.threadRunnable{
}
.threadIcon{
  padding: 20px;
  border-radius: 50%;
  text-align:center;
  font-size: 20px;
}
.threadNum{
  font-size: 70px;
  font-weight: bold;
  color: #292929;
  line-height: normal;
}
.threadStatus{
  color: #4F4F4F;
    font-size: 15px;
}
.theadDetail{
    padding: 5.5px 16px;
    border-radius: 5px;
    margin-top: 35px;
}

.textCenter{
  text-align: center;
}

</style>
