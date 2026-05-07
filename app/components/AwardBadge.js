const badges = [
  { icon: '🏠', label: 'Family Owned' },
  { icon: '👩', label: 'Female Owned' },
  { icon: '⭐', label: '10+ Years Experience' },
  { icon: '💼', label: 'Comprehensive Packages' },
  { icon: '📅', label: 'By Appointment Only' },
  { icon: '✅', label: 'Experienced Professional' },
];

export default function AwardBadge() {
  return (
    <section style={{
      backgroundColor: '#2e2650',
      padding: '60px 20px',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>

        {/* Left badges */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          flex: 1,
          alignItems: 'center',
        }}>
          {badges.slice(0, 3).map((b, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#3d3470',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                margin: '0 auto 8px',
              }}>{b.icon}</div>
              <p style={{
                color: '#e0d8f0',
                fontSize: '13px',
                margin: 0,
                lineHeight: '1.4',
              }}>{b.label}</p>
            </div>
          ))}
        </div>

        {/* Center badge */}
        <div style={{ flex: '0 0 220px', textAlign: 'center' }}>
          <img
            src="/award-badge.png"
            alt="Best Pros in Town — Waxology by Sedra"
            loading="lazy"
            style={{
              width: '200px',
              objectFit: 'contain',
              marginBottom: '12px',
              filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.4))',
              borderRadius: '8px',
            }}
          />
          <p style={{
            color: '#a89ec9',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: 0,
          }}>Recognized by Best Pros in Town</p>
        </div>

        {/* Right badges */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          flex: 1,
          alignItems: 'center',
        }}>
          {badges.slice(3).map((b, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#3d3470',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                margin: '0 auto 8px',
              }}>{b.icon}</div>
              <p style={{
                color: '#e0d8f0',
                fontSize: '13px',
                margin: 0,
                lineHeight: '1.4',
              }}>{b.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}