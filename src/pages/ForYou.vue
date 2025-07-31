<template>
  <div class="w-full p-4 space-y-6">
    <!-- Hashtag thịnh hành -->
    <section class="pb-6">
      <h2 class="text-xl font-semibold mb-2">Hashtag thịnh hành</h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in trendingTags"
          :key="tag"
          class="px-3 py-1 bg-gray-200 text-sm rounded-full hover:bg-gray-300 cursor-pointer"
        >
          #{{ tag }}
        </span>
      </div>
    </section>

    <!-- Gợi ý kết bạn -->
    <section class="pb-6">
      <h2 class="text-xl font-semibold mb-2">Gợi ý kết bạn</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="user in suggestedFriends" :key="user.id" class="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img :src="user.avatar" class="w-16 h-16 rounded-full mb-2" />
          <p class="font-medium">{{ user.name }}</p>
          <div class="flex items-center gap-2 mt-2">
            <button class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">Kết bạn</button>
            <button class="mt-2 px-3 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm">Nhắn tin</button>
            <button class="mt-2 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm">Ẩn</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Nội dung sáng tạo -->
    <section class="pb-6">
      <h2 class="text-xl font-semibold mb-2">Nội dung sáng tạo</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="post in creativeContents"
          :key="post.id"
          class="bg-white rounded-xl shadow overflow-hidden"
        >
          <img :src="post.thumbnail" class="w-full h-48 object-cover" />
          <div class="p-4">
            <p class="font-semibold truncate">{{ post.title }}</p>
            <p class="text-sm text-gray-500 mt-1">#{{ post.tag }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Dữ liệu giả
const suggestedFriends = ref([
  { id: 1, name: 'Minh Anh', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Ngọc Lan', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Quang Huy', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Hải Đăng', avatar: 'https://i.pravatar.cc/150?img=4' },
])

const trendingTags = ref([
  'chatvui', 'goclamquen', 'amnhac', 'memes', 'thoitrang', 'truyenngan'
])

const creativeContents = ref([
  { id: 1, title: 'Top 5 bản nhạc chill cho tối muộn', tag: 'amnhac', thumbnail: 'https://source.unsplash.com/random/400x300?music' },
  { id: 2, title: 'Troll bạn thân với filter mới 😂', tag: 'memes', thumbnail: 'https://source.unsplash.com/random/400x300?funny' },
  { id: 3, title: 'OOTD đi cà phê cuối tuần ☕️', tag: 'thoitrang', thumbnail: 'https://source.unsplash.com/random/400x300?fashion' },
])
</script>

<style scoped>
/* Thêm hiệu ứng hoặc responsive nếu cần */
</style>
