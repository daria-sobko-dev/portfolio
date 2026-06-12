import { stack } from '../data/stack'
import './Stack.css'

// Resolve local Simple Icons SVGs (src/assets/stack/<slug>.svg) → bundled URLs
const icons = import.meta.glob('../assets/stack/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})
const iconUrl = (slug) => icons[`../assets/stack/${slug}.svg`]

/**
 * My Stack — category cards (2-up), each with a 4-up grid of tech icons.
 * Adapted from the reference (Tailwind) to our plain CSS / dark theme / cyan accent.
 */
export default function Stack() {
  return (
    <section id="stack" className="section stack">
      <div className="container">
        <div className="stack-head" data-aos="fade-up">
          <p className="section-label">// stack</p>
          <h2 className="section-title">
            My <span className="accent">Stack</span>
          </h2>
          <p className="stack-subtitle">
            A curated selection of technologies I use to build fast, reliable products.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((group, i) => (
            <div className="stack-card" key={group.category} data-aos="fade-up" data-aos-delay={i * 80}>
              <h3 className="stack-category">{group.category}</h3>
              <div className="stack-items">
                {group.items.map((item) =>
                  item.icon ? (
                    <div className="stack-item" key={item.name} data-cursor-hover>
                      <div className="stack-icon">
                        <img src={iconUrl(item.icon)} alt={item.name} loading="lazy" />
                      </div>
                      <span className="stack-name">{item.name}</span>
                    </div>
                  ) : (
                    <div className="stack-item stack-item--text" key={item.name} data-cursor-hover>
                      <span className="stack-text">{item.name}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
