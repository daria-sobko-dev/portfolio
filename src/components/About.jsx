import { about } from '../data/about'
import './About.css'

/**
 * About — photo + bio + quick facts + Download CV button.
 * Placed right after Hero (who I am → what I do).
 */
export default function About() {
  return (
    <section id="about" className="section about">
      <div className={`container about-inner${about.showPhoto ? '' : ' about-inner--no-photo'}`}>
        {about.showPhoto && (
          <div className="about-photo" data-aos="fade-up">
            <img src={about.photo} alt="Daria Sobko" loading="lazy" />
          </div>
        )}

        <div className="about-content" data-aos="fade-up">
          <p className="section-label">// about</p>
          <h2 className="section-title about-title">
            About <span className="accent">me</span>
          </h2>

          {about.bio.map((p, i) => (
            <p className="about-bio" key={i}>
              {p}
            </p>
          ))}

          <ul className="about-details">
            {about.details.map((d) => (
              <li key={d.label}>
                <span className="about-detail-label">{d.label}</span>
                <span className="about-detail-value">{d.value}</span>
              </li>
            ))}
          </ul>

          <a className="about-cv" href={about.cv} download="Daria-Sobko-CV.pdf">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
