<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-sky-500 to-green-400">
    <div class="flex w-11/12 max-w-5xl h-[650px] rounded-xl overflow-hidden shadow-2xl">
      <!-- Left - Register Form -->
      <div class="w-2/5 bg-white p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Đăng ký</h2>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label class="block text-gray-600 mb-1" for="name">Họ tên</label>
            <div class="flex items-center border rounded px-3 py-2">
              <User class="w-5 h-5 text-gray-500 mr-2" />
              <input
                id="name"
                v-model="name"
                type="text"
                class="w-full focus:outline-none"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-600 mb-1" for="email">Email</label>
            <div class="flex items-center border rounded px-3 py-2">
              <Mail class="w-5 h-5 text-gray-500 mr-2" />
              <input
                id="email"
                v-model="email"
                type="email"
                class="w-full focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-600 mb-1" for="password">Mật khẩu</label>
            <div class="flex items-center border rounded px-3 py-2">
              <Lock class="w-5 h-5 text-gray-500 mr-2" />
              <input
                id="password"
                v-model="password"
                type="password"
                class="w-full focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-600 mb-1" for="confirmPassword">Xác nhận mật khẩu</label>
            <div class="flex items-center border rounded px-3 py-2">
              <Lock class="w-5 h-5 text-gray-500 mr-2" />
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                class="w-full focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            :disabled="!isFormValid"
            class="w-full py-2 rounded bg-emerald-600 text-white font-semibold transition duration-300 disabled:bg-gray-400 hover:bg-emerald-700"
          >
            Đăng ký
          </button>
        </form>

        <!-- Register link -->
        <p class="text-center text-sm text-gray-600 mt-4">
          Đã có tài khoản?
          <RouterLink to="/login" class="text-blue-500 hover:underline">Đăng nhập</RouterLink>
        </p>
      </div>

      <!-- Right - Welcome Message -->
      <div class="w-3/5 bg-gray-800 text-white flex flex-col items-center justify-center px-10">
        <h1 class="text-4xl font-bold mb-4">Tạo tài khoản mới</h1>
        <p class="text-lg text-gray-300 text-center">
          Tham gia cộng đồng và bắt đầu trò chuyện ngay hôm nay. <br />
          Ứng dụng Web Chat bảo mật & realtime!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Mail, Lock, User } from 'lucide-vue-next'
import { RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const toast = useToast()
const router = useRouter()

const isFormValid = computed(() =>
  name.value && email.value && password.value && confirmPassword.value && password.value === confirmPassword.value
)

const handleRegister = () => {
  console.log('Register with:', { name: name.value, email: email.value })
  // Gọi API đăng ký...

  // Simulate register
  if (email.value === 'admin@example.com' && password.value === '123456') {
    router.push('/chat')
    toast.success('Chào mừng bạn tham gia cộng đồng Web Chat!')
  } else if (email.value === 'admin.test@example.com') {
    toast.error('Email đã được sử dụng.')
  } else if (password.value !== confirmPassword.value) {
    toast.error('Mật khẩu không khớp nhau.')
  } else {
    toast.error('Email hoặc mật khẩu không đúng.')
  }
}
</script>
