export default function AwardBadge() {
  return (
    <section style={{
      backgroundColor: '#2e2650',
      padding: '60px 20px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 16px',
      }}>
        <img
          src="/award-badge.png"
          alt="Best Pros in Town — Waxology by Sedra"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          transform: 'scale(1.2 I 5)',
          }}
        />
      </div>
      <p style={{
        color: '#a89ec9',
        fontSize: '14px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        margin: 0,
      }}>
        Recognized by Best Pros in Town
      </p>
    </section>
  );
}