<template>
  <div class="flex h-full">
    <!-- Sidebar -->
    <div class="w-64 border-r p-4">
      <h2 class="text-lg font-bold mb-4">Cài đặt</h2>
      <ul>
        <li v-for="item in menu" :key="item.key" @click="currentTab = item.key"
            :class="['cursor-pointer p-2 rounded-lg mb-1', currentTab === item.key ? 'bg-blue-100 text-blue-600 font-semibold' : 'hover:bg-gray-100']">
          {{ item.label }}
        </li>
      </ul>
    </div>

    <!-- Content -->
    <div class="flex-1 p-6 overflow-y-auto">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SettingAccount from '@/components/pages/settings/SettingAccount.vue'
import SettingTheme from '@/components/pages/settings/SettingTheme.vue'
import SettingSecurity from '@/components/pages/settings/SettingSecurity.vue'
import SettingNotification from '@/components/pages/settings/SettingNotification.vue'
import SettingSession from '@/components/pages/settings/SettingSession.vue'
import SettingAuditAndLogs from '@/components/pages/settings/SettingAuditAndLogs.vue'
import SettingRecoveryAndWarning from '@/components/pages/settings/SettingRecoveryAndWarning.vue'

const currentTab = ref('theme')

const menu = [
  { key: 'theme', label: 'Giao diện' },
  { key: 'account', label: 'Tài khoản' },
  { key: 'security', label: 'Bảo mật' },
  { key: 'notification', label: 'Thông báo' },
  { key: 'auditAndLogs', label: 'Nhật kí hoạt động' },
  { key: 'session', label: 'Phiên hoạt động' },
  { key: 'recoveryAndWarning', label: 'Khôi phục và cảnh báo' },
]

const componentsMap = {
  theme: SettingTheme,
  account: SettingAccount,
  security: SettingSecurity,
  notification: SettingNotification,
  auditAndLogs: SettingAuditAndLogs,
  session: SettingSession,
  recoveryAndWarning: SettingRecoveryAndWarning,
}

const currentComponent = computed(() => componentsMap[currentTab.value])
</script>
