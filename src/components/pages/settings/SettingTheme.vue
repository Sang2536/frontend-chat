<template>
  <div class="max-w-2xl mx-auto p-6 space-y-8">
    <h3 class="text-2xl font-bold text-gray-900">Cài đặt giao diện</h3>

    <div class="space-y-6">
      <!-- Chế độ hiển thị -->
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Chế độ hiển thị</h4>
        <select
          v-model="theme"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option value="light">Sáng</option>
          <option value="dark">Tối</option>
          <option value="system_theme">Tự động (theo hệ thống)</option>
        </select>
      </div>

      <!-- Điều hướng -->
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Chỉ mục</h4>

        <div
          v-for="(item, index) in displayThemes"
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
        @click="saveTheme"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        <Save class="w-5 h-5" /> Lưu giao diện
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import BaseToggleSwitch from '@/components/base/BaseToggleSwitch.vue'
import { LucideLayoutDashboard, Save } from 'lucide-vue-next'

const theme = ref('light')

const displayThemes = reactive([
  { name: 'enableHome', value: true, title: 'Trang chủ', disabled: false },
  { name: 'dashboard', value: false, title: 'Bảng điều khiển', disabled: false },
  { name: 'enableAboutUs', value: false, title: 'Về chúng tôi', disabled: false },
  { name: 'enableActivityLog', value: false, title: 'Lịch sử hoạt động', disabled: false },
  { name: 'enableBookmark', value: false, title: 'Bookmark', disabled: false },
  { name: 'enableContact', value: false, title: 'Kết nối', disabled: false },
  { name: 'enableForYou', value: false, title: 'Dành cho bạn', disabled: false },
  { name: 'enableMedia', value: false, title: 'Media', disabled: false },
  { name: 'enableNotification', value: true, title: 'Thông báo', disabled: false },
  { name: 'enableChat', value: true, title: 'Tin nhắn', disabled: true },
  { name: 'enableProfile', value: true, title: 'Hồ sơ', disabled: true },
  { name: 'enableSetting', value: true, title: 'Cài đặt', disabled: true },
])

const STORAGE_KEY = 'ui-settings'

const toast = useToast()

function saveTheme() {
  const data = {
    theme: theme.value,
    settings: displayThemes.map(item => ({
      name: item.name,
      value: item.value,
    })),
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  if (localStorage) {
    toast.success('Đã ghi nhớ cấu hình giao diện!')
  } else {
    toast.error('Đã có lỗi xảy ra.')
  }
}

// Khởi động: Load dữ liệu từ localStorage nếu có
onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (parsed.theme) theme.value = parsed.theme
      if (parsed.settings && Array.isArray(parsed.settings)) {
        parsed.settings.forEach(savedItem => {
          const match = displayThemes.find(item => item.name === savedItem.name)
          if (match) match.value = savedItem.value
        })
      }
    } catch (e) {
      toast.error('Không thể tải cấu hình giao diện. Lỗi: ' + e)
    }
  }
})
</script>
