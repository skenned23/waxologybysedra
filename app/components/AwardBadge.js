export default function AwardBadge() {
  return (
    <section style={{
      backgroundColor: '#2e2650',
      padding: '60px 20px',
      textAlign: 'center',
    }}>
      <img
        src="/award-badge.png"
        alt="Best Pros in Town — Waxology by Sedra"
        style={{
          width: '280px',
          objectFit: 'contain',
          marginBottom: '16px',
          marginRight: '40px',
          filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.4))',
          borderRadius: '8px',
        }}
      />
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