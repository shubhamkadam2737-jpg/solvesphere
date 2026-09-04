import type { Challenge, Solution, Team, User } from '../types'

export const demoUser: User = { id: 'demo-user', name: 'SolveSphere User', email: 'demo@solvesphere.app', role: 'Student' }
export const challenges: Challenge[] = [
  { id: 1, title: 'Overflowing waste bins near college zones', category: 'Waste Management', location: 'Kharadi, Pune', status: 'In progress', priority: 'High', readiness: 72, teams: 4, owner: 'Aarav Kulkarni', evidence: 2 },
  { id: 2, title: 'Safer pedestrian crossing around school', category: 'Public Infrastructure', location: 'Hadapsar, Pune', status: 'Open', priority: 'Critical', readiness: 38, teams: 7, owner: 'Neha Patil', evidence: 5 },
  { id: 3, title: 'After-school digital literacy gap', category: 'Education', location: 'Pimpri-Chinchwad', status: 'Under review', priority: 'Medium', readiness: 61, teams: 3, owner: 'Riya Shah', evidence: 3 },
  { id: 4, title: 'Water leakage reporting and response', category: 'Environment', location: 'Wagholi, Pune', status: 'Open', priority: 'High', readiness: 44, teams: 5, owner: 'Kabir More', evidence: 4 },
  { id: 5, title: 'PHC appointment accessibility', category: 'Healthcare', location: 'Viman Nagar, Pune', status: 'Submitted', priority: 'Critical', readiness: 29, teams: 2, owner: 'Meera Joshi', evidence: 6 },
]
export const teams: Team[] = [
  { id: 'greenloop', name: 'GreenLoop', challenge: challenges[0].title, members: 4, status: 'Active' },
  { id: 'safecross', name: 'SafeCross', challenge: challenges[1].title, members: 7, status: 'Active' },
]
export const solutions: Solution[] = [
  { id: 's1', title: 'Smart Bin Route Optimizer', team: 'GreenLoop', status: 'Mentor review', feedback: 'Add before/after collection metrics.' },
  { id: 's2', title: 'SafeCross Vision Alerts', team: 'SafeCross', status: 'Approved', feedback: 'Pilot ready.' },
  { id: 's3', title: 'LearnBridge Offline Lab', team: 'LearnBridge', status: 'Changes requested', feedback: 'Improve evidence and teacher dashboard.' },
]
