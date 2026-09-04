import { Link } from 'react-router-dom'
export function NotFound(){return <section className="page"><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="btn btn-primary" to="/dashboard">Go to dashboard</Link></section>}
