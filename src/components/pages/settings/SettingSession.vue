<template>
  <div class="max-w-2xl mx-auto p-6 space-y-8">
    <h3 class="text-2xl font-bold text-gray-900">Phiên hoạt động</h3>

    <!-- Phiên đăng nhập -->
    <div class="space-y-6">
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Phiên đăng nhập</h4>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Token bảo mật <i>(Chú ý chia sẻ khi còn thời gian hiệu lực)</i></label>
          <input
            v-model="sessionToken"
            type="text"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Token phiên đăng nhập..."
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Thời gian hết hạn (ms)</label>
          <input
            v-model="sessionTime"
            type="number"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Thời gian hết hạn..."
          />
        </div>

        <div class="space-y-4">
          <h4 class="text-md font-semibold text-gray-800">Phiên hoạt động</h4>

          <div
            v-for="(item, index) in toggleSessions"
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
          @click="saveSession"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          <Save class="w-5 h-5" /> Lưu thay đổi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Save } from 'lucide-vue-next'
import { generateRandomString } from '@/helpers/StringHelper.ts'
import BaseToggleSwitch from '@/components/base/BaseToggleSwitch.vue'

const toast = useToast()

const sessionToken = ref('base:' + generateRandomString())
const sessionTime = ref(10000)

const toggleSessions = reactive([
  { name: 'enableAutoRefreshSession', value: true, title: 'Tự động làm mới', disabled: false },
  { name: 'enableProtectSession', value: true, title: 'Duy nhất 1 thiết bị được sử dụng Token tại 1 thời điểm', disabled: true },
])

function resetSession() {
  sessionToken.value = 'base:' + generateRandomString()
  sessionTime.value = 10000

  toast.success('Thiết lập lại thành công!')
}

function saveSession() {
  // handle

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
