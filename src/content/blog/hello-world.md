---
title: Hello, world
date: 2026-09-24
summary: Why I built this site and what I plan to write about.
tags: meta
---

This is the first post on my new site. I built it with React, TypeScript, and Vite, and I'm planning to use this blog to write about:

- Projects I'm working on and what I learn from them
- Papers I'm reading
- Notes from the grad school application process

## Adding a post

Each post is a Markdown file in `src/content/blog/`. The block at the top (the *frontmatter*) sets the title, date, summary, and tags. Everything below it is the post body, and it supports normal Markdown:

```ts
const greeting = 'hello, world'
console.log(greeting)
```

> Delete this post or replace it with your own once you've written your first real post.
