<template>
  <div class="max-h-screen w-full flex flex-col">
    <!-- Header -->
    <div class="text-lg border-b border-gray-200 p-4 font-semibold">
      Thông tin
    </div>

    <div class="text-md font-sans font-semibold p-4">
      <h2 class="text-lg font-semibold mb-4">Chung</h2>
      <div class="space-y-2">
        <p><strong>Tên:</strong> {{ room.name }}</p>
        <p><strong>Trạng thái:</strong> {{ room.status === 'online' ? 'Hoạt động' : 'Không hoạt động' }}</p>
        <p><strong>Email:</strong> {{ room.email ?? 'Không có' }}</p>
        <p><strong>Khẩu hiệu:</strong> {{ room.slogan ?? 'Không có' }}</p>
        <p><strong>Mô tả:</strong> {{ room.description ?? 'Không có' }}</p>
      </div>
    </div>
    <div class="text-md font-sans font-semibold p-4 border-t border-gray-200">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-sans font-semibold">Thành viên</h2>
        <CustomTooltip title="Thêm thành viên">
            <button
              class="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
              title="Thêm thành viên"
            >
              <LucideUserPlus class="w-6 h-6 shrink-0" />
            </button>
        </CustomTooltip>
      </div>


      <ul class="divide-y divide-gray-200 my-4">
        <li class="flex items-center py-3 hover:bg-gray-100 cursor-pointer">
          <img src="" class="w-8 h-8 mr-2 rounded-full object-cover flex-shrink-0" />
          Thành viên 1
        </li>
        <li class="flex items-center py-3 hover:bg-gray-100 cursor-pointer">
          <img src="" class="w-8 h-8 mr-2 rounded-full object-cover flex-shrink-0" />
          Thành viên 2
        </li>
        <li class="flex items-center py-3 hover:bg-gray-100 cursor-pointer">
          <img src="" class="w-8 h-8 mr-2 rounded-full object-cover flex-shrink-0" />
          Thành viên 3
        </li>
      </ul>

      <button class="text-xs hover:text-green-600">Hiển thị thêm</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LucideUserPlus } from 'lucide-vue-next'
import CustomTooltip from '@/components/tooltips/CustomTooltip.vue'

defineProps({
  room: {
    id: Number,
    name: String,
    avatar: String,
    status: String,
    lastMessage: String,
    members: [],
  },
})
</script>
