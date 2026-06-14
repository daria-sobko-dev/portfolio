import './ProjectCard.css'

/**
 * ProjectCard — reference (.portfolio-item):
 *  - image: border-radius 5px, overflow hidden
 *  - hover: image scale + overlay (description + tech tags + "Show project")
 *  - headline (.portfolio-item-headline.title) + category (.category)
 *
 * `size` drives the masonry span (reference double-width items): wide / tall / big.
 * Mount animation is CSS (not AOS) so re-filtered cards never get stuck invisible.
 */
export default function ProjectCard({ project }) {
  const { title, image, tag, url, size, description, tags, width, height } = project
  const sizeClass = size ? ` project-card--${size}` : ''
  return (
    <article className={`project-card${sizeClass}`} data-cursor-hover>
      <a className="project-card-link" href={url} target="_blank" rel="noreferrer" aria-label={title}>
        <div className="project-card-image">
          <img src={image} alt={title} width={width} height={height} loading="lazy" />
          <div className="project-card-overlay">
            <div className="project-card-overlay-body">
              {description && <p className="project-card-desc">{description}</p>}
              {tags && tags.length > 0 && (
                <ul className="project-card-tags">
                  {tags.map((t) => (
                    <li key={t} className="project-card-tag">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <span className="project-card-show">Show project</span>
          </div>
        </div>
        <div className="project-card-details">
          <h3 className="project-card-headline">{title}</h3>
          <div className="category-holder">
            <span className="category">{tag}</span>
          </div>
        </div>
      </a>
    </article>
  )
}
