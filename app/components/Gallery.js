export default function Gallery() {
  const images = [
    { src: "/gallery1.jpg", alt: "Waxology Studio treatment room" },
    { src: "/gallery2.jpg", alt: "Waxology Studio waiting area" },
    { src: "/gallery3.jpg", alt: "Sedra at Waxology Studio" },
    { src: "/gallery4.jpg", alt: "Waxology Studio service menu" },
    { src: "/gallery5.jpg", alt: "Waxology Studio hallway" },
    { src: "/gallery6.jpg", alt: "Waxology Studio private rooms" },
    { src: "/gallery7.jpg", alt: "Waxology Studio reception" },
    { src: "/gallery8.jpg", alt: "Waxology Studio lobby" },
    { src: "/gallery9.jpg", alt: "Waxology Studio treatment room with certificates" },
    { src: "/gallery10.jpg", alt: "Professional leg waxing at Waxology Studio" },
    { src: "/gallery11.jpg", alt: "Professional eyebrow waxing at Waxology Studio" },
    { src: "/gallery12.jpg", alt: "Professional Brazilian wax at Waxology Studio Warner Robins" },
    { src: "/gallery13.jpg", alt: "Full leg waxing service at Waxology Studio" },
    { src: "/gallery14.jpg", alt: "Back waxing service at Waxology Studio" },
    { src: "/gallery15.jpg", alt: "Brow tinting service at Waxology Studio Warner Robins" },
    { src: "/gallery16.jpg", alt: "Eyebrow waxing for clients at Waxology Studio" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Waxology Studio</h2>
      <p style={styles.subheading}>Get the Smooth Look You Want</p>
      <div style={styles.grid}>
        {images.map((img, i) => (
          <div key={i} style={styles.imgWrap}>
            <img src={img.src} alt={img.alt} style={styles.img} loading="lazy" />
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
    marginBottom: "8px",
    letterSpacing: "0.02em",
  },
  subheading: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "1rem",
    color: "#b8b0d0",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  imgWrap: {
    overflow: "hidden",
    borderRadius: "8px",
    aspectRatio: "4/3",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease",
  },
};