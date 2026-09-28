import { education, profile } from '../content/site'
import { Icon } from './Icon'
import { Placeholder } from './Placeholder'

export function About() {
  return (
    <section id="about" className="section hero">
      <Placeholder className="headshot" label="Headshot" src={profile.headshot} alt={profile.name} />
      <div className="hero-body">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        {profile.bio.map((p) => (
          <p key={p} className="bio">
            {p}
          </p>
        ))}
        <div className="links">
          {profile.links.map((l) => (
            <a key={l.href} className="btn" href={l.href} target={l.kind === 'email' ? undefined : '_blank'} rel="noreferrer">
              <Icon name={l.kind} /> {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href={profile.cvHref} target="_blank" rel="noreferrer">
            <Icon name="file" /> Download CV
          </a>
        </div>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="subheading">Education</h2>
          {education.map((e) => (
            <div key={e.school} className="edu">
              <div className="row">
                <strong>{e.school}</strong>
                <span className="muted">{e.dates}</span>
              </div>
              <div>{e.degree}</div>
              {e.details?.map((d) => (
                <div key={d} className="muted small">
                  {d}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
