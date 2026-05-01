"use client";

export default function IntroCircles() {
  const cards = [
    {
      img: "/intro1.jpg",
      title: "Personal Care Services in Warner Robins",
      body: "Welcome to Waxology Studio — Warner Robins Georgia's premier destination for professional waxing services. I'm Sedra, a Master Cosmetologist specializing in full body waxing, Brazilian wax, eyebrow waxing, and tinting in Warner Robins, GA. No rush, no fuss — just top-notch personal care tailored to you.",
    },
    {
      img: "/intro2.jpg",
      title: "Meet Sedra — Your Waxology Studio Expert",
      body: "With over a decade of experience and a Master Cosmetologist license, Sedra has dedicated herself to the art of hair removal in Warner Robins, Georgia. From ingrown hair extractions to full body waxing services, Sedra delivers smooth, lasting results every time.",
    },
    {
      img: "/intro3.jpg",
      title: "Unparalleled Customer Service & Benefits",
      body: "At Waxology Studio in Warner Robins GA, your satisfaction is the top priority. It's not just about removing unwanted hair — it's about enhancing your confidence and comfort. Family-owned, female-owned, and by appointment only to ensure you always get Sedra's full attention.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Waxology by Sedra</h2>
      <div style={styles.grid}>
        {cards.map((card, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.circleWrap}>
              <img src={card.img} alt={card.title} style={styles.circleImg} />
            </div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardBody}>{card.body}</p>
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
  },
};