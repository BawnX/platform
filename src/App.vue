<script setup lang="ts">
import AppProvider from '@/components/template/AppProvider.vue'
</script>

<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
}

#app .n-config-provider{
  height: inherit;
}
</style>
