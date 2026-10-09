import React, { useEffect, useRef, useState } from 'react'

const hiddenStyles = {
  up: 'translate-y-12',
  left: '-translate-x-16',
  right: 'translate-x-16',
  zoom: 'scale-90',
}

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        show ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${hiddenStyles[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal