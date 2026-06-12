import { socials } from '../data/navigation'
import './Contact.css'

/**
 * Contact — reference:
 *  - h3 (#b0b24cd): "Available for select freelance opportunities", 28px
 *  - email link (#59aa4c0): Roboto Mono 20px, #fff
 *  - social links: Github / LinkedIn / Instagram / Messenger
 */
const EMAIL = 'cinderellka777@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <p className="section-label" data-aos="fade-up">
          // contact
        </p>
        <h3 className="contact-heading" data-aos="fade-up">
          Available for WordPress &amp; Webflow opportunities
        </h3>

        <a className="contact-email" href={`mailto:${EMAIL}`} data-aos="fade-up">
          {EMAIL}
        </a>

        <ul className="contact-socials" data-aos="fade-up">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-brand">Daria Sobko</span>
          <span className="footer-copy">© {new Date().getFullYear()} — All rights reserved.</span>
        </div>
      </footer>
    </section>
  )
}
