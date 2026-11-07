// "First Brazilian?" reassurance block for nervous first-timers.
// Facts come from data/posts/first-timers-guide-brazilian-wax-warner-robins.md; the quote is a real Google review
// already shown in Testimonials. Wax type is deliberately not mentioned here.
const BRAZILIAN_URL = 'https://app.10to8.com/book/csnjuk-free/448680'
const GUIDE_URL = '/insights/first-timers-guide-brazilian-wax-warner-robins'

const STEPS = [
  { icon: '🌱', title: 'How to prep', text: 'Let hair grow to about ¼ inch — the length of a grain of rice. That usually means no shaving for 2–3 weeks. Gently exfoliate and take a warm shower the day before.' },
  { icon: '⏱️', title: 'How long it takes', text: 'A first Brazilian typically takes 30–45 minutes. We talk through exactly what you want first — full removal, a strip, or a triangle.' },
  { icon: '💗', title: 'Does it hurt?', text: 'There is some discomfort, but it’s brief and often not as bad as first-timers expect. Most clients find each visit gets easier as hair grows back finer.' },
  { icon: '🧴', title: 'Aftercare', text: 'For 24–48 hours, skip hot baths, saunas, tanning and intense workouts, and wear loose cotton underwear. Results last 3–4 weeks.' },
]

export default function FirstTimer() {
  return (
    <section style={styles.section} aria-labelledby="first-timer-heading">
      <div style={styles.eyebrow}>NERVOUS? THAT’S NORMAL</div>
      <h2 id="first-timer-heading" style={styles.heading}>
        Your First Brazilian: <span style={styles.italic}>What to Expect</span>
      </h2>
      <p style={styles.lead}>
        It’s just you and Sedra — one-on-one, private, and unhurried. Here’s everything first-timers ask about.
      </p>

      <div className="ft-grid" style={styles.grid}>
        {STEPS.map((s) => (
          <div key={s.title} style={styles.card}>
            <div style={styles.icon} aria-hidden="true">{s.icon}</div>
            <h3 style={styles.cardTitle}>{s.title}</h3>
            <p style={styles.cardText}>{s.text}</p>
          </div>
        ))}
      </div>

      <blockquote style={styles.quote}>
        “Very first time going in and it was a very relaxing atmosphere. Sedra made me feel so comfortable. Will be coming back for sure.”
        <span style={styles.quoteBy}>— Twilight Tasha, Google review</span>
      </blockquote>

      <div style={styles.actions}>
        <a href={BRAZILIAN_URL} target="_blank" rel="noopener noreferrer" style={styles.primary}>Book Your First Brazilian →</a>
        <a href={GUIDE_URL} style={styles.secondary}>Read the full first-timer’s guide</a>
        <a href="/contact" style={styles.secondary}>Have a question? Send Sedra a message</a>
      </div>

      <style>{`
        @media (max-width: 900px) { .ft-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .ft-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

const styles = {
  section: { background: '#fdf2f8', padding: '64px 24px', textAlign: 'center' },
  eyebrow: { fontFamily: 'sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', color: '#e91e8c', fontWeight: 700, marginBottom: '0.75rem' },
  heading: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)', color: '#1f1235', marginBottom: '0.75rem' },
  italic: { fontStyle: 'italic', color: '#6b3fa0' },
  lead: { fontFamily: 'sans-serif', color: '#6b7280', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.6 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '1100px', margin: '0 auto' },
  card: { background: 'white', borderRadius: '14px', padding: '24px 20px', textAlign: 'left', boxShadow: '0 6px 20px rgba(107,63,160,0.08)', border: '1px solid #e5d5f5' },
  icon: { fontSize: '1.6rem', marginBottom: '0.5rem' },
  cardTitle: { fontFamily: 'sans-serif', fontSize: '1.05rem', color: '#6b3fa0', marginBottom: '0.5rem' },
  cardText: { fontFamily: 'sans-serif', fontSize: '0.92rem', color: '#4b4458', lineHeight: 1.6 },
  quote: { maxWidth: '640px', margin: '2.5rem auto 0', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.05rem', color: '#1f1235', lineHeight: 1.6 },
  quoteBy: { display: 'block', fontStyle: 'normal', fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#6b7280', marginTop: '0.5rem' },
  actions: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.9rem', marginTop: '2rem' },
  primary: { background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.9rem 2rem', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontFamily: 'sans-serif' },
  secondary: { color: '#6b3fa0', fontFamily: 'sans-serif', fontSize: '0.95rem', textDecoration: 'underline' },
}
