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
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.5) 100%)',
        }} />
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
            objectPosition: 'center 35%',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to left, transparent 60%, rgba(0,0,0,0.5) 100%)',
        }} />
      </div>

      {/* Content centered at seam */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '320px',
      }}>
        <div style={{ color: '#fbbf24', fontSize: '1.4rem', marginBottom: '0.5rem' }}>★★★★★</div>
        <p style={{
          fontSize: '0.85rem',
          color: 'white',
          fontFamily: 'sans-serif',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
          textShadow: '0 1px 6px rgba(0,0,0,1)',
        }}>
          113 Reviews · Best Waxing in Warner Robins
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', marginBottom: '1rem' }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
            background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)',
            color: 'white', padding: '1rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif',
            fontSize: '1rem', boxShadow: '0 0 20px rgba(233,30,140,0.6)',
            textAlign: 'center',
          }}>
            📅 Book Appointment
          </a>
          <a href="#services" style={{
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: '1px solid rgba(255,105,180,0.7)',
            padding: '1rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif',
            fontSize: '1rem', textAlign: 'center',
          }}>
            View Services
          </a>
        </div>

        <p style={{
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'sans-serif',
          textShadow: '0 1px 6px rgba(0,0,0,1)',
        }}>
          📍 154 S. Houston Lake Rd, Ste 200<br />Warner Robins, GA 31088
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
} OK all right then I'll see you see you soon mommy's in the shower