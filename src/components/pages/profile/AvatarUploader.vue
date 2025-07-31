<template>
  <div class="flex flex-col items-center gap-2">
    <img :src="modelValue" class="w-24 h-24 rounded-full object-cover" />
    <input type="file" @change="onFileChange" accept="image/*" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

function onFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      emit('update:modelValue', e.target.result)
    }
    reader.readAsDataURL(file)
  }
}
</script>
