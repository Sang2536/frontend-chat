<template>
  <div
    class="flex items-start gap-4 p-4 rounded-lg border dark:border-gray-700"
    :class="notification.unread ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-gray-50 dark:bg-gray-800'"
  >
    <component
      :is="lucideIcons[notification.icon] || lucideIcons['Bell']"
      class="w-6 h-6 mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0"
    />

    <div class="flex-1">
      <h3 class="font-semibold text-gray-800 dark:text-white">{{ notification.title }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300">{{ notification.message }}</p>
      <span class="text-xs text-gray-400 dark:text-gray-500">{{ notification.time }}</span>
    </div>

    <div v-if="notification.unread" class="mt-1">
      <span class="block w-2 h-2 bg-blue-500 rounded-full"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as lucideIcons from 'lucide-vue-next'

defineProps({
  notification: {
    type: Object,
    required: true
  }
})
</script>
