const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

export default function WaxologyDifference() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.imageWrap}>
          <img
            src="/gallery16.jpg"
            alt="Sedra performing professional waxing service at Waxology Studio Warner Robins"
            style={styles.image}
          />
        </div>
        <div style={styles.content}>
          <p style={styles.eyebrow}>WHY WAXOLOGY STUDIO</p>
          <h2 style={styles.heading}>
            The Waxology Studio{' '}
            <span style={styles.headingItalic}>Difference</span>
          </h2>
          <p style={styles.subtext}>What clients keep coming back for.</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.check}>✓</span>
              <span>One-on-one appointments with Sedra — no rush, no rotating staff, just her undivided attention</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.check}>✓</span>
              <span>Over a decade of experience as a licensed Master Cosmetologist, waxing since 2012</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.check}>✓</span>
              <span>Known for carefully removing ingrown hairs — a detail reviewers say no other studio offers</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.check}>✓</span>
              <span>Female-owned and operated, with a 4.7-star rating across 113 Google reviews</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.check}>✓</span>
              <span>By appointment only — no walk-ins, no waiting rooms, no surprises</span>
            </li>
          </ul>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={styles.btn}>
            Book Your Appointment →
          </a>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#f5f0ff',
    padding: '80px 40px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageWrap: {
    flex: '1 1 380px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(107,63,160,0.15)',
  },
  image: {
    width: '100%',
    height: '460px',
    objectFit: 'cover',
    display: 'block',
  },
  content: {
    flex: '1 1 340px',
  },
  eyebrow: {
    fontFamily: 'sans-serif',
    fontSize: '0.72rem',
    letterSpacing: '3px',
    color: '#e91e8c',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  heading: {
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
    color: '#1f1235',
    marginBottom: '12px',
    lineHeight: '1.2',
  },
  headingItalic: {
    color: '#6b3fa0',
    fontStyle: 'italic',
  },
  subtext: {
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '28px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 36px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  listItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    fontFamily: 'sans-serif',
    fontSize: '0.95rem',
    color: '#374151',
    lineHeight: '1.6',
  },
  check: {
    color: '#6b3fa0',
    fontWeight: '700',
    fontSize: '1rem',
    flexShrink: 0,
    marginTop: '2px',
  },
  btn: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)',
    color: 'white',
    padding: '0.85rem 2rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    fontSize: '1rem',
  },
}
