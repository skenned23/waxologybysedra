"use client";

export default function IntroCircles() {
  const cards = [
    {
      img: "/intro1.jpg",
      title: "Personal Care Services in Warner Robins",
      body: [
        "Welcome to Waxology Studio — professional waxing in Warner Robins, GA, from head to toe and everything in between. I'm Sedra, a Master Cosmetologist, and unlike big salons with 4 to 10 different waxers, I'm the only one here. Every appointment, you get me.",
        "Brazilian wax, eyebrow waxing, tinting, full body waxing and money-saving packages — by appointment only at 154 S. Houston Lake Rd. No walk-ins, no waiting room full of strangers.",
      ],
    },
    {
      img: "/intro2.jpg",
      title: "Meet Sedra — Your Waxology Studio Expert",
      body: [
        "I've been waxing in Warner Robins since 2012, specializing in Brazilian waxing, ingrown hair extractions and full body waxing. When you book with me, you're not just booking an appointment — you're booking a relationship.",
        "You'll never be shuffled between waxers. I learn your skin, your preferences and your comfort level, so every visit is the same Sedra and the same smooth results.",
      ],
    },
    {
      img: "/intro3.jpg",
      title: "Unparalleled Customer Service & Benefits",
      body: [
        "As a one-person studio, every client gets my full, undivided attention — not whoever happens to be available that day.",
        "Professional waxing means longer-lasting results, smoother skin and fewer ingrown hairs, from a waxer who knows you visit after visit. Ready for your own personal waxer for life? Book your appointment today.",
      ],
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Waxology by Sedra</h2>
      <div style={styles.grid}>
        {cards.map((card, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.circleWrap}>
              <img src={card.img} alt={card.title} style={styles.circleImg} loading="lazy" />
            </div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            {card.body.map((para, j) => (
              <p key={j} style={styles.cardBody}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
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
    marginBottom: "48px",
    letterSpacing: "0.02em",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    flex: "1 1 280px",
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  circleWrap: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #4ecdc4",
    marginBottom: "24px",
    flexShrink: 0,
  },
  circleImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "12px",
    lineHeight: "1.4",
  },
  cardBody: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.92rem",
    color: "#b8b0d0",
    lineHeight: "1.7",
    marginBottom: "12px",
  },
};