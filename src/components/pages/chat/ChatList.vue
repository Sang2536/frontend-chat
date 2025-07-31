<template>
  <div class="w-full max-h-screen overflow-hidden border-r border-gray-200 flex flex-col">
    <div ref="searchArea" class="relative mb-4 py-4 border-b border-gray-200 h-16 flex items-center">
      <!-- Tiêu đề / input tìm kiếm -->
      <div class="w-4/5 px-4">
        <h2 v-if="!isSearching" class="text-lg font-sans font-semibold leading-6">
          Danh sách chat
        </h2>
        <input
          v-else
          v-model="searchText"
          type="text"
          placeholder="Tìm kiếm..."
          class="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-400 text-sm font-sans font-semibold"
        />
      </div>

      <!-- Nút tìm kiếm -->
      <div class="w-1/5 px-4 text-right">
        <CustomTooltip title="Tìm kiếm" position="bottom-right">
          <button
            class="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
            title="Tìm kiếm"
            @click="toggleSearch"
          >
            <LucideSearch class="w-6 h-6 shrink-0" />
          </button>
        </CustomTooltip>
      </div>
    </div>

    <!-- Danh sách kết quả search -->
    <div class="flex-1 overflow-y-auto">
      <ul class="divide-y divide-gray-200 m-4">
        <li
          v-for="chat in filteredChats"
          :key="chat.id"
          class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
        >
          <img :src="chat.avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
          <div class="ml-4 flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <p class="font-medium truncate max-w-[180px] sm:max-w-[220px]">
                {{ chat.name }}
              </p>
              <LucideDot
                v-if="chat.status === 'online'"
                class="w-9 h-9 text-green-500 flex-shrink-0"
              />
            </div>
            <p class="text-sm text-gray-500 truncate max-w-[220px] sm:max-w-full">
              {{ chat.lastMessage }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { LucideDot, LucideSearch } from 'lucide-vue-next'
import { onClickOutside } from '@vueuse/core'
import CustomTooltip from '@/components/tooltips/CustomTooltip.vue'

const props = defineProps({
  allChats: [] as {
    id: Number,
    name: String,
    avatar: String,
    status: String,
    lastMessage: String,
  }[]
})

const isSearching = ref(false)
const searchText = ref('')
const searchArea = ref(null)

function toggleSearch() {
  isSearching.value = !isSearching.value
}

onClickOutside(searchArea, () => {
  if (isSearching.value) {
    isSearching.value = false
    searchText.value = ''
  }
})

const filteredChats = computed(() => {
  if (!searchText.value) return props.allChats
  return props.allChats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.value.toLowerCase())
  )
})
</script>
