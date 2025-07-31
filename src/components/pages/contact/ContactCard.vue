<template>
  <div class="flex items-center space-x-4 bg-white p-3 rounded shadow hover:bg-gray-50 transition">
    <img
      :src="contact.avatar"
      alt="avatar"
      class="w-10 h-10 rounded-full object-cover"
    />
    <span class="text-lg font-medium">{{ contact.name }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  contact: {
    type: Object,
    required: true
  }
})
</script>
