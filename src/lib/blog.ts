import { marked } from 'marked'

export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  html: string
  readingMinutes: number
}

// Every .md file in src/content/blog becomes a post; the filename is the URL slug.
const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
  }
  return { data, body: raw.slice(match[0].length) }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    const { data, body } = parseFrontmatter(raw)
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      summary: data.summary ?? '',
      tags: data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      html: marked.parse(body, { async: false }),
      readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
    }
  })
  .filter((p) => p.date)
  .sort((a, b) => b.date.localeCompare(a.date))

export function formatDate(iso: string): string {
  // Parse as a local date so "2026-09-24" doesn't shift a day in US time zones.
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
