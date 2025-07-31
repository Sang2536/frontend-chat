<template>
  <div class="max-w-2xl mx-auto p-6 space-y-8">
    <h3 class="text-xl font-semibold mb-4">Thông báo</h3>

    <div class="space-y-6">
      <!-- Chế độ hiển thị -->
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Chế độ hiển thị</h4>
        <select
          v-model="notificationMode"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option value="bar">Thanh thông báo</option>
          <option value="toast">Thông báo nổi</option>
          <option value="badge">Huy hiệu</option>
          <option value="system_notify_mode">Mặc định (theo hệ thống)</option>
        </select>
      </div>

      <!-- Hiệu ứng thông báo -->
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Hiệu ứng</h4>
        <select
          v-model="notificationEffect"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option value="no_effect">Không hiệu ứng</option>
          <option value="flicker">Nhấp nháy</option>
          <option value="starlight">Ánh sao</option>
          <option value="bright_screen">Màn hình sáng</option>
          <option value="system_notify_effect">Mặc định (theo hệ thống)</option>
        </select>
      </div>


      <!-- Thông báo -->
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Thông báo khác</h4>

        <div
          v-for="(item, index) in displayNotification"
          :key="item.name"
          class="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-300"
        >
          <span class="text-sm font-medium text-gray-700">{{ item.title }}</span>
          <BaseToggleSwitch
            v-model="item.value"
            :disabled="item.disabled"
          />
        </div>
      </div>

      <!-- Nút lưu -->
      <button
        @click="saveNotification"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        <Save class="w-5 h-5" /> Lưu thay đổi
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import BaseToggleSwitch from '@/components/base/BaseToggleSwitch.vue'
import { Save } from 'lucide-vue-next'

const notificationMode = ref('bar')
const notificationEffect = ref('bar')

const displayNotification = reactive([
  { name: 'enableNewNotification', value: true, title: 'Thông báo mới', disabled: false },
  { name: 'enableNotificationSound', value: false, title: 'Âm thanh thông báo', disabled: false },
  { name: 'enableNotificationIcon', value: false, title: 'Biểu tượng thông báo', disabled: false },
  { name: 'enablePopup', value: true, title: 'Hiển thị popup', disabled: true },
])


const STORAGE_KEY = 'notification-settings'

function saveNotification() {
  const data = {
    mode: notificationMode.value,
    effect: notificationEffect.value,
    settings: displayNotification.map(item => ({
      name: item.name,
      value: item.value,
    })),
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  alert('Đã lưu cài đặt thông báo!')
}

// Khởi động: Load dữ liệu từ localStorage nếu có
onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (parsed.mode) notificationMode.value = parsed.mode
      if (parsed.effect) notificationEffect.value = parsed.effect
      if (parsed.settings && Array.isArray(parsed.settings)) {
        parsed.settings.forEach(savedItem => {
          const match = displayNotification.find(item => item.name === savedItem.name)
          if (match) match.value = savedItem.value
        })
      }
    } catch (e) {
      console.warn('Không thể load cấu hình từ localStorage:', e)
    }
  }
})
</script>

<style scoped>
.toggle {
  @apply w-5 h-5;
}
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4;
}
</style>
