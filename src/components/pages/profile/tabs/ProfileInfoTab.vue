<template>
  <div>
    <p class="text-gray-700">{{ user.bio }}</p>
    <p class="mt-2 text-gray-500">Email: {{ user.email }}</p>
    <p class="text-gray-500">Vị trí: {{ user.address }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({ user: Object })
</script>
