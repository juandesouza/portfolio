import { useRef, useState, useCallback, useEffect } from 'react'
import type { Project } from '../data/projects'
import './Carousel3D.css'

const SWIPE_THRESHOLD = 50
const GESTURE_LOCK = 14

interface CarouselProps {
  projects: Project[]
}

export default function Carousel({ projects }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const startX = useRef(0)
  const startY = useRef(0)
  const dragOffsetRef = useRef(0)
  const pointerDownRef = useRef(false)
  const gesture = useRef<'pending' | 'horizontal' | 'vertical'>('pending')
  const viewportRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(projects.length - 1, index))
      if (next === activeIndex) return
      setIsAnimating(true)
      setActiveIndex(next)
      setDragOffset(0)
    },
    [activeIndex, projects.length],
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isAnimating) return
    pointerDownRef.current = true
    gesture.current = 'pending'
    startX.current = e.clientX
    startY.current = e.clientY
    dragOffsetRef.current = 0
    setIsDragging(false)
    setDragOffset(0)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointerDownRef.current) return

    const dx = e.clientX - startX.current
    const dy = e.clientY - startY.current

    if (gesture.current === 'pending') {
      if (Math.abs(dx) < GESTURE_LOCK && Math.abs(dy) < GESTURE_LOCK) return

      if (Math.abs(dy) > Math.abs(dx)) {
        gesture.current = 'vertical'
        return
      }

      gesture.current = 'horizontal'
      setIsDragging(true)
      viewportRef.current?.setPointerCapture(e.pointerId)
    }

    if (gesture.current !== 'horizontal') return

    const atStart = activeIndex === 0 && dx > 0
    const atEnd = activeIndex === projects.length - 1 && dx < 0
    const resistance = atStart || atEnd ? 0.35 : 1
    const nextOffset = dx * resistance
    dragOffsetRef.current = nextOffset
    setDragOffset(nextOffset)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerDownRef.current) return

    pointerDownRef.current = false

    if (viewportRef.current?.hasPointerCapture(e.pointerId)) {
      viewportRef.current.releasePointerCapture(e.pointerId)
    }

    if (
      gesture.current === 'horizontal' &&
      Math.abs(dragOffsetRef.current) > SWIPE_THRESHOLD
    ) {
      if (dragOffsetRef.current < 0) goNext()
      else goPrev()
    } else {
      dragOffsetRef.current = 0
      setDragOffset(0)
    }

    setIsDragging(false)
    gesture.current = 'pending'
  }

  useEffect(() => {
    if (!isAnimating) return
    const timer = window.setTimeout(() => setIsAnimating(false), 450)
    return () => window.clearTimeout(timer)
  }, [isAnimating, activeIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  const openProject = (url: string) => {
    if (Math.abs(dragOffsetRef.current) > 5 || isDragging) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="carousel-section">
      <div className="carousel-inner">
        <div
          ref={viewportRef}
          className="carousel-viewport"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="carousel-dots" aria-hidden="true">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
                aria-label={`Go to ${p.name}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div
            className={`carousel-track${isDragging ? ' dragging' : ''}${isAnimating ? ' animating' : ''}`}
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
            }}
          >
            {projects.map((project, i) => {
              const offset = i - activeIndex + dragOffset / (viewportRef.current?.offsetWidth ?? 1)
              const tilt = Math.max(-1, Math.min(1, offset)) * -14
              const scale = 1 - Math.min(Math.abs(offset), 1) * 0.06
              const opacity = 1 - Math.min(Math.abs(offset), 1) * 0.45

              return (
                <article
                  key={project.id}
                  className={`carousel-slide${i === activeIndex ? ' active' : ''}`}
                  aria-hidden={i !== activeIndex}
                >
                  <div className="slide-stage">
                    <div
                      className="slide-frame"
                      style={{
                        transform: `perspective(900px) rotateY(${tilt}deg) scale(${scale})`,
                        opacity,
                      }}
                    >
                      <button
                        type="button"
                        className="slide-image-btn"
                        onClick={() => {
                          if (Math.abs(dragOffsetRef.current) > 5) return
                          openProject(project.url)
                        }}
                        aria-label={`Open ${project.name} live app`}
                      >
                        <img
                          src={project.screenshot}
                          alt={`${project.name} screenshot`}
                          draggable={false}
                        />
                        <span className="slide-open-hint">Tap to open</span>
                      </button>
                    </div>
                  </div>

                  <div className="card-label">
                    <span className="card-name">{project.name}</span>
                    <div className="card-tech">
                      <span>
                        <strong>FE</strong> {project.tech.frontend}
                      </span>
                      <span>
                        <strong>BE</strong> {project.tech.backend}
                      </span>
                      <span>
                        <strong>DB</strong> {project.tech.db}
                      </span>
                      <span>
                        <strong>Mobile</strong> {project.tech.mobile}
                      </span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            onClick={goNext}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <p className="carousel-hint carousel-hint--desktop">Swipe or use arrows to browse</p>
        <p className="carousel-hint carousel-hint--mobile">
          Swipe sideways to browse · scroll down for more
        </p>
      </div>

      <a href="#about" className="carousel-scroll-cue" aria-label="Scroll to about section">
        <span className="carousel-scroll-cue-icon" />
      </a>
    </section>
  )
}
