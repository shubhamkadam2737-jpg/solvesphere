import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { User, UserRole } from '../types'
import { auth } from '../services/auth'

type AuthContextValue = { user: User | null; login: (email: string, code: string, role: UserRole) => Promise<void>; logout: () => void }
const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => auth.getUser())
  useEffect(() => { setUser(auth.getUser()) }, [])
  const value = useMemo(() => ({
    user,
    login: async (email: string, code: string, role: UserRole) => setUser(await auth.verifyCode(email, code, role)),
    logout: () => { auth.logout(); setUser(null) },
  }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
