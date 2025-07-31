// stores/auth.ts
import { defineStore } from 'pinia';
import api from '@/ultis/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; name: string, avatar: string, email: string },
  }),
  actions: {
    async getUser() {
      const res = await api.get('/v1/user');
      this.user = res.data;
    },
    async register(name: string, email: string, password: string) {
      await api.get('/sanctum/csrf-cookie');
      await api.post('/v1/register', { name, email, password });
      await this.getUser();
    },
    async login(email: string, password: string) {
      await api.get('/sanctum/csrf-cookie');
      await api.post('/v1/login', { email, password });
      await this.getUser();
    },
    async logout() {
      // await api.post('/v1/logout');
      this.user = null;

      localStorage.removeItem('token')
      window.location.href = '/login'
    },
  },
});
