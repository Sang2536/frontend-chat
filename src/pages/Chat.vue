<template>
  <div class="w-screen h-screen grid grid-cols-12 gap-0 bg-white rounded-lg shadow-md overflow-hidden">
    <div class="col-span-3 h-full">
      <ChatList :allChats="chats" />
    </div>
    <div class="col-span-6 h-full border-x border-gray-200">
      <ChatBox :room="chats[6]" />
    </div>
    <div class="col-span-2 h-full">
      <ChatInfo :room="chats[6]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatList from '@/components/pages/chat/ChatList.vue'
import ChatBox from '@/components/pages/chat/ChatBox.vue'
import ChatInfo from '@/components/pages/chat/ChatInfo.vue'


const chats = [
  { id: 1, name: 'Chat With AI', avatar: 'https://i.pravatar.cc/100?img=45', status: 'online', lastMessage: 'If you want to break down each flashcard into smaller pieces to print, or convert to another format (Word, Markdown, Anki, etc.), I can help!' },
  { id: 2, name: 'Đỗ Phương Linh', avatar: 'https://i.pravatar.cc/100?img=45', status: 'online', lastMessage: 'Hẹn gặp lại bạn vào chiều nay.' },
  { id: 3, name: 'Trần Ngọc Thảo', avatar: 'https://i.pravatar.cc/100?img=46', status: 'online', lastMessage: 'Cảm ơn.' },
  { id: 4, name: 'Team DEV', avatar: 'https://i.pravatar.cc/100?img=49', status: 'online', lastMessage: 'Deploy xong rồi nhé!' },
  { id: 5, name: 'Hoàng Mai Phương', avatar: 'https://i.pravatar.cc/100?img=47', status: 'offline', lastMessage: 'Hẹn gặp lại bạn vào chiều nay.' },
  { id: 6, name: 'Đinh Tiến Dũng', avatar: 'https://i.pravatar.cc/100?img=48', status: 'online', lastMessage: 'Chào bạn, bạn khoẻ không?' },
  { id: 7, name: '500 AE Siu Nhân', avatar: 'https://i.pravatar.cc/100?img=50', status: 'offline', lastMessage: 'Đi cafe overnight không ae?.' },
  { id: 8, name: 'Cộng đồng Giúp đỡ Newbie Genshin Impact', avatar: 'https://i.pravatar.cc/100?img=50', status: 'offline', lastMessage: 'Tết năm nay ace về được bao lâu vậy? Gặp nhau nhậu phát chứ nhỉ.' },
  { id: 9, name: 'Mai Mai', avatar: 'https://i.pravatar.cc/100?img=48', status: 'online', lastMessage: 'Rảnh không?' },
  { id: 10, name: 'Nguyễn Hoàng Nam', avatar: 'https://i.pravatar.cc/100?img=48', status: 'online', lastMessage: 'Thức khuya còn hơn nơi nào đó nữa' },
]
</script>
