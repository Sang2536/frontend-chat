<template>
  <div class="max-h-screen flex flex-col">
    <!-- Header -->
    <div class="text-lg border-b border-gray-200 p-4 font-semibold">
      {{ room.name }}
    </div>

    <!-- Message area: scrollable -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
      <template v-for="(dayMessages, date) in groupedMessagesByDate" :key="date">
        <!-- Date separator -->
        <div class="text-center text-xs text-gray-500 font-medium my-2">
          ───── {{ date }} ─────
        </div>

        <!-- Messages of that day -->
        <div
          v-for="msg in dayMessages"
          :key="msg.id"
          :class="[
        'flex flex-col max-w-full',
        msg.user.id === props.currentUserId ? 'self-end items-end' : 'self-start items-start'
      ]"
        >
          <!-- Tên người gửi -->
          <template v-if="msg.user.id !== props.currentUserId">
            <div class="text-sm font-semibold mb-1">{{ msg.user.name }}</div>
          </template>

          <!-- Bubble -->
          <div
            :class="[
          'px-4 py-2 rounded-4xl whitespace-pre-line break-words',
          msg.user.id === props.currentUserId
            ? 'bg-green-200 text-gray-900'
            : 'bg-gray-100 text-gray-800'
        ]"
          >
            {{ msg.content }}
          </div>

          <!-- Avatar + giờ -->
          <div class="mt-1 flex items-center gap-2 text-xs text-gray-500">
            <template v-if="msg.user.id !== props.currentUserId">
              <div class="w-6 h-6 bg-gray-300 rounded-full">
                <img :src="msg.user.avatar" alt="avatar" class="w-full h-full rounded-full object-cover" />
              </div>
            </template>
            <div>{{ formatTime(msg.created_at) }}</div>
          </div>
        </div>
      </template>
      <div ref="bottomRef" />
    </div>

    <!-- Input fixed at bottom -->
    <div class="border-t border-gray-200 p-3 bg-white">
      <div class="flex gap-2">
        <input
          v-model="message"
          type="text"
          placeholder="Nhập tin nhắn..."
          class="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring"
          @keydown.enter="sendMessage"
        />
        <button
          @click="sendMessage"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          :disabled="!message.trim()"
        >
          Gửi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  room: {
    id: Number,
    name: String,
    avatar: String,
    status: String,
    lastMessage: String,
  },
  currentUserId: {
    type: Number,
    default: 5
  },
})

