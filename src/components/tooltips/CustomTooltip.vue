<template>
  <div class="relative group inline-block">
    <slot />

    <div
      :class="[
        'absolute z-10 px-2 py-1 text-xs rounded shadow-lg whitespace-nowrap pointer-events-none',
        bgClass,
        textClass,
        positionClass,
        'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100',
        'transition duration-200 ease-out'
      ]"
      :style="{ transitionDelay: `${delay}ms` }"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  position: {
    type: String,
    default: 'top',
    validator: (val: string) =>
      ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
  },
  bg: { type: String, default: 'bg-gray-700' },
  text: { type: String, default: 'text-white' },
  delay: { type: Number, default: 200 }, // in milliseconds
})

const bgClass = computed(() => props.bg)
const textClass = computed(() => props.text)

// Vị trí tooltip
const positionClass = computed(() => {
  switch (props.position) {
    case 'top':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2 translate-y-2 group-hover:translate-y-0'
    case 'bottom':
      return 'top-full left-1/2 -translate-x-1/2 mt-2 -translate-y-2 group-hover:translate-y-0'
    case 'left':
      return 'right-full top-1/2 -translate-y-1/2 mr-2 translate-x-2 group-hover:translate-x-0'
    case 'right':
      return 'left-full top-1/2 -translate-y-1/2 ml-2 -translate-x-2 group-hover:translate-x-0'
    case 'top-left':
      return 'bottom-full left-0 mb-2 translate-y-2 group-hover:translate-y-0'
    case 'top-right':
      return 'bottom-full right-0 mb-2 translate-y-2 group-hover:translate-y-0'
    case 'bottom-left':
      return 'top-full left-0 mt-2 -translate-y-2 group-hover:translate-y-0'
    case 'bottom-right':
      return 'top-full right-0 mt-2 -translate-y-2 group-hover:translate-y-0'
    default:
      return 'top-full left-1/2 -translate-x-1/2 mt-2'
  }
})
</script>
