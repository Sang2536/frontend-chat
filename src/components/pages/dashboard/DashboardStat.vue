<template>
  <div class="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
    <div class="text-3xl">{{ icon }}</div>
    <div>
      <div class="text-gray-500 text-sm">{{ title }}</div>
      <div class="text-xl font-bold">{{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  value: [String, Number],
  icon: String
})
</script>
