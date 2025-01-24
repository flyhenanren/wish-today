<script setup lang="ts">

</script>

<template>
  <n-message-provider>
    <div :class="$style.rootContainer">
    <RouterView/>
  </div>  
</n-message-provider>
</template>

<style scoped module>
.rootContainer{
  width: 100%;
  height: 100%;
}
</style>
