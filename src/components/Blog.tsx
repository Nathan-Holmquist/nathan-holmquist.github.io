import { formatDate, posts, type Post } from '../lib/blog'
import { CollapsibleSection } from './CollapsibleSection'

function PostList({ items }: { items: Post[] }) {
  if (items.length === 0) return <p className="muted">No posts yet. Check back soon.</p>
  return (
    <ul className="post-list">
      {items.map((p) => (
        <li key={p.slug}>
          <a href={`#/blog/${p.slug}`} className="post-link">
            <span className="post-title">{p.title}</span>
            <span className="muted small">
              {formatDate(p.date)} · {p.readingMinutes} min read
            </span>
            {p.summary && <span className="post-summary">{p.summary}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function LatestPosts() {
  return (
    <CollapsibleSection id="blog" title="Latest writing">
      <PostList items={posts.slice(0, 3)} />
      {posts.length > 3 && <a href="#/blog">All posts →</a>}
    </CollapsibleSection>
  )
}

export function BlogIndex() {
  return (
    <section className="section">
      <h1 className="page-title">Blog</h1>
      <p className="muted">Notes on projects, research, and whatever else I'm learning.</p>
      <PostList items={posts} />
    </section>
  )
}

export function BlogPost({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    return (
      <section className="section">
        <h1 className="page-title">Post not found</h1>
        <a href="#/blog">← Back to all posts</a>
      </section>
    )
  }
  return (
    <article className="section post">
      <a href="#/blog" className="small">
        ← All posts
      </a>
      <h1 className="page-title">{post.title}</h1>
      <p className="muted small">
        {formatDate(post.date)} · {post.readingMinutes} min read
      </p>
      {post.tags.length > 0 && (
        <ul className="tags">
          {post.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      )}
      {/* Post HTML comes from Markdown files in this repo, not from user input. */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
