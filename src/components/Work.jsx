import { useMemo, useState } from 'react'
import { projects, categories, workIntro, featuredProject } from '../data/projects'
import ProjectCard from './ProjectCard'
import rightArrow from '../assets/right-side-arrow.png'
import './Work.css'

/**
 * Work — reference layout:
 *  TOP: two columns (45% / 55%)
 *    - left: "My Work" heading (Poppins 105px/600, left) + intro (Roboto Mono 20px/500)
 *    - right (bottom-aligned): featured project — arrow (124px) + "Featured Project"
 *      label (22px) + project name (Roboto Mono 30px/600) + "View Project" button
 *      (bg #9b37ff, radius 3px, padding 15px 24px) over a media preview
 *  BOTTOM: filter bar (.portfolio-sorting) + grid (filtered with useState, no Isotope)
 */
export default function Work() {
  const [active, setActive] = useState('all')

  const counts = useMemo(() => {
    const c = { all: projects.length }
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1
    return c
  }, [])

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  const pad = (n) => String(n || 0).padStart(2, '0')

  return (
    <section id="work" className="section work">
      <div className="container work-container">
        {/* ---- Featured Project (top) ---- */}
        <div className="work-top">
          <div className="work-intro" data-aos="fade-up">
            <h2 className="work-heading">
              My <br />
              Work
            </h2>
            <p className="work-intro-text">{workIntro}</p>
          </div>

          <div className="work-featured" data-aos="fade-up">
            <div className="work-featured-media">
              <img
                src={featuredProject.media}
                alt={featuredProject.name}
                width={featuredProject.mediaW}
                height={featuredProject.mediaH}
                loading="lazy"
              />
            </div>
            <div className="work-featured-caption">
              <img className="work-featured-arrow" src={rightArrow} alt="" aria-hidden="true" />
              <p className="work-featured-label">{featuredProject.label}</p>
              <h3 className="work-featured-name">{featuredProject.name}</h3>
              {featuredProject.tags && (
                <ul className="work-featured-tags">
                  {featuredProject.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              <a
                className="work-featured-btn"
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* ---- Filter bar ---- */}
        <div className="portfolio-sorting" data-aos="fade-up">
          <span className="sorting-label">Filter by</span>
          <ul className="sorting-list">
            {categories.map((cat) => (
              <li key={cat.id} className="sorting-item">
                <button
                  className={`sorting-btn${active === cat.id ? ' is-active' : ''}`}
                  onClick={() => setActive(cat.id)}
                >
                  <span className="name">{cat.label}</span>
                  <span className="num">{pad(counts[cat.id])}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Grid ---- */}
        <div className="portfolio-grid">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
