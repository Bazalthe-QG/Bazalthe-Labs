import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { api, type User } from '../lib/api'

interface AuthCtx {
  user: User | null
  loading: boolean
  sendOtp: (email: string) => Promise<void>
  verifyOtp: (email: string, code: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  register: (email: string, name: string, password: string) => Promise<void>
  logout: () => void
}

const Ctx = createContext<AuthCtx | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('uilab:token')
    if (!stored) {
      setLoading(false)
      return
    }
    api
      .me()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem('uilab:token')
      })
      .finally(() => setLoading(false))
  }, [])

  const sendOtp = async (email: string) => {
    await api.sendOtp(email)
  }

  const verifyOtp = async (email: string, code: string) => {
    const { token, user: u } = await api.verifyOtp(email, code)
    localStorage.setItem('uilab:token', token)
    setUser(u)
  }

  const login = async (email: string, password: string) => {
    const { token, user: u } = await api.login(email, password)
    localStorage.setItem('uilab:token', token)
    setUser(u)
  }

  const register = async (email: string, name: string, password: string) => {
    const { token, user: u } = await api.register(email, name, password)
    localStorage.setItem('uilab:token', token)
    setUser(u)
  }

  const logout = () => {
    localStorage.removeItem('uilab:token')
    setUser(null)
  }

  return (
    <Ctx.Provider value={{ user, loading, sendOtp, verifyOtp, login, register, logout }}>
      {children}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
