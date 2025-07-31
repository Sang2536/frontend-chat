<template>
  <div class="max-w-2xl mx-auto p-6 space-y-8">
    <h3 class="text-2xl font-bold text-gray-900">Bảo mật</h3>

    <!-- Tài khoản -->
    <div class="space-y-6">
      <!-- Form nhập -->
      <div class="space-y-4">
        <h4 class="text-md font-semibold text-gray-800">Tài khoản</h4>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Mật khẩu hiện tại</label>
          <input
            v-model="currentPassword"
            type="password"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Mật khẩu hiện tại..."
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Mật khẩu mới</label>
          <input
            v-model="newPassword"
            type="password"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Mật khẩu mới..."
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu mới</label>
          <input
            v-model="confirmNewPassword"
            type="password"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Xác nhận mật khẩu mới..."
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email xác nhận</label>
          <div class="flex items-center gap-2">
            <input
              v-model="confirmEmail"
              type="email"
              class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Email..."
            />
            <button
              @click="sendCode"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Code
            </button>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Mã xác nhận</label>
          <input
            v-model="confirmCode"
            type="text"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Mã xác nhận..."
          />
        </div>
      </div>

      <!-- Nút lưu -->
      <button
        @click="changePassword"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        <Save class="w-5 h-5" /> Lưu thay đổi
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Save } from 'lucide-vue-next'

const currentPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')
const confirmEmail = ref('')
const confirmCode = ref('')

const toast = useToast()

function changePassword() {
  if (confirmEmail.value !== 'admin@example.com') {
    toast.error('Email không đúng!')
    return
  } else if (newPassword.value !== confirmNewPassword.value) {
    toast.error('Mật khẩu xác nhận không khớp!')
    return
  } else if (confirmCode.value !== '123456') {
    toast.error('Mã xác nhận không đúng!')
    return
  }

  toast.success('Đổi mật khẩu thành công!')
}

function sendCode() {
  // API gửi

  toast.success('Đã gửi mã xác nhận. Vui lòng kiểm tra email đăng ký!')
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
