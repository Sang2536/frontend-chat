<template>
  <div class="border p-4 rounded shadow-sm">
    <div class="flex items-center gap-4">
      <img :src="user.avatar" class="w-20 h-20 rounded-full object-cover" />
      <div>
        <h3 class="text-xl font-semibold">{{ user.name }}</h3>
        <p class="text-gray-600">@{{ user.username }}</p>
        <p class="text-gray-500 text-sm">{{ user.bio }}</p>
      </div>
    </div>
    <button @click="$emit('edit')" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Chỉnh sửa hồ sơ
    </button>
  </div>
</template>

<script setup lang="ts">
const user = {
  name: 'Nguyễn Văn A',
  username: 'nguyenvana',
  avatar: 'https://i.pravatar.cc/100?img=3',
  bio: 'Yêu thích công nghệ và lập trình.'
}
</script>
