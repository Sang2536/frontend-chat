<template>
  <div class="relative inline-block text-left">
    <!-- Trigger -->
    <div
      @click="open = !open"
      class="w-10 h-10 rounded-full bg-gray-200 cursor-pointer hover:ring-2 ring-blue-400 flex items-center justify-center"
    >
      <slot v-if="$slots.default" />
      <component v-else :is="icon" class="w-5 h-5 text-gray-600" />
    </div>

    <!-- Dropdown Menu -->
    <transition name="fade" appear>
      <div
        v-if="open"
        ref="menuRef"
        class="absolute z-50 w-56 bg-white border border-gray-200 rounded-lg shadow-lg"
        :class="dropdownPositionClass"
      >
        <div v-if="label" class="border-b border-gray-200 p-4 font-semibold">
          {{ label }}
        </div>
        <ul class="py-1">
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="[
              'flex items-center px-4 py-2 space-x-2 hover:bg-gray-100 transition-all',
              item.danger ? 'text-red-500' : '',
              item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            ]"
          >
            <!-- RouterLink -->
            <RouterLink
              v-if="item.route && !item.disabled"
              :to="item.route"
              class="flex items-center w-full space-x-2"
              @click="open = false"
            >
              <component v-if="item.icon" :is="item.icon" class="w-4 h-4" />
              <span>{{ item.label }}</span>
            </RouterLink>

            <!-- External Link -->
            <a
              v-else-if="item.href && !item.disabled"
              :href="item.href"
              target="_blank"
              rel="noopener"
              class="flex items-center w-full space-x-2"
              @click="open = false"
            >
              <component v-if="item.icon" :is="item.icon" class="w-4 h-4" />
              <span>{{ item.label }}</span>
            </a>

            <!-- Action Button -->
            <button
              v-else
              class="flex items-center w-full space-x-2 text-left"
              :disabled="item.disabled"
              @click="handleSelect(item)"
            >
              <component v-if="item.icon" :is="item.icon" class="w-4 h-4" />
              <span>{{ item.label }}</span>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Component } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { ItemPlacement } from '@/types/BaseTheme'

interface MenuItem {
  label: string
  icon?: Component
  value?: string
  danger?: boolean
  disabled?: boolean
  route?: string // Vue Router link
  href?: string  // external link
}

const props = defineProps<{
  items: MenuItem[]
  label?: string
  onSelect?: (value: string) => void
  icon?: Component
  position?: ItemPlacement
}>()

const open = ref(false)
const menuRef = ref<HTMLElement | null>(null)

onClickOutside(menuRef, () => (open.value = false))

function handleSelect(item: MenuItem) {
  if (item.disabled || item.route || item.href) return
  open.value = false
  if (item.value) {
    props.onSelect?.(item.value)
  }
}

const dropdownPositionClass = computed(() => {
  switch (props.position) {
    case 'left': return 'left-0 mt-2'
    case 'right': return 'right-0 mt-2'
    case 'top': return 'bottom-full mb-2 left-0'
    case 'bottom': return 'top-full mt-2 left-0'
    case 'top-left': return 'bottom-full mb-2 left-0'
    case 'top-right': return 'bottom-full mb-2 right-0'
    case 'bottom-left': return 'top-full mt-2 left-0'
    case 'bottom-right': return 'top-full mt-2 right-0'
    default: return 'right-0 mt-2'
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
