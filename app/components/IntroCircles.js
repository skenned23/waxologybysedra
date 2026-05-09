"use client";

export default function IntroCircles() {
  const cards = [
    {
      img: "/intro1.jpg",
      title: "Personal Care Services in Warner Robins",
      body: [
        "Welcome to Waxology Studio — Warner Robins GA's premier wax studio for professional waxing services from head to toe and everything in between. I'm Sedra, a Master Cosmetologist in Warner Robins Georgia, and unlike the big salons with 4 to 10 different waxers, I am the only one here. Every single appointment, you get me — the same experienced professional, every time.",
        "My services include full body waxing in Warner Robins, Brazilian wax, eyebrow waxing, tinting, and expertly crafted packages to suit your unique needs. No rotating staff. No surprises. Just consistent, high-quality waxing services tailored specifically to you.",
        "Located at 154 S. Houston Lake Rd in Warner Robins GA, I offer a truly personal one-on-one experience. By appointment only — because your time and comfort matter. No walk-ins, no waiting rooms full of strangers. Just you and your waxer, every visit.",
      ],
    },
    {
      img: "/intro2.jpg",
      title: "Meet Sedra — Your Waxology Studio Expert",
      body: [
        "With over a decade of experience and a Master Cosmetologist license, I've dedicated myself to the art of hair removal, ingrown hair extractions, and full body waxing in Warner Robins Georgia since 2012. When you book with me, you're not just booking an appointment — you're booking a relationship.",
        "What sets Waxology Studio apart from every other wax studio in Warner Robins? You will never be shuffled between different waxers. I know your skin, your preferences, and your comfort level — because I'm the only one here. Every visit, same Sedra. That's a promise no multi-waxer salon can make.",
        "Whether it's a Brazilian wax Warner Robins clients rave about, eyebrow waxing Warner Robins women depend on, or a full body waxing session — my expertise and personal knowledge of your needs ensures you get the smooth, lasting results you deserve every single time.",
      ],
    },
    {
      img: "/intro3.jpg",
      title: "Unparalleled Customer Service & Benefits",
      body: [
        "At Waxology Studio — the most trusted wax studio in Warner Robins GA — your satisfaction is everything to me. While other salons may have 4, 6, or even 10 waxers on staff, I am a one-person shop. That means every client gets my full, undivided attention — not whoever happens to be available that day.",
        "Professional waxing services in Warner Robins GA deliver longer-lasting results, smoother skin, and a reduced risk of ingrown hairs. But beyond the results, there's something even more valuable — a waxing professional who knows your body, your skin type, and your comfort level inside and out, visit after visit.",
        "Excess hair doesn't have to be a daily hassle. Join the hundreds of satisfied clients who trust Sedra — and only Sedra — for Brazilian wax, eyebrow waxing, and full body waxing in Warner Robins. Book your appointment today and experience the difference of having your own personal waxer for life!",
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