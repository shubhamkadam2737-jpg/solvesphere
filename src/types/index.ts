export type UserRole = 'Citizen' | 'Student' | 'Mentor' | 'Admin'
export type ChallengeStatus = 'Open' | 'Under review' | 'In progress' | 'Submitted' | 'Resolved' | 'Denied'
export type Priority = 'Low' | 'Medium' | 'High' | 'Critical'

export interface User { id: string; name: string; email: string; role: UserRole; avatarUrl?: string }
export interface Challenge { id: number; title: string; category: string; location: string; status: ChallengeStatus; priority: Priority; readiness: number; teams: number; owner: string; evidence: number; description?: string }
export interface Team { id: string; name: string; challenge: string; members: number; status: 'Active' | 'Inactive' }
export interface Solution { id: string; title: string; team: string; status: 'Draft' | 'Mentor review' | 'Approved' | 'Changes requested'; feedback: string }
export interface AppState { user: User; challenges: Challenge[]; teams: Team[]; solutions: Solution[] }
