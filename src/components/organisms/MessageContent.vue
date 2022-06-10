<template></template>

<script setup>
import { useMessage } from 'naive-ui'

const NMessage = useMessage()

let loadingMessage = null

class Message {
  removeMessage(message, duration = 2000) {
    setTimeout(() => {
      if (message) {
        message.destroy()
        message = null
      }
    }, duration)
  }

  showMessage(type, content, option = {}) {
    if (loadingMessage && loadingMessage.type === 'loading') {
      loadingMessage.type = type
      loadingMessage.content = content

      if (type !== 'loading') {
        this.removeMessage(loadingMessage, option.duration)
      }
    } else {
      let message = NMessage[type](content, option)
      if (type === 'loading') {
        loadingMessage = message
      }
    }
  }

  loading(content) {
    this.showMessage('loading', content, { duration: 0 })
  }

  success(content, option = {}) {
    this.showMessage('success', content, option)
  }

  error(content, option = {}) {
    this.showMessage('error', content, option)
  }

  info(content, option = {}) {
    this.showMessage('info', content, option)
  }

  warning(content, option = {}) {
    this.showMessage('warning', content, option)
  }
}

window['$message'] = new Message()

Object.defineProperty(window, '$message', {
  configurable: false,
  writable: false,
})
</script>
