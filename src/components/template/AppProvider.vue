<template>
  <NConfigProvider :theme-overrides="useTheme.naiveThemeOverrides">
    <NLoadingBarProvider>
      <LoadingBar/>
      <NDialogProvider>
        <DialogContent/>
        <NMessageProvider>
          <MessageContent/>
          <NNotificationProvider>
            <NotificationContent/>
            <slot></slot>
          </NNotificationProvider>
        </NMessageProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import {NConfigProvider, NDialogProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider} from "naive-ui";
import MessageContent from '../organisms/MessageContent.vue'
import DialogContent from '../organisms/DialogContent.vue'
import LoadingBar from '../organisms/LoadingBar.vue'
import NotificationContent from '../organisms/NotificationContent.vue'
import {useThemeStore} from "@/store/theme/themeStore";

const useTheme = useThemeStore()
</script>
