import { profile } from '../content/site'
import type { Route } from '../lib/router'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
]

export function Header({ route }: { route: Route }) {
  const onBlog = route.page === 'blog' || route.page === 'post'
  return (
    <header className="site-header">
      <nav className="container nav">
        <a className="brand" href="#/">
          {profile.name}
        </a>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#/${s.id}`} aria-current={route.page === 'home' && route.section === s.id ? 'true' : undefined}>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#/blog" aria-current={onBlog ? 'page' : undefined}>
              Blog
            </a>
          </li>
          <li>
            <a className="nav-cv" href={profile.cvHref} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
