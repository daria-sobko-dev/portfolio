import { expertise } from '../data/expertise'
import helloWorldCode from '../assets/hello-world-code.png'
import './Expertise.css'

/* Simple line icons (equivalents of the reference monitor / react / flutter glyphs) */
const ICONS = {
  monitor: (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="36" height="26" rx="3" />
      <path d="M16 38h10M21 31v7M14 24l-4-5 4-5M28 14l4 5-4 5" />
    </svg>
  ),
  react: (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="#fff" strokeWidth="2">
      <circle cx="21" cy="21" r="3" fill="#fff" stroke="none" />
      <ellipse cx="21" cy="21" rx="18" ry="7" />
      <ellipse cx="21" cy="21" rx="18" ry="7" transform="rotate(60 21 21)" />
      <ellipse cx="21" cy="21" rx="18" ry="7" transform="rotate(120 21 21)" />
    </svg>
  ),
  flutter: (
    <svg width="40" height="44" viewBox="0 0 40 44" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
      <path d="M27 2 7 22l6 6 26-26zM27 22 16 33l6 6 17-17z" />
    </svg>
  ),
}

/**
 * Expertise — reference values:
 *  - section title (#ef9a041): Poppins 75px/600, lh 1.4, mb 40px, centered → .section-title
 *  - container (#b87c4d7): max-width 1100px, 4 columns (col-25), no gap
 *  - card: ohio_icon_box .with-left-icon → padding-left 70px, icon absolute top-left
 *  - title (#ee4e514): Poppins 26px/600, lh 1.2; first word wrapped in
 *    .chonky-underline-{megenta|blue|yellow} (highlighter behind the word)
 *  - description (#622ad3f): .code-editor-style — vertical gutter line + padding-left 35px
 */
export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="container expertise-container">
        <p className="section-label" data-aos="fade-up">
          // expertise
        </p>
        <h2 className="section-title" data-aos="fade-up">
          My <span className="accent">Expertise</span>
        </h2>

        <div className="expertise-grid">
          {expertise.map((card, i) => (
            <div className="expertise-col" key={card.id} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="icon-box with-left-icon">
                <div className="icon-box-headline">
                  <div className="icon-box-icon">{ICONS[card.icon]}</div>
                  <h5 className="icon-box-title">
                    <span className={`chonky-underline chonky-underline-${card.underline}`}>
                      {card.titleAccent}
                    </span>
                    <br />
                    {card.titleRest}
                  </h5>
                </div>
              </div>
              <div className="code-editor-style">
                <p className="code-editor-text">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* decorative faint code image (reference #7fc38e6: width 582px, opacity .2).
            data-aos lives on the wrapper so AOS's opacity:1 doesn't override the
            image's own opacity:.2 — wrapper fades in, image stays faint. */}
        <div className="expertise-code-wrap" data-aos="fade-up">
          <img
            className="expertise-code-img"
            src={helloWorldCode}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
