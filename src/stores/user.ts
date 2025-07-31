import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', () => {
  const authStore = useAuthStore()
  const currentUser = computed(() => authStore.user)

  const bookmarks = ref<string[]>([])
  const following = ref<string[]>([])
  const hiddenUsers = ref<string[]>([])
  const blockedUsers = ref<string[]>([])
  const friends = ref<string[]>([])
  const reportedUsers = ref<string[]>([])
  const hiddenContent = ref<string[]>([])

  function handleLogout() {
    authStore.logout()
  }

  function editProfile(data: Record<string, any>) {
    alert(`📝 Editing profile with: ${data}`)
    // Gọi API + Handle logic
  }

  function createPost(content: string) {
    alert(`📝 Creating post: ${content}`)
  }

  function createComment(postId: string, content: string) {
    alert(`💬 Commenting on ${postId}: ${content}`)
  }

  function search(keyword: string) {
    alert(`🔍 Searching for: ${keyword}`)
  }

  function forgotPassword(email: string) {
    alert(`📧 Sending password reset to: ${email}`)
  }

  function changePassword(oldPass: string, newPass: string) {
    alert('🔐 Changing password')
  }

  function disableAccount() {
    alert('⚠️ Disabling account')
  }

  function sendFeedback(content: string) {
    alert(`🗣️ Sending feedback: ${content}`)
  }

  function followUser(userId: string) {
    if (!following.value.includes(userId)) {
      following.value.push(userId)
      alert(`✅ Followed ${userId}`)
    }
  }

  function unfollowUser(userId: string) {
    following.value = following.value.filter(id => id !== userId)
    alert(`❌ Unfollowed ${userId}`)
  }

  function addFriend(userId: string) {
    if (!friends.value.includes(userId)) {
      friends.value.push(userId)
      alert(`👥 Added friend: ${userId}`)
    }
  }

  function startChat(userId: string) {
    alert(`💬 Starting chat with: ${userId}`)
  }

  function copyLink(link: string) {
    navigator.clipboard.writeText(link)
    alert(`🔗 Copied link: ${link}`)
  }

  function markNotInterested(contentId: string) {
    if (!hiddenContent.value.includes(contentId)) {
      hiddenContent.value.push(contentId)
      alert(`🙅 Not interested in: ${contentId}`)
    }
  }

  function blockUser(userId: string) {
    if (!blockedUsers.value.includes(userId)) {
      blockedUsers.value.push(userId)
      alert(`🚫 Blocked user: ${userId}`)
    }
  }

  function hiddenUser(userId: string) {
    if (!hiddenUsers.value.includes(userId)) {
      hiddenUsers.value.push(userId)
      alert(`🚫 Hidden user: ${userId}`)
    }
  }

  function reportUser(userId: string) {
    if (!reportedUsers.value.includes(userId)) {
      reportedUsers.value.push(userId)
      alert(`🚨 Reported user: ${userId}`)
    }
  }

  function addBookmark(postId: string) {
    if (!bookmarks.value.includes(postId)) {
      bookmarks.value.push(postId)
      alert(`🔖 Bookmarked post: ${postId}`)
    }
  }

  return {
    currentUser,

    // state
    bookmarks,
    following,
    blockedUsers,
    friends,
    reportedUsers,
    hiddenContent,

    // auth user actions
    handleLogout,
    editProfile,
    createPost,
    createComment,
    search,
    forgotPassword,
    changePassword,
    disableAccount,
    sendFeedback,

    // external user/content actions
    addFriend,
    startChat,
    copyLink,
    followUser,
    unfollowUser,
    markNotInterested,
    hiddenUser,
    blockUser,
    reportUser,
    addBookmark
  }
})
