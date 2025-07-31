<template>
  <div class="max-w-2xl mx-auto p-6 space-y-8">
    <h3 class="text-2xl font-bold text-gray-900">Khôi phục, bảo vệ và cảnh báo</h3>

    <!-- Phiên đăng nhập -->
    <div class="space-y-6">
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Khôi phục & Bảo vệ</h4>

        <div
          v-for="(item, index) in recoveries"
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

      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Cảnh báo</h4>

        <div
          v-for="(item, index) in warnings"
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

      <div class="space-y-4">
        <button
          @click="resetSession"
          class="mr-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-600 text-white font-medium hover:bg-gray-700 transition"
        >
          Làm mới
        </button>
        <!-- Nút lưu -->
        <button
          @click="saveRecover"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          <Save class="w-5 h-5" /> Lưu thay đổi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import { Save } from 'lucide-vue-next'
import BaseToggleSwitch from '@/components/base/BaseToggleSwitch.vue'

const toast = useToast()
toast.warning('Hãy cẩn thận khi thay đổi phần này.')

const recoveries = reactive([
  { name: 'enableRecoverAccountByEmail', value: true, title: 'Khôi phục tài khoản bằng Email gốc', disabled: false },
  { name: 'enableDataEncryption', value: true, title: 'Mã hóa tin nhắn gửi đi', disabled: false },
  { name: 'enableMultiDevice', value: false, title: 'Truy cập đa thiết bị', disabled: false },
  { name: 'enableLogoutAllDevices', value: false, title: 'Đăng xuất khỏi tất cả thiết bị', disabled: false },
  { name: 'enableManyStepVerification', value: true, title: 'Xác thực nhiều bước', disabled: false },
  { name: 'enableVerifyAccess', value: true, title: 'Xác minh quyền truy cập', disabled: true },
])

const warnings = reactive([
  { name: 'enableUnknowDeviceWarning', value: true, title: 'Đăng nhập từ thiết bị lạ', disabled: true },
  { name: 'enableMultiDeviceWarning', value: true, title: 'Truy cập đa thiết bị', disabled: true },
  { name: 'enableMultipleFailedLoginsWarning', value: true, title: 'Đăng nhập thất bại nhiều lần', disabled: true },
  { name: 'enableChangeEmailWarning', value: true, title: 'Thay đổi Email gốc', disabled: true },
  { name: 'enableChangePasswordWarning', value: true, title: 'Thay đổi mật khẩu', disabled: true },
])

function resetSession() {
  // hande

  toast.success('Thiết lập lại thành công!')
}

function saveRecover() {
  //  handle...

  toast.success('Đã lưu thành công!')
}
</script>

<style scoped>
.input {
  @apply w-full border px-3 py-2 rounded-md mt-1;
}
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4;
}
</style>
