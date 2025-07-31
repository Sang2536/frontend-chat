<template>
  <div class="max-w-2xl mx-auto p-6 space-y-8">
    <h3 class="text-2xl font-bold text-gray-900">Nhật ký hoạt động</h3>

    <!-- Phiên đăng nhập -->
    <div class="space-y-6">
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Nhật kí</h4>

        <div>
          <div class="flex px-4 py-2 items-center justify-between bg-gray-50 border-gray-300 rounded-lg border">
            <span class="text-sm font-medium text-gray-700">Cho phép lưu trữ?</span>
            <BaseToggleSwitch
              v-model="logAllow"
              :disabled="false"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Thời gian lưu tối đa (ms)</label>
          <input
            v-model="logTime"
            type="number"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Thời gian lưu trữ..."
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Số lượng lưu tối đa</label>
          <input
            v-model="logQty"
            type="number"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Số lượng lưu trữ..."
          />
        </div>
      </div>

      <div class="space-y-4">
        <button
          @click="resetLog"
          class="mr-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-600 text-white font-medium hover:bg-gray-700 transition"
        >
          Làm mới
        </button>
        <!-- Nút lưu -->
        <button
          @click="saveLog"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          <Save class="w-5 h-5" /> Lưu thay đổi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Save } from 'lucide-vue-next'
import BaseToggleSwitch from '@/components/base/BaseToggleSwitch.vue'

const toast = useToast()

const logAllow = ref(false)
const logTime = ref(10000)
const logQty = ref(100)

function resetLog() {
  logAllow.value = false
  logTime.value = 10000
  logQty.value = 100

  toast.success('Thiết lập lại dữ liệu thành công!')
}

function saveLog() {
  // handle

  toast.success('Đã lưu dữ liệu thành công!')
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
