# Nathan Holmquist — personal site

React + TypeScript + Vite. Sections: About (bio, education, research interests), Projects, Experience, and a Markdown blog.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

| What | Where |
| --- | --- |
| Name, bio, links, education, interests, projects, jobs | `src/content/site.ts` |
| Blog posts | `src/content/blog/*.md` |
| Headshot / project screenshots | Put images in `public/` and set `profile.headshot` or a project's `image` (e.g. `'/headshot.jpg'`) |
| CV | Drop your PDF at `public/cv.pdf` |

Anywhere an image hasn't been set, a striped placeholder box is shown.

### Writing a blog post

Create `src/content/blog/my-post.md` — the filename becomes the URL (`#/blog/my-post`):

```md
---
title: My post title
date: 2026-10-01
summary: One line shown in the post list.
tags: research, ml
---

Post body in normal Markdown.
```

Posts are sorted newest-first; the three latest also appear on the home page.

## Styling

The site uses a dark, monospace "terminal" look. All styles are in `src/index.css`; the colors and fonts are
CSS variables at the top of that file, so changing e.g. `--accent` recolors the whole site.

## Deploying

The site uses hash URLs (`#/blog`), so it works on any static host with no server config — GitHub Pages,
Netlify, Vercel, or Cloudflare Pages. Build with `npm run build` and publish the `dist/` folder.
