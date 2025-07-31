<template>
  <div>
    <h3 class="text-lg font-semibold mb-2">Danh sách bạn bè</h3>
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="i in 4" :key="i" class="flex items-center gap-2">
        <img :src="`https://i.pravatar.cc/40?img=${i + 10}`" class="w-10 h-10 rounded-full" />
        <span>Bạn bè {{ i }}</span>
      </li>
    </ul>
  </div>
</template>
