<template>
  <div class="max-w-2xl mx-auto p-6 space-y-10">
    <!-- Avatar + Tên -->
    <div class="flex items-center gap-5">
      <div class="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm group">
        <img :src="avatarUrl" alt="Avatar" class="w-full h-full object-cover" />
        <button
          @click="changeAvatar"
          class="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition"
        >
          <Camera class="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-gray-900">{{ displayName }}</h2>
        <p class="text-sm text-gray-500">{{ email }}</p>
      </div>
    </div>

    <!-- Form -->
    <div class="space-y-6">
      <!-- Display Name -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tên hiển thị</label>
        <input
          v-model="displayName"
          type="text"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="Nhập tên hiển thị..."
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          v-model="email"
          disabled
          class="w-full rounded-lg bg-gray-100 border border-gray-200 px-4 py-2 cursor-not-allowed text-gray-500"
        />
      </div>

      <!-- Bio -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Giới thiệu</label>
        <div
          contenteditable
          class="min-h-[100px] w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition prose"
          @input="bio = $event.target.innerText"
        >
          {{ bio }}
        </div>
      </div>

      <!-- Nút lưu -->
      <button
        @click="saveChanges"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        <Save class="w-5 h-5" /> Lưu thay đổi
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Camera, Save } from 'lucide-vue-next'

const avatarUrl = ref('https://i.pravatar.cc/100?img=8')
const displayName = ref('Nguyễn Văn A')
const email = ref('nguyenvana@email.com')
const bio = ref('Mình thích lập trình và đọc sách.')

function changeAvatar() {
  alert('Tính năng thay đổi ảnh đại diện sẽ cập nhật sau!')
}

function saveChanges() {
  console.log({
    displayName: displayName.value,
    email: email.value,
    bio: bio.value,
  })
  alert('Đã lưu thông tin thành công!')
}
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition;
}
</style>
