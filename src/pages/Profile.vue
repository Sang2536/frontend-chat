<template>
  <div class="max-w-4xl mx-auto bg-white rounded-lg shadow mt-6 overflow-hidden">
    <!-- Cover -->
    <div class="relative h-48 bg-gray-200">
      <img
        :src="user.avatar_cover"
        class="w-full h-full object-cover"
        alt="Avatar Cover"
      />
      <div class="absolute -bottom-12 left-6">
        <img
          :src="user.avatar"
          class="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
      </div>
    </div>

    <!-- Info -->
    <div class="flex pt-16 px-6 justify-between items-start flex-wrap gap-y-4">
      <div>
        <h2 class="text-2xl font-bold">{{ user.name }}</h2>
        <p class="text-gray-500">@{{ user.username }}</p>
        <p class="mt-1 text-gray-600">{{ user.bio }}</p>
      </div>

      <button @click="isEditing = true" class="h-10 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
        Chỉnh sửa hồ sơ
      </button>
    </div>

    <!-- Tabs -->
    <div class="pt-16">
      <ProfileTabs :user="user" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProfileTabs from '@/components/pages/profile/ProfileTabs.vue'

const user = ref({
  id: 6,
  name: 'Nguyễn Văn A',
  username: 'nguyenvana',
  email: 'nguyenvana@gmail.com',
  avatar: 'https://i.pravatar.cc/150?img=7',
  avatar_cover: 'https://i.pravatar.cc/150?img=8',
  address: 'Hà Nội, Việt Nam',
  bio: 'Yêu thích lập trình và công nghệ.',
  friends: [
    { id: 1, name: 'Bạn 1', slug: 'ban-1', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Bạn 2', slug: 'ban-2', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Bạn 3', slug: 'ban-3', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Bạn 4', slug: 'ban-4', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Bạn 5', slug: 'ban-5', avatar: 'https://i.pravatar.cc/150?img=5' },
  ]
})

function isEditing() {}
</script>
