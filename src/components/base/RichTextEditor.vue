<!-- components/RichTextEditor.vue -->
<template>
  <div class="border border-gray-300 rounded-lg">
    <editor-content :editor="editor" class="p-4 min-h-[150px] focus:outline-none prose" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const editor = new Editor({
  content: props.modelValue || '',
  extensions: [StarterKit],
  onUpdate({ editor }) {
    emit('update:modelValue', editor.getHTML())
  },
})

onBeforeUnmount(() => {
  editor.destroy()
})
</script>

<style scoped>
/* Style để nội dung dễ nhìn */
.ProseMirror:focus {
  outline: none;
}
</style>
