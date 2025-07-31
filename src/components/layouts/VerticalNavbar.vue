<template>
  <nav class="w-full h-full bg-white flex flex-col items-center py-6">
    <div class="flex flex-col w-20 h-screen bg-white">

      <!-- Scrollable nav -->
      <div class="flex-1 overflow-y-auto px-2 pt-4">
        <div
          v-for="item in visibleMainNavItems"
          :key="item.name"
          class="mb-6"
        >
          <div class="flex flex-col items-center">
            <router-link
              :to="`/${item.name}`"
              tabindex="-1"
              @mousedown.prevent
              @mouseenter="showTooltip(item.label, $event, 'right')"
              @mouseleave="hideTooltip"
              :class="[
                'w-12 h-12 flex items-center justify-center rounded-xl transition-colors hover:bg-green-200 hover:text-green-600',
                active === item.name ? 'bg-green-100 text-green-500' : 'text-gray-500'
              ]"
            >
              <component :is="item.icon" class="w-6 h-6 shrink-0" />
            </router-link>
          </div>
        </div>
      </div>

      <!-- Bottom nav -->
      <div class="px-2 pb-4 border-t border-gray-200 pt-4 bg-white">
        <div class="w-full text-left text-sm font-semibold text-gray-500 mb-2 px-2">
          Tài khoản
        </div>

        <div class="flex flex-col items-center mb-4">
          <DropdownMenu :items="userMenu" :onSelect="handleAction" :icon="LucideUser" position="top-left" />
        </div>
      </div>
    </div>

    <!-- Tooltip -->
    <BaseTooltip ref="tooltipRef" :text="tooltipText" :placement="tooltipPlacement" />
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  LucideHome, LucideMessageCircle, LucideUsers, LucideSettings, LucideInfo,
  LucideBell, LucideIdCard, LucideStar, LucideLogOut, LucideLogIn,
  LucideUserPlus, LucideBookmark, LucideUser, LucidePencil, LucideSearch,
  LucideMessageSquareReply, LucideFilePlus
} from 'lucide-vue-next'

import BaseTooltip from '@/components/base/BaseTooltip.vue'
import DropdownMenu from '@/components/base/DropdownMenu.vue'
import { ItemPlacement } from '@/types/BaseTheme'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const active = computed(() => route.path.replace('/', ''))

const userStore = useUserStore()

const tooltipRef = ref<InstanceType<typeof BaseTooltip>>()
const tooltipText = ref('')
const tooltipPlacement = ref<ItemPlacement>('right')

function showTooltip(
  text: string,
  event: MouseEvent,
  placement: ItemPlacement = 'right'
) {
  tooltipText.value = text
  tooltipPlacement.value = placement
  const el = event.currentTarget as HTMLElement
  tooltipRef.value?.show(el)
}

function hideTooltip() {
  tooltipRef.value?.hide()
}

const mainNavItems = [
  { name: 'home', label: 'Trang chủ', icon: LucideHome, hideNavbar: false },
  { name: 'chat', label: 'Tin nhắn', icon: LucideMessageCircle, hideNavbar: false },
  { name: 'profile', label: 'Hồ sơ', icon: LucideIdCard, hideNavbar: false },
  { name: 'contact', label: 'Kết nối', icon: LucideUsers, hideNavbar: false },
  { name: 'bookmark', label: 'Đánh dấu', icon: LucideBookmark, hideNavbar: false },
  { name: 'for-you', label: 'Dành cho bạn', icon: LucideStar, hideNavbar: false },
  { name: 'notification', label: 'Thông báo', icon: LucideBell, hideNavbar: false },
  { name: 'settings', label: 'Cài đặt', icon: LucideSettings, hideNavbar: false },
  { name: 'about-us', label: 'Thông tin', icon: LucideInfo, hideNavbar: false },
]

const visibleMainNavItems = computed(() =>
  mainNavItems.filter(item => !item.hideNavbar)
)

function handleLogout() {
  localStorage.removeItem('token')
  window.location.href = '/login'
}

function handleAction(action: string) {
  switch (action) {
    case 'logout': handleLogout(); break
    case 'create-news': userStore.createPost('News Content'); break
    case 'send-feedback': userStore.sendFeedback('Feedback Content'); break
    case 'search': userStore.search('Search Content'); break
    default: console.warn('No handler for:', action)
  }
}

onMounted(() => {
  document.activeElement instanceof HTMLElement && document.activeElement.blur()
})

const userMenu = [
  { label: 'Profile', icon: LucideUser, route: '/profile', value: 'profile' },
  { label: 'Edit', icon: LucidePencil, route: '/edit', value: 'edit' },
  { label: 'Create News', icon: LucideFilePlus, value: 'create-news' },
  { label: 'Search', icon: LucideSearch, value: 'search' },
  { label: 'Settings', icon: LucideSettings, route: '/settings', value: 'settings' },
  { label: 'Send Feedback', icon: LucideMessageSquareReply, value: 'send-feedback' },
  { label: 'Another account', icon: LucideLogIn, route: '/login', value: 'login' },
  { label: 'Register', icon: LucideUserPlus, route: '/register', value: 'register' },
  { label: 'Logout', icon: LucideLogOut, value: 'logout', danger: true },
]
</script>
