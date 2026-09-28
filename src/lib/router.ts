import { useEffect, useState } from 'react'

// Minimal hash router. Hash URLs work on any static host (GitHub Pages, Netlify, etc.)
// without server rewrite rules.
//   #/            home
//   #/projects    home, scrolled to a section
//   #/blog        blog index
//   #/blog/slug   single post
export type Route =
  | { page: 'home'; section?: string }
  | { page: 'blog' }
  | { page: 'post'; slug: string }

function parse(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  if (parts[0] === 'blog') {
    return parts[1] ? { page: 'post', slug: decodeURIComponent(parts[1]) } : { page: 'blog' }
  }
  return { page: 'home', section: parts[0] }
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
