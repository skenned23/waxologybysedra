'use client'

const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

export default function HeroNeon() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden',
      display: 'flex',
      backgroundColor: '#0a0a0a',
    }}>
      {/* Left panel - neon sign */}
      <div style={{
        width: '50%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/hero.jpg"
          alt="Waxology Studio"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            display: 'block',
            animation: 'neonFlicker 4s infinite alternate',
          }}
        />
      </div>

      {/* Right panel - Sedra waxing */}
      <div style={{
        width: '50%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/hero2.png"
          alt="Professional waxing service"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition:objectPosition: 'center 35%', 'center 60%',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)',
        }} />
      </div>

      {/* Content overlay */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: 0, right: 0,
        zIndex: 2,
        textAlign: 'center',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '0.4rem' }}>★★★★★</div>
        <p style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.9)',
          fontFamily: 'sans-serif',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
          textShadow: '0 1px 4px rgba(0,0,0,0.8)',
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
            background: 'rgba(0,0,0,0.4)',
            color: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,105,180,0.6)',
            padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif', fontSize: '1rem',
          }}>
            View Services
          </a>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'sans-serif', letterSpacing: '1px', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
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