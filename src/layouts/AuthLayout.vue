<template>
  <div class="flex h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300">
    <div class="w-full bg-white shadow-lg rounded-2xl">
      <!-- Nội dung form sẽ được truyền vào qua slot -->
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
