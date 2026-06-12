import { useLayoutEffect, useRef, useState } from 'react'
import './Accordion.css'

/**
 * Accordion — one item open at a time (reference class: .accordionItem.current).
 * `items`: [{ id, title, meta, content }]. `defaultOpen`: index open initially.
 *
 * Open/close is a classic max-height animation measured from the content's
 * scrollHeight — reliable across browsers (no grid-rows / height:auto quirks).
 */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [openId, setOpenId] = useState(items[defaultOpen]?.id ?? null)
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id))

  return (
    <div className="ohio-accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  )
}

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)

  // measure content and animate max-height on open/close (and on resize while open)
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return

    const apply = () => setMaxHeight(isOpen ? el.scrollHeight : 0)
    apply()

    if (!isOpen) return
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [isOpen, item.content])

  // NOTE: data-aos lives on a STATIC-className wrapper. AOS mutates the DOM
  // class list directly (adds .aos-animate); if React owned that element's
  // className it would overwrite .aos-animate on re-render and the item would
  // drop back to opacity:0. The toggling `current` class stays on an inner node.
  return (
    <div className="accordionItem-aos" data-aos="fade-up">
      <div className={`accordionItem${isOpen ? ' current' : ''}`}>
        <button
          className="accordionItem_title"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          <span className="accordionItem_control" aria-hidden="true" />
          <span className="accordionItem_heading">
            <span className="accordionItem_role">{item.title}</span>
            {item.meta && <span className="accordionItem_meta">{item.meta}</span>}
          </span>
        </button>

        <div
          className="accordionItem_content"
          ref={contentRef}
          style={{ maxHeight: `${maxHeight}px` }}
        >
          <div className="accordionItem_wrap">{item.content}</div>
        </div>
      </div>
    </div>
  )
}
