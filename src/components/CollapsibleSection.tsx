import type { ReactNode } from 'react'

// A home-page section that collapses down to its heading. Starts closed; App opens it
// when the section is linked to from the nav.
export function CollapsibleSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <details id={id} className="section collapsible">
      <summary>
        <h2 className="section-title">{title}</h2>
      </summary>
      {children}
    </details>
  )
}
