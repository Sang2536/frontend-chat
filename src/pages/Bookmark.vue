<template>
  <div class="flex items-center justify-center min-h-[300px] bg-gray-50 rounded-lg border border-dashed border-gray-300 p-8 text-center">
    <div>
      <div class="mx-auto mb-4 text-5xl text-gray-400">
        🚧
      </div>
      <h2 class="text-xl font-semibold text-gray-800">Tính năng đang được phát triển</h2>
      <p class="mt-2 text-gray-500">Chúng tôi đang nỗ lực hoàn thiện. Vui lòng quay lại sau!</p>
      <router-link
        to="/home"
        class="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-150"
      >
        Quay lại trang chính
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
