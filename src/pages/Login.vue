<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500">
    <div class="flex w-11/12 max-w-5xl h-[620px] rounded-xl overflow-hidden shadow-2xl">
      <!-- Left - Login Form -->
      <div class="w-2/5 bg-white p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Đăng nhập</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Email -->
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

          <!-- Password -->
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

          <!-- Remember + Forgot -->
          <div class="flex justify-between items-center text-sm text-gray-600">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="remember" class="accent-blue-500" />
              <span>Nhớ mật khẩu</span>
            </label>
            <RouterLink to="/forgot-password" class="text-blue-500 hover:underline">
              Quên mật khẩu?
            </RouterLink>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="!email || !password"
            class="w-full py-2 rounded bg-blue-600 text-white font-semibold transition duration-300 disabled:bg-gray-400 hover:bg-blue-700"
          >
            Đăng nhập
          </button>
        </form>

        <!-- Divider -->
        <div class="my-4 flex items-center justify-between">
          <div class="h-px bg-gray-300 flex-grow"></div>
          <span class="px-2 text-sm text-gray-500">hoặc</span>
          <div class="h-px bg-gray-300 flex-grow"></div>
        </div>

        <!-- Social login -->
        <div class="space-y-2">
          <button
            class="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <Mail class="w-5 h-5 text-red-500" />
            <span>Đăng nhập bằng Gmail</span>
          </button>

          <button
            class="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <Facebook class="w-5 h-5 text-blue-600" />
            <span>Đăng nhập bằng Facebook</span>
          </button>

          <button
            class="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <Linkedin class="w-5 h-5 text-blue-700" />
            <span>Đăng nhập bằng LinkedIn</span>
          </button>
        </div>

        <!-- Register link -->
        <p class="text-center text-sm text-gray-600 mt-4">
          Chưa có tài khoản?
          <RouterLink to="/register" class="text-blue-500 hover:underline">Đăng ký</RouterLink>
        </p>
      </div>

      <!-- Right - Welcome Message -->
      <div class="w-3/5 bg-gray-900 text-white flex flex-col items-center justify-center px-10">
        <h1 class="text-4xl font-bold mb-4">Chào mừng bạn quay lại!</h1>
        <p class="text-lg text-gray-300 text-center">
          Hãy đăng nhập để tiếp tục trò chuyện cùng bạn bè. <br />
          Ứng dụng Web Chat realtime siêu mượt!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Mail, Lock, Facebook, Linkedin } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'

const email = ref('')
const password = ref('')
const remember = ref(false)

const toast = useToast()
const router = useRouter()

const handleLogin = () => {
  console.log('Login:', { email: email.value, password: password.value, remember: remember.value })
  // Gọi API hoặc chuyển trang...

  // Simulate login
  if (email.value === 'admin@example.com' && password.value === '123456') {
    toast.success('Chào mừng bạn quay trở lại!')
    router.push('/chat')
  } else {
    toast.error('Email hoặc mật khẩu không đúng.')
  }
}
</script>
