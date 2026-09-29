import { useEffect } from 'react'
import { About } from './components/About'
import { BlogIndex, BlogPost } from './components/Blog'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { profile } from './content/site'
import { useRoute } from './lib/router'

function App() {
  const route = useRoute()

  // Scroll to the requested section (opening it if collapsed), or to the top when changing pages.
  useEffect(() => {
    const target = route.page === 'home' && route.section ? document.getElementById(route.section) : null
    if (target instanceof HTMLDetailsElement) target.open = true
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0 })
  }, [route])

  return (
    <>
      <Header route={route} />
      <main className="container">
        {route.page === 'home' && (
          <>
            <About />
            <Projects />
            <Experience />
            {/* Hidden for now. To bring back, re-add LatestPosts to the Blog import above. */}
            {/* <LatestPosts /> */}
          </>
        )}
        {route.page === 'blog' && <BlogIndex />}
        {route.page === 'post' && <BlogPost slug={route.slug} />}
      </main>
      <footer className="site-footer container">
        <span className="footer-links">
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} target={l.kind === 'email' ? undefined : '_blank'} rel="noreferrer">
              {l.label}
            </a>
          ))}
        </span>
      </footer>
    </>
  )
}

export default App
