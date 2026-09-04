import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ss_access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const challengeApi = {
  list: () => api.get('/challenges'),
  create: (payload: unknown) => api.post('/challenges', payload),
  updateStatus: (id: string | number, status: string) => api.patch(`/challenges/${id}/status`, { status }),
}
export const solutionApi = {
  list: () => api.get('/solutions'),
  submit: (payload: unknown) => api.post('/solutions', payload),
  review: (id: string, payload: unknown) => api.patch(`/solutions/${id}/review`, payload),
}
