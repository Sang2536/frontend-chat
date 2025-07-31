<template>
  <div class="p-6 space-y-6">
    <!-- Tiêu đề -->
    <h1 class="text-2xl font-semibold">Bảng điều khiển</h1>

    <!-- Thống kê tổng quan -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <DashboardStat title="Bạn bè" :value="stats.users" icon="👤" />
      <DashboardStat title="Tin nhắn" :value="stats.messages" icon="💬" />
      <DashboardStat title="Phòng chat" :value="stats.rooms" icon="🏠" />
    </div>

    <!-- Biểu đồ -->
    <div class="bg-white p-4 rounded-xl shadow-md">
      <h2 class="text-lg font-medium mb-4">Hoạt động tin nhắn theo ngày</h2>
      <canvas ref="chartRef" class="w-full" height="100"></canvas>
    </div>

    <!-- Top người dùng -->
    <div class="bg-white p-4 rounded-xl shadow-md">
      <h2 class="text-lg font-medium mb-4">Top tương tác</h2>
      <table class="w-full text-left border-t">
        <thead>
        <tr class="text-sm font-medium text-gray-600 border-b">
          <th class="py-2">#</th>
          <th>Tên</th>
          <th>Số tin nhắn</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in topUsers" :key="user.id" class="border-b text-sm">
          <td class="py-2">{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.messages }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import DashboardStat from '@/components/pages/dashboard/DashboardStat.vue'

// Đăng ký Chart.js
Chart.register(...registerables)

// Mock dữ liệu
const stats = ref({
  users: 120,
  messages: 4230,
  rooms: 34,
})

const topUsers = ref([
  { id: 1, name: 'Minh', messages: 320 },
  { id: 2, name: 'Trang', messages: 295 },
  { id: 3, name: 'Nam', messages: 270 },
])

const chartRef = ref(null)

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
      datasets: [{
        label: 'Tin nhắn',
        data: [500, 600, 800, 750, 900, 1100, 1050],
        fill: true,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.1)',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  })
})
</script>

<style scoped>
</style>
