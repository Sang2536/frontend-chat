import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/pages/AboutUs.vue'
import ActivityLog from '@/pages/ActivityLog.vue'
import Bookmark from '@/pages/Bookmark.vue'
import Chat from '@/pages/Chat.vue'
import Contact from '@/pages/Contact.vue'
import Dashboard from '@/pages/Dashboard.vue'
import ForYou from '@/pages/ForYou.vue'
import Login from '@/pages/Login.vue'
import Media from '@/pages/Media.vue'
import Notification from '@/pages/Notification.vue'
import Profile from '@/pages/Profile.vue'
import Register from '@/pages/Register.vue'
import SettingApp from '@/pages/SettingApp.vue'

const routes = [
  // ChatLayout
  { path: '/about-us', component: AboutUs, meta: { layout: 'ChatLayout' } },
  { path: '/activity-log', component: ActivityLog, meta: { layout: 'ChatLayout' } },
  { path: '/bookmark', component: Bookmark, meta: { layout: 'ChatLayout' } },
  { path: '/chat/:slug?', component: Chat, meta: { layout: 'ChatLayout' } },
  { path: '/contact', component: Contact, meta: { layout: 'ChatLayout' } },
  { path: '/home', component: Dashboard, meta: { layout: 'ChatLayout' } },
  { path: '/for-you', component: ForYou, meta: { layout: 'ChatLayout' } },
  { path: '/media', component: Media, meta: { layout: 'ChatLayout' } },
  { path: '/notification', component: Notification, meta: { layout: 'ChatLayout' } },
  { path: '/profile/:slug?', component: Profile, meta: { layout: 'ChatLayout' } },
  { path: '/settings', component: SettingApp, meta: { layout: 'ChatLayout' } },

  // AuthLayout
  { path: '/', redirect: '/login', meta: { layout: 'AuthLayout' } },
  { path: '/login', component: Login, meta: { layout: 'AuthLayout' } },
  { path: '/register', component: Register, meta: { layout: 'AuthLayout' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { left: 0, top: 0 }
  },
})

export default router
