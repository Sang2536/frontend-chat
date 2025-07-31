<!-- components/ToggleSwitch.vue -->
<template>
  <button
    role="switch"
    :aria-checked="modelValue"
    @click="toggle"
    :class="[
      'relative w-11 h-6 transition-colors duration-300 rounded-full focus:outline-none',
      modelValue ? 'bg-blue-500' : 'bg-gray-300',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    ]"
    :disabled="disabled"
  >
    <span
      class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition duration-300"
      :class="modelValue ? 'translate-x-5' : 'translate-x-0'"
    ></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue'])

function toggle() {
  if (!props.disabled) emit('update:modelValue', !props.modelValue)
}
</script>
