<template>
  <!-- Tabs -->
  <div class="mt-4 border-b px-6">
    <nav class="flex gap-4">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="currentTab = tab.name"
        :class="[
            'pb-2 border-b-2',
            currentTab === tab.name ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
          ]"
      >
        {{ tab.label }}
      </button>
    </nav>
  </div>

  <!-- Tab Content -->
  <div class="p-6">
    <component :is="currentComponent" :user="user" />
  </div>
</template>

<script setup lang="ts">

import ProfileInfoTab from '@/components/pages/profile/tabs/ProfileInfoTab.vue'
import ProfilePostsTab from '@/components/pages/profile/tabs/ProfilePostsTab.vue'
import ProfileFriendsTab from '@/components/pages/profile/tabs/ProfileFriendsTab.vue'
import ProfileActivityLogTab from '@/components/pages/profile/tabs/ProfileActivityLogTab.vue'
import ProfileSettingsTab from '@/components/pages/profile/tabs/ProfileSettingsTab.vue'
import { computed, ref } from 'vue'

const tabs = [
  { name: 'info', label: 'Giới thiệu', component: ProfileInfoTab },
  { name: 'posts', label: 'Bài viết', component: ProfilePostsTab },
  { name: 'friends', label: 'Bạn bè', component: ProfileFriendsTab },
  { name: 'activity-log', label: 'Lịch sử hoạt động', component: ProfileActivityLogTab },
  { name: 'settings', label: 'Cài đặt', component: ProfileSettingsTab },
]

const currentTab = ref('info')

defineProps({
  user: Object
})

const currentComponent = computed(() => {
  const tab = tabs.find(t => t.name === currentTab.value)
  return tab?.component
})
</script>
