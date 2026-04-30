'use client'

const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

export default function HeroNeon() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '650px',
      overflow: 'hidden',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Brick wall texture via CSS */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 30px,
            rgba(255,255,255,0.015) 30px,
            rgba(255,255,255,0.015) 32px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(255,255,255,0.015) 60px,
            rgba(255,255,255,0.015) 62px
          )
        `,
        backgroundColor: '#111',
      }} />

      {/* Dark vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
      }} />

      {/* Pink glow ambient light */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,105,180,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* Neon text */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: '400',
            letterSpacing: '0.08em',
            color: '#fff',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            textShadow: `
              0 0 7px #fff,
              0 0 10px #fff,
              0 0 21px #fff,
              0 0 42px #ff69b4,
              0 0 82px #ff69b4,
              0 0 92px #ff69b4,
              0 0 102px #ff69b4,
              0 0 151px #ff69b4
            `,
            animation: 'neonFlicker 4s infinite alternate',
            marginBottom: '0.5rem',
          }}>
            It&apos;s Time to Get
          </div>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: '#ffb3d9',
            lineHeight: 1,
            textShadow: `
              0 0 7px #ffb3d9,
              0 0 10px #ffb3d9,
              0 0 21px #ffb3d9,
              0 0 42px #ff69b4,
              0 0 82px #ff1493,
              0 0 92px #ff1493,
              0 0 102px #ff1493,
              0 0 151px #ff1493
            `,
            animation: 'neonFlicker 4s infinite alternate-reverse',
          }}>
            Waxed
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: '120px', height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,105,180,0.6), transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Stars + reviews */}
        <div style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '0.4rem' }}>★★★★★</div>
        <p style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'sans-serif',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '1.75rem',
        }}>
          113 Reviews · Best Waxing in Warner Robins
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
            background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)',
            color: 'white', padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif',
            fontSize: '1rem', boxShadow: '0 0 20px rgba(233,30,140,0.5), 0 4px 15px rgba(233,30,140,0.4)',
          }}>
            📅 Book Appointment
          </a>
          <a href="#services" style={{
            background: 'transparent',
            color: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,105,180,0.4)',
            padding: '0.9rem 2rem', borderRadius: '30px',
            textDecoration: 'none', fontWeight: '700', fontFamily: 'sans-serif', fontSize: '1rem',
            boxShadow: '0 0 10px rgba(255,105,180,0.2)',
          }}>
            View Services
          </a>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
          📍 154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088
        </p>
      </div>

      <style>{`
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 24%, 55% {
            opacity: 0.85;
          }
        }
      `}</style>
    </section>
  )
}