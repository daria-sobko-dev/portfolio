import { experience } from '../data/experience'
import { education } from '../data/education'
import { certificates } from '../data/certificates'
import Accordion from './Accordion'
import './Experience.css'

/**
 * Experience — split into two logical blocks:
 *  - Professional Experience (work history)
 *  - Education (degrees) — kept separate from jobs.
 * Both reuse the Accordion (one item open per group).
 */
export default function Experience() {
  const toItems = (list) =>
    list.map((entry) => ({
      id: entry.id,
      title: `${entry.role} @ ${entry.company}`,
      meta: entry.period,
      content: <p>{entry.description}</p>,
    }))

  return (
    <section id="experience" className="section experience">
      <div className="container experience-container">
        <p className="section-label" data-aos="fade-up">
          // experience
        </p>
        <h2 className="section-title" data-aos="fade-up">
          Professional <span className="accent">Experience</span>
        </h2>

        <Accordion items={toItems(experience)} defaultOpen={0} />

        <h3 className="experience-subheading" data-aos="fade-up">
          // education
        </h3>
        <Accordion items={toItems(education)} defaultOpen={0} />

        <h3 className="experience-subheading" data-aos="fade-up">
          // certificates
        </h3>
        <ul className="cert-list" data-aos="fade-up">
          {certificates.map((c) => (
            <li className="cert-item" key={c.id}>
              <div className="cert-link">
                <span className="cert-name">{c.name}</span>
                <span className="cert-meta">
                  {c.issuer}
                  {c.year ? ` · ${c.year}` : ''}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
