import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Bell, LayoutDashboard, LogOut, ShieldCheck, Users, Wrench, FileCheck2, UserCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { Logo } from './Logo'

const nav = [
  ['Dashboard','/dashboard',LayoutDashboard], ['Challenges','/challenges',Wrench], ['Teams','/teams',Users], ['Solutions','/solutions',FileCheck2], ['Notifications','/notifications',Bell], ['Profile','/profile',UserCircle]
] as const
export function Layout() {
  const { user, logout } = useAuth(); const navigate = useNavigate()
  return <div className="app-shell">
    <aside className="sidebar"><Link to="/" className="brand"><Logo size={42}/><span><b>SolveSphere</b><small>Civic collaboration</small></span></Link>
      <nav>{nav.map(([label,to,Icon]) => <NavLink key={to} to={to}>{<Icon size={17}/>}<span>{label}</span></NavLink>)}{user?.role === 'Admin' && <NavLink to="/admin"><ShieldCheck size={17}/><span>Admin</span></NavLink>}</nav>
      <button className="logout" onClick={()=>{logout();navigate('/')}}><LogOut size={16}/> Sign out</button>
    </aside><main className="main"><header className="topbar"><div className="user"><span>{user?.name}</span><small>{user?.role}</small></div></header><Outlet/></main>
  </div>
}
