'use client'

import { useState, useEffect } from 'react'

const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80&fit=crop',
    headline: 'Waxology Studio',
    sub: 'Got Hair? Get Waxed!',
  },
  {
    image: 'https://images.unsplash.com/photo-1718720410649-7524fcb0f0a5?w=1600&q=80&fit=crop',
    headline: 'Smooth Skin Starts Here',
    sub: 'Master Cosmetologist · 10+ Years Experience',
  },
  {
    image: 'https://images.unsplash.com/photo-1645477120165-a9f27bcb19d2?w=1600&q=80&fit=crop',
    headline: 'Your Confidence, Unveiled',
    sub: '113+ Five-Star Reviews in Warner Robins',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent(prev => (prev + 1) % slides.length)

  return (
    <section style={{ position: 'relative', width: '100%', height: '650px', overflow: 'hidden' }}>
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(107,63,160,0.4) 0%, rgba(233,30,140,0.25) 100%)',
          }} />
        </div>
      ))}

      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '2rem',
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(4px)',
          color: 'white',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          marginBottom: '1.25rem',
          fontFamily: 'sans-serif',
          border: '1px solid rgba(255,255,255,0.3)',
        }}>
          Warner Robins, GA · By Appointment Only
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'white',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
          textShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}>
          {slides[current].headline}
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '0.5rem',
          fontStyle: 'italic',
          textShadow: '0 1px 6px rgba(0,0,0,0.2)',
        }}>
          {slides[current].sub}
        </p>

        <div style={{ color: '#fbbf24', fontSize: '1.2rem', margin: '0.75rem 0 0.25rem' }}>★★★★★</div>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'sans-serif', marginBottom: '1.75rem' }}>
          113 Reviews · Best Waxing in Warner Robins
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
            background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)',
            color: 'white', padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif',
            fontSize: '1rem', boxShadow: '0 4px 15px rgba(233,30,140,0.4)',
          }}>
            📅 Book Appointment
          </a>
          <a href="#services" style={{
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)',
            color: 'white', border: '2px solid rgba(255,255,255,0.6)',
            padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif', fontSize: '1rem',
          }}>
            View Services
          </a>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'sans-serif' }}>
          📍 154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088
        </p>
      </div>

      <button onClick={prev} style={{
        position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)',
        color: 'white', borderRadius: '50%', width: '42px', height: '42px',
        fontSize: '1.1rem', cursor: 'pointer', zIndex: 3, backdropFilter: 'blur(4px)',
      }}>‹</button>
      <button onClick={next} style={{
        position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)',
        color: 'white', borderRadius: '50%', width: '42px', height: '42px',
        fontSize: '1.1rem', cursor: 'pointer', zIndex: 3, backdropFilter: 'blur(4px)',
      }}>›</button>

      <div style={{
        position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '0.5rem', zIndex: 3,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? '24px' : '8px', height: '8px',
            borderRadius: '4px',
            background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.3s ease', padding: 0,
          }} />
        ))}
      </div>
    </section>
  )
}