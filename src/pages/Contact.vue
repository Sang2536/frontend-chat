<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">Kết nối</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Cột bạn bè -->
      <div>
        <h2 class="text-xl font-semibold mb-3">Bạn bè</h2>
        <div class="space-y-2">
          <ContactCard
            v-for="friend in friends"
            :key="friend.id"
            :contact="friend"
          />
        </div>
      </div>

      <!-- Cột nhóm -->
      <div>
        <h2 class="text-xl font-semibold mb-3">Nhóm</h2>
        <div class="space-y-2">
          <ContactCard
            v-for="group in groups"
            :key="group.id"
            :contact="group"
          />
        </div>
      </div>

      <!-- Cột trang -->
      <div>
        <h2 class="text-xl font-semibold mb-3">Trang</h2>
        <div class="space-y-2">
          <ContactCard
            v-for="page in pages"
            :key="page.id"
            :contact="page"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactCard from '@/components/pages/contact/ContactCard.vue'

const friends = [
  { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/40?img=2' },
  { id: 3, name: 'Đinh Thị C', avatar: 'https://i.pravatar.cc/40?img=3' },
  { id: 4, name: 'Nguyễn Trung D', avatar: 'https://i.pravatar.cc/40?img=3' },
  { id: 5, name: 'Trần Thu E', avatar: 'https://i.pravatar.cc/40?img=5' },
  { id: 6, name: 'Hoàng Hoài F', avatar: 'https://i.pravatar.cc/40?img=6' },
]

const groups = [
  { id: 10, name: 'Nhóm lập trình VueJS', avatar: 'https://i.pravatar.cc/40?img=3' },
  { id: 11, name: 'Học tiếng Trung', avatar: 'https://i.pravatar.cc/40?img=4' }
]

const pages = [
  { id: 20, name: 'Trang học IELTS', avatar: 'https://i.pravatar.cc/40?img=5' },
  { id: 21, name: 'Tin công nghệ', avatar: 'https://i.pravatar.cc/40?img=6' },
  { id: 22, name: 'Tiếng Anh cơ bản', avatar: 'https://i.pravatar.cc/40?img=7' },

]
</script>
