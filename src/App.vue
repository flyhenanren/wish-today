<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'


</script>

<template>
  <div :class="$style.rootContainer">
    <RouterView/>
  </div>
</template>

<style scoped module>
.rootContainer{
  width: 100%;
  height: 100%;
}
</style>
