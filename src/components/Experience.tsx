import { experience } from '../content/site'
import { CollapsibleSection } from './CollapsibleSection'

export function Experience() {
  return (
    <CollapsibleSection id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.role}-${job.company}`} className="job">
            <div className="row">
              <h3>{job.role}</h3>
              <span className="muted small">{job.dates}</span>
            </div>
            <p className="job-company">
              {job.company} <span className="muted">· {job.location}</span>
            </p>
            <ul className="highlights">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {job.tech && (
              <ul className="tags">
                {job.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </CollapsibleSection>
  )
}
