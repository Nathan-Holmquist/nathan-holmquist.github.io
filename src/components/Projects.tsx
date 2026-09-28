import { projects } from '../content/site'
import { CollapsibleSection } from './CollapsibleSection'
import { Icon } from './Icon'
import { Placeholder } from './Placeholder'

export function Projects() {
  return (
    <CollapsibleSection id="projects" title="Projects">
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            <Placeholder className="project-image" label={`${p.title} screenshot`} src={p.image} alt={p.title} />
            <div className="card-body">
              <div className="row">
                <h3>{p.title}</h3>
                <span className={`status ${p.status === 'In progress' ? 'status-active' : ''}`}>{p.status}</span>
              </div>
              <p className="muted small">{p.dates}</p>
              <p>{p.summary}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              {p.links && (
                <div className="card-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <Icon name="external" size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </CollapsibleSection>
  )
}
