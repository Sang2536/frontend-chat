<template>
  <div class="flex items-center space-x-3">
    <div>
      <div class="flex flex-col items-center mb-4">
        <img v-if="contact.email === 'admin@example.com'" :src="contact.avatar" class="w-10 h-10 rounded-full" />

        <DropdownMenu v-else :items="userMenu" :label="contact.username" :onSelect="handleAction" position="bottom-left">
          <img :src="contact.avatar" class="w-10 h-10 rounded-full" />
        </DropdownMenu>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm">{{ contact.name }}</span>
      <span class="text-xs text-gray-400">@{{ contact.username }}</span>
    </div>
  </div>
  <slot />
</template>

<script setup lang="ts">
import {
  LucideBan, LucideBookmark, LucideEyeOff,LucideIdCard, LucideHeartPlus,
  LucideMessageCircle, LucideMessageSquareReply, LucideUserPlus
} from 'lucide-vue-next'
import DropdownMenu from '@/components/base/DropdownMenu.vue'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  contact: {
    type: Object,
    required: true
  },
})

const userStore = useUserStore()
const userIdFake = props.contact.username

function handleAction(action: string) {
  switch (action) {
    case 'add-friend': userStore.addFriend(userIdFake); break
    case 'add-bookmark': userStore.addBookmark(userIdFake); break
    case 'follow': userStore.followUser(userIdFake); break
    case 'hidden': userStore.hiddenUser(userIdFake); break
    case 'block': userStore.blockUser(userIdFake); break
    case 'report': userStore.reportUser(userIdFake); break
    default: console.warn('No handler for:', action)
  }
}

const userMenu = [
  { label: 'Start chat', icon: LucideMessageCircle, route: '/chat/username', value: 'chat' },
  { label: 'Add friend', icon: LucideUserPlus, value: 'add-friend' },
  { label: 'Add Bookmark', icon: LucideBookmark, value: 'add-bookmark' },
  { label: 'Profile', icon: LucideIdCard, route: '/profile/username', value: 'profile' },
  { label: 'Follow', icon: LucideHeartPlus, value: 'follow' },
  { label: 'Hidden', icon: LucideEyeOff, value: 'hidden', danger: true },
  { label: 'Block', icon: LucideBan, value: 'block', danger: true },
  { label: 'Report', icon: LucideMessageSquareReply, value: 'report', danger: true },
]
</script>
