// Same policy as before (no deposit; 6–12 hours' notice; $10 courtesy fee under 6 hours), in a shorter,
// friendlier card so it doesn't read as a warning right where visitors decide to book.
export default function BookingNote() {
  return (
    <section style={styles.section}>
      <div style={styles.box}>
        <h2 style={styles.heading}>💜 A Quick Note on Booking</h2>
        <p style={styles.para}>
          <strong style={styles.highlight}>No deposit needed</strong> — I trust my clients. As a one-person studio, I just ask that
          you give me at least 6–12 hours’ notice if you need to cancel or reschedule, so I can offer the slot to someone else.
        </p>
        <p style={styles.small}>
          No-shows and cancellations with less than 6 hours’ notice may have a $10 courtesy fee added to your next appointment.
          Thank you for supporting a small, female-owned business!
        </p>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: "#2d2645",
    padding: "48px 24px",
    textAlign: "center",
  },
  box: {
    maxWidth: "720px",
    margin: "0 auto",
    backgroundColor: "#3a3358",
    borderRadius: "12px",
    borderTop: "3px solid #4ecdc4",
    padding: "28px 32px",
    textAlign: "left",
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "1.4rem",
    color: "#4ecdc4",
    marginBottom: "14px",
  },
  para: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.98rem",
    color: "#e0d8f0",
    lineHeight: "1.7",
    marginBottom: "10px",
  },
  small: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.85rem",
    color: "#bdb3d6",
    lineHeight: "1.6",
  },
  highlight: {
    color: "#4ecdc4",
  },
}
