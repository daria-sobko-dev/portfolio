import { TypeAnimation } from 'react-type-animation'
import Lottie from 'lottie-react'
import scrollArrow from '../assets/scroll-arrow.json'
import heroCover from '../assets/hero-cover.jpg'
import './Hero.css'

/**
 * Hero — reference values:
 *  - section #4307f1c: height 90vh (85vh ≤1024), align-items center
 *  - H1 #a5ab7d5: 10vw uppercase, letter-spacing 2.2px, text-shadow (13vw ≤1024 / 46px ≤767)
 *  - subtitle #81270ae: 22px uppercase, letter-spacing 2.2px, margin-top 23px (20px ≤767)
 *  - lottie scroll arrow → #expertise (loop), placed at the bottom of the hero
 *
 * Reference H1 is static; per request the subtitle is typed (react-type-animation).
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{ '--hero-cover': `url(${heroCover})` }}
    >
      {/* reference: .elementor-background-overlay — height 102% so the gradient
          bleeds into the next section, smoothing the hero→section transition */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* reference #circle-main (.circle.yel): glowing neon orb, absolute
          top 17% / left 56%, gentle HappyAddons floating-fx wobble */}
      <div className="hero-orb" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-kicker">Daria Sobko</p>

        <h1 className="hero-title">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'WordPress Developer',
              2000,
              'Webflow Developer',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
          />
        </h1>

        <p className="hero-tagline">
          Custom themes, CMS sites &amp; pixel-perfect responsive web.
        </p>
      </div>

      <a href="#expertise" className="hero-scroll" aria-label="Scroll to expertise">
        <Lottie animationData={scrollArrow} loop autoplay className="hero-scroll-lottie" />
      </a>
    </section>
  )
}