const messages = [
  {id: 1, user: { id: 1, name: 'Chăm chỉ kiếm tiền', avatar: 'https://i.pravatar.cc/100?img=40' }, content: 'Hội những người hoạt động về đêm muộn :)))', created_at: '2025-07-17 21:46:00'},
  {id: 2, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'T hđ ban ngày nha', created_at: '2025-07-17 22:01:00'},
  {id: 3, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Ở nhà có mưa k ae', created_at: '2025-07-19 21:54:00'},
  {id: 4, user: { id: 4, name: 'Ngon thì nhào vô', avatar: 'https://i.pravatar.cc/100?img=37' }, content: 'Nhà k mưa', created_at: '2025-07-19 21:55:00'},
  {id: 5, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'K mưa thật à', created_at: '2025-07-19 22:00'},
  {id: 6, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Ae ở nhà sao r', created_at: '2025-07-20 20:26:00'},
  {id: 7, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Chống bão tới đâu r', created_at: '2025-07-20 20:26:00'},
  {id: 8, user: { id: 4, name: 'Ngon thì nhào vô', avatar: 'https://i.pravatar.cc/100?img=38' }, content: 'Bão chưa về tới a ơi', created_at: '2025-07-20 20:42:00'},
  {id: 9, user: { id: 5, name: 'Ngắm sao ban ngày', avatar: 'https://i.pravatar.cc/100?img=37' }, content: 'Có vẻ nhóm hơi trầm nhỉ? - Đứa ít nhắn nhất hay ý kiến nhất', created_at: '2025-07-23 20:19:00'},
  {id: 10, user: { id: 4, name: 'Ngon thì nhào vô', avatar: 'https://i.pravatar.cc/100?img=37' }, content: 'Ai ai', created_at: '2025-07-23 20:22:00'},
  {id: 11, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Chả có ai nc', created_at: '2025-07-23 20:24:00'},
  {id: 12, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Mk t tự biên tự diễn', created_at: '2025-07-23 20:24:00'},
  {id: 13, user: { id: 5, name: 'Ngắm sao ban ngày', avatar: 'https://i.pravatar.cc/100?img=37' }, content: 'Team sống về khuya', created_at: '2025-07-23 20:29:00'},
  {id: 14, user: { id: 5, name: 'Ngắm sao ban ngày', avatar: 'https://i.pravatar.cc/100?img=37' }, content: 'Nay rảnh nên ngoi lên nhắn chút 🤣', created_at: '2025-07-23 20:29:00'},
  {id: 15, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Haha', created_at: '2025-07-23 20:31:00'},
  {id: 16, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Chịu chết', created_at: '2025-07-23 20:31:00'},
  {id: 17, user: { id: 5, name: 'Ngắm sao ban ngày', avatar: 'https://i.pravatar.cc/100?img=37' }, content: 'Hello. Nay lại ngoi lên', created_at: '2025-07-27 20:31:00'},
  {id: 17, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=39' }, content: 'Gì đấy chú em', created_at: '2025-07-27 20:32:00'},
  {id: 19, user: { id: 1, name: 'Chăm chỉ kiếm tiền', avatar: 'https://i.pravatar.cc/100?img=40' }, content: 'Ẩn hiện như ninjq', created_at: '2025-07-27 20:32:00'},
  {id: 20, user: { id: 5, name: 'Ngắm sao ban ngày', avatar: 'https://i.pravatar.cc/100?img=40' }, content: 'Ngủ quên ae ơi', created_at: '2025-07-28 22:31:00'},
  {id: 21, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=40' }, content: 'Thì kệ m chứ', created_at: '2025-07-28 22:31:00'},
  {id: 22, user: { id: 3, name: 'Đẹp trai nhất xóm', avatar: 'https://i.pravatar.cc/100?img=40' }, content: 'Ai quan tâm', created_at: '2025-07-28 22:31:00'},
]

const message = ref('')

// Format thời gian hiển thị (HH:mm hoặc dd/MM nếu cần)
function formatTime(datetime: string) {
  const date = new Date(datetime)
  return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

function formatDateOnly(datetime: string) {
  const date = new Date(datetime)

  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  const dateStr = date.toLocaleDateString('vi-VN')
  const todayStr = today.toLocaleDateString('vi-VN')
  const yesterdayStr = yesterday.toLocaleDateString('vi-VN')

  if (dateStr === todayStr) return 'Hôm nay, ' + todayStr
  if (dateStr === yesterdayStr) return 'Hôm qua, ' + yesterdayStr
  return dateStr // ví dụ: 27/07/2025
}

// Group messages by date
const groupedMessagesByDate = computed(() => {
  const groups: Record<string, typeof messages> = {}
  for (const msg of messages) {
    const dateKey = formatDateOnly(msg.created_at)
    if (!groups[dateKey]) groups[dateKey] = []
    groups[dateKey].push(msg)
  }
  return groups
})

function sendMessage() {
  if (!message.value.trim()) return
  messages.push({
    id: Date.now(),
    user: { id: props.currentUserId, name: 'Tôi', avatar: '' },
    content: message.value.trim(),
    created_at: new Date().toISOString(),
  })
  message.value = ''
  scrollToBottom()
}

const bottomRef = ref<HTMLElement | null>(null)

function scrollToBottom() {
  nextTick(() => {
    if (bottomRef.value) {
      bottomRef.value.scrollIntoView({ behavior: 'auto' })
    }
  })
}

onMounted(scrollToBottom)
</script>
