<template>
  <div class="flex min-h-screen bg-gray-100 text-gray-800">
    <!-- Left Sidebar -->
    <aside class="w-1/4 p-4 hidden lg:block">
      <div class="bg-white rounded-xl shadow p-4">
        <ContactCardList :contact="user" />

        <div class="mt-4 space-y-2">
          <p class="text-sm text-gray-500">{{ user.job }}</p>
          <p class="text-sm text-gray-600">📍 {{ user.location }}</p>
          <p class="text-sm text-gray-600">👥 {{ user.friends }} friends</p>
        </div>
      </div>
    </aside>

    <!-- Main Feed -->
    <main class="flex-1 max-w-2xl mx-auto p-4">
      <!-- Post box -->
      <div class="bg-white p-4 rounded-xl shadow mb-4">
        <div class="flex space-x-3 items-center">
          <img
            src="https://i.pravatar.cc/50"
            class="w-10 h-10 rounded-full"
            alt="Avatar"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            class="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none"
          />
        </div>
      </div>

      <!-- Feed list -->
      <div class="space-y-4">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white p-4 rounded-xl shadow"
        >
          <div class="flex space-x-3 items-start">
            <img
              :src="post.avatar"
              class="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div>
              <div class="flex justify-between items-center">
                <h3 class="font-semibold">{{ post.author }}</h3>
                <p class="text-sm text-gray-400">{{ post.time }}</p>
              </div>
              <p class="text-sm text-gray-600">{{ post.content }}</p>
              <div class="mt-2 flex space-x-4 text-gray-500 text-sm">
                <button class="flex items-center space-x-1 hover:text-blue-500">
                  <ThumbsUp class="w-4 h-4" />
                  <span>Like</span>
                </button>
                <button class="flex items-center space-x-1 hover:text-blue-500">
                  <MessageCircle class="w-4 h-4" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Right Sidebar -->
    <aside class="w-1/4 p-4 hidden xl:block">
      <div class="bg-white rounded-xl shadow p-4">
        <h4 class="font-semibold mb-2">People you may know</h4>
        <div
          v-for="suggest in suggestions"
          :key="suggest.id"
          class="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
        >
          <ContactCardList :contact="suggest">
            <button class="text-sm text-blue-500 hover:underline">Add</button>
          </ContactCardList>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ThumbsUp, MessageCircle } from 'lucide-vue-next'
import ContactCardList from '@/components/pages/contact/ContactCardList.vue'

const user = {
  name: 'Admin',
  username: 'admin123456789',
  email: 'admin@example.com',
  avatar: 'https://i.pravatar.cc/150?img=28',
  job: 'Frontend Developer',
  location: 'Hà Nội, Việt Nam',
  friends: 256,
}

const posts = [
  {
    id: 1,
    author: 'Trần Thị B',
    avatar: 'https://i.pravatar.cc/150?img=32',
    content: 'Chào buổi sáng cả nhà!',
    time: '1h ago',
  },
  {
    id: 2,
    author: 'Lê Văn C',
    avatar: 'https://i.pravatar.cc/150?img=45',
    content: 'Vừa hoàn thành xong dự án 🎉',
    time: '3h ago',
  },
]

const suggestions = [
  { id: 1, name: 'Phạm Hùng', username: 'phamhung134', avatar: 'https://i.pravatar.cc/150?img=21' },
  { id: 2, name: 'Hoàng Lan', username: 'hoanglan2k', avatar: 'https://i.pravatar.cc/150?img=41' },
  { id: 3, name: 'Trịnh Tuấn', username: 'tuantrinh1999', avatar: 'https://i.pravatar.cc/150?img=50' },
]
</script>

<style scoped>
/* Custom styles (nếu cần) */
</style>
