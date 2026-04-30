'use client'

const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

export default function HeroNeon() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '650px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
    }}>
      {/* Hero background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        animation: 'neonFlicker 4s infinite alternate',
      }} />

      {/* Dark overlay at bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.9) 100%)',
      }} />

      {/* Content pinned to bottom */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '0 2rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
        <div style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '0.4rem' }}>★★★★★</div>
        <p style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'sans-serif',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
        }}>
          113 Reviews · Best Waxing in Warner Robins
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
            background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)',
            color: 'white', padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif',
            fontSize: '1rem', boxShadow: '0 0 20px rgba(233,30,140,0.5)',
          }}>
            📅 Book Appointment
          </a>
          <a href="#services" style={{
            background: 'transparent',
            color: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,105,180,0.6)',
            padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif', fontSize: '1rem',
          }}>
            View Services
          </a>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
          📍 154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088
        </p>
      </div>

      <style>{`
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0.92; }
        }
      `}</style>
    </section>
  )
}