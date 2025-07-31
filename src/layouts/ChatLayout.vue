<!-- layouts/ChatLayout.vue -->
<template>
  <div class="flex h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300">
    <!-- Navbar -->
    <aside class="w-20 h-full shrink-0 border-r border-gray-200 shadow-md z-10">
      <VerticalNavbar />
    </aside>

    <!-- Main content -->
    <main class="flex-1 h-full overflow-y-auto overflow-x-hidden bg-gray-50 relative z-0">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import VerticalNavbar from '@/components/layouts/VerticalNavbar.vue'
</script>
