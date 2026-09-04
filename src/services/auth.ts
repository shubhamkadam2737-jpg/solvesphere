import type { User, UserRole } from '../types'
import { readStorage, writeStorage } from '../lib/storage'

const USER_KEY = 'ss_user'
const TOKEN_KEY = 'ss_access_token'

export const auth = {
  getUser: () => readStorage<User | null>(USER_KEY, null),
  isAuthenticated: () => Boolean(localStorage.getItem(TOKEN_KEY)),
  async requestCode(email: string) {
    // Replace with POST /auth/request-code when the backend is connected.
    writeStorage('ss_pending_email', email)
    return { ok: true }
  },
  async verifyCode(email: string, code: string, role: UserRole) {
    if (!/^\d{6}$/.test(code)) throw new Error('Verification code must contain 6 digits.')
    const user: User = { id: crypto.randomUUID(), name: email.split('@')[0] || 'SolveSphere User', email, role }
    writeStorage(USER_KEY, user)
    localStorage.setItem(TOKEN_KEY, `demo.${btoa(`${user.id}:${Date.now()}`)}`)
    return user
  },
  logout() { localStorage.removeItem(USER_KEY); localStorage.removeItem(TOKEN_KEY) },
}
