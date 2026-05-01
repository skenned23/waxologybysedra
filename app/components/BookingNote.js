export default function BookingNote() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Booking Note</h2>
      <div style={styles.box}>
        <div style={styles.topLine} />
        <p style={styles.para}>
          Unlike most waxing studios, I do not require a booking deposit to secure your appointment. I extend this courtesy because I trust my clients — and I ask that you respect that trust in return.
        </p>
        <p style={styles.para}>
          As a one-person studio, every appointment slot is precious. When a client no-shows, cancels last minute, or doesn't call at all, that time cannot be filled — and that directly impacts my livelihood. I am not a large salon with 10 waxers to absorb the loss.
        </p>
        <p style={styles.para}>
          All I ask is a simple courtesy: if you need to cancel or reschedule, please give me at least 6–12 hours notice so I can offer that slot to another client who needs it. Please be aware that no-shows and cancellations with less than 6 hours notice may result in a <strong style={styles.highlight}>$10 courtesy fee</strong> applied to your next appointment. Your consideration means everything to a small, female-owned business like mine. Thank you.
        </p>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: "#2d2645",
    padding: "64px 40px",
    textAlign: "center",
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "2.2rem",
    color: "#4ecdc4",
    marginBottom: "32px",
    letterSpacing: "0.02em",
  },
  box: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#3a3358",
    borderRadius: "12px",
    padding: "36px 40px",
    textAlign: "left",
    position: "relative",
  },
  topLine: {
    height: "2px",
    background: "#4ecdc4",
    marginBottom: "24px",
    borderRadius: "2px",
  },
  para: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.95rem",
    color: "#e0d8f0",
    lineHeight: "1.8",
    marginBottom: "16px",
    fontWeight: "600",
  },
  highlight: {
    color: "#4ecdc4",
  },
}