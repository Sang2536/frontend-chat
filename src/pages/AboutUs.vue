<template>
  <div class="px-4 py-12 max-w-5xl mx-auto space-y-16 text-gray-800 dark:text-gray-100">
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold">Về Chúng Tôi</h1>
      <p class="text-lg max-w-2xl mx-auto">
        Chúng tôi là một nhóm những người yêu viết lách, chia sẻ suy nghĩ, cảm xúc và góc nhìn về nhiều chủ đề qua từng bài viết.
      </p>
    </div>

    <!-- Vision & Mission -->
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Tầm nhìn</h2>
        <p class="text-base">
          Trở thành nơi kết nối cảm xúc và tri thức, nơi mỗi bài viết là một nhịp cầu đưa con người đến gần nhau hơn.
        </p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Sứ mệnh</h2>
        <p class="text-base">
          Chia sẻ những câu chuyện thật, cảm xúc thật để ai đó đọc được có thể cảm thấy được đồng cảm, được chữa lành, và được truyền cảm hứng.
        </p>
      </div>
    </div>

    <!-- Team -->
    <div class="space-y-6">
      <h2 class="text-2xl font-semibold text-center">Đội ngũ của chúng tôi</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="member in team" :key="member.name" class="flex flex-col items-center text-center space-y-2">
          <img :src="member.avatar" alt="avatar" class="w-24 h-24 rounded-full object-cover shadow" />
          <h3 class="font-semibold text-lg">{{ member.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ member.role }}</p>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="text-center space-y-4">
      <h2 class="text-2xl font-semibold">Liên hệ với chúng tôi</h2>
      <p>
        Email: <a href="mailto:hello@yourblog.com" class="text-blue-600 dark:text-blue-400 hover:underline">hello@yourblog.com</a>
      </p>
      <p>
        Facebook: <a href="https://facebook.com/yourblog" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">facebook.com/yourblog</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const team = [
  {
    name: 'Admin',
    role: 'Người sáng lập & Biên tập viên',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Furina',
    role: 'Thiết kế & Hỗ trợ kỹ thuật',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Nahida',
    role: 'Biên tập viên xuất bản & Đánh giá bản thảo',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Alhaitham',
    role: 'Dịch giả & Đánh giá bản thảo',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    name: 'Stelle',
    role: 'Marketing nội dung & SEO',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Charlotte',
    role: 'Phóng viên & Biên tập viên nội dung',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    name: 'Mualani',
    role: 'Tổ chức sự kiện & Chạy quảng cáo',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
]
</script>

<style scoped>
</style>
