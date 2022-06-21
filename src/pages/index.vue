<template>
  <n-card title="Card">
    Card Content
  </n-card>
</template>

<script lang="ts" setup>
import {NCard} from 'naive-ui'
import { useUserStore } from '@/store/user/userStore'

const userStore = useUserStore()
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .n-card {
    width: 300px;
    flex-shrink: 0;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
    }
  }
  .blank {
    width: 300px;
    height: 0;
  }
}
</style>
