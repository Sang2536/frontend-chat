<template>
  <div class="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 min-h-screen">
    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Thông báo</h1>

    <div class="space-y-4">
      <NotificationItem
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NotificationItem from '@/components/pages/notification/NotificationItem.vue'

const notifications = ref([
  {
    title: 'Tin nhắn mới từ An',
    message: 'Bạn có một tin nhắn mới.',
    icon: 'MessageCircle',
    time: '2 phút trước',
    unread: true
  },
  {
    title: 'Cập nhật hệ thống',
    message: 'Ứng dụng đã được cập nhật phiên bản mới.',
    icon: 'Download',
    time: '1 giờ trước',
    unread: false
  },
  {
    title: 'Lời mời kết bạn',
    message: 'Bình Minh đã gửi lời mời kết bạn.',
    icon: 'UserPlus',
    time: '3 giờ trước',
    unread: true
  }
])
</script>
