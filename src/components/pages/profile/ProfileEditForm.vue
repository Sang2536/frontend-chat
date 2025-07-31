<template>
  <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded">
    <div class="col-span-2">
      <label class="font-medium">Ảnh đại diện</label>
      <AvatarUploader v-model="form.avatar" />
    </div>

    <div>
      <label class="font-medium">Tên hiển thị</label>
      <input v-model="form.name" type="text" class="input" />
    </div>

    <div>
      <label class="font-medium">Username</label>
      <input v-model="form.username" type="text" class="input" />
    </div>

    <div class="col-span-2">
      <label class="font-medium">Giới thiệu</label>
      <textarea v-model="form.bio" class="input" rows="3"></textarea>
    </div>

    <div class="col-span-2 flex justify-end gap-3">
      <button @click.prevent="$emit('cancel')" class="btn-outline">Huỷ</button>
      <button type="submit" class="btn-primary">Lưu</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AvatarUploader from './AvatarUploader.vue'

const props = defineProps({ user: Object })
const emit = defineEmits(['cancel', 'saved'])

const form = reactive({ ...props.user })

function submitForm() {
  // Gọi API cập nhật nếu cần
  emit('saved', { ...form })
}
</script>

<style scoped>
.input {
  @apply w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400;
}
.btn-primary {
  @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}
.btn-outline {
  @apply px-4 py-2 border border-gray-300 rounded hover:bg-gray-100;
}
</style>
