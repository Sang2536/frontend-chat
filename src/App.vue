<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Layout imports
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ChatLayout from '@/layouts/ChatLayout.vue'

const route = useRoute()

const layouts = {
  DefaultLayout,
  AuthLayout,
  ChatLayout,
}

// Lấy layout từ meta route, fallback về DefaultLayout nếu không có
const layout = computed(() => {
  const name = route.meta.layout || 'DefaultLayout'
  return layouts[name] || DefaultLayout
})
</script>
