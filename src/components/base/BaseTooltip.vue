<template>
  <Teleport to="body">
    <div
      v-if="visible"
      :style="style"
      class="fixed z-50 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none transition-opacity duration-200"
    >
      {{ text }}
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ItemPlacement } from '@/types/BaseTheme'

const props = defineProps<{
  text: string
  placement?: ItemPlacement
}>()

const visible = ref(false)

const style = reactive({
  top: '0px',
  left: '0px',
})

function show(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const tooltipHeight = 28  // ước lượng
  const tooltipWidth = 100  // ước lượng trung bình
  const gap = 8             // khoảng cách giữa tooltip và phần tử

  let top = 0
  let left = 0

  const placement = props.placement || 'right'

  switch (placement) {
    case 'top':
      top = rect.top - tooltipHeight - gap
      left = rect.left + rect.width / 2 - tooltipWidth / 2
      break
    case 'bottom':
      top = rect.bottom + gap
      left = rect.left + rect.width / 2 - tooltipWidth / 2
      break
    case 'left':
      top = rect.top + rect.height / 2 - tooltipHeight / 2
      left = rect.left - tooltipWidth - gap
      break
    case 'right':
      top = rect.top + rect.height / 2 - tooltipHeight / 2
      left = rect.right + gap
      break
    case 'top-left':
      top = rect.top - tooltipHeight - gap
      left = rect.left
      break
    case 'top-right':
      top = rect.top - tooltipHeight - gap
      left = rect.right - tooltipWidth
      break
    case 'bottom-left':
      top = rect.bottom + gap
      left = rect.left
      break
    case 'bottom-right':
      top = rect.bottom + gap
      left = rect.right - tooltipWidth
      break
  }

  style.top = `${top}px`
  style.left = `${left}px`
  visible.value = true
}

function hide() {
  visible.value = false
}

defineExpose({ show, hide })
</script>
