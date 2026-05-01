"use client";
import { useState } from "react";

const TABS = [
  {
    id: "personal",
    label: "Personal Care Services",
    services: [
      { name: "Full Body Waxing", price: "$7", url: "https://app.10to8.com/book/csnjuk-free/448684", desc: "Experience the ultimate in hair removal services at Waxology Studio. My body waxing service covers all areas, ensuring you're left with smooth, beautiful skin from head to toe." },
      { name: "Inclusive Packages", price: "$85", url: "https://app.10to8.com/book/csnjuk-free/448688", desc: "At Waxology Studio, I believe in giving you more for less. My thoughtfully curated packages are designed to help you save on à la carte services." },
      { name: "Brazilians", price: "$40", url: "https://app.10to8.com/book/csnjuk-free/448680", desc: "Get smooth, long-lasting results with a first-timer-friendly Brazilian at Waxology Studio in Warner Robins. Comfortable, professional, and discreet." },
      { name: "Tint & Eyebrows", price: "$8", url: "https://app.10to8.com/book/csnjuk-free/448679", desc: "Enhance your natural beauty with expert tint and eyebrow services. Whether you're looking to define your brows or add color to your lashes, I've got you covered." },
    ],
  },
  {
    id: "above",
    label: "Above The Waist",
    services: [
      { name: "Eyebrow", price: "$8", url: "https://app.10to8.com/book/csnjuk-free/448636", desc: "Expert brow shaping to define and enhance your natural arch." },
      { name: "Brow Tint", price: "$15", url: "https://app.10to8.com/book/csnjuk-free/448662", desc: "Add color and definition to your brows with professional tinting." },
      { name: "Chin", price: "$8", url: "https://app.10to8.com/book/csnjuk-free/448656", desc: "Fast, precise chin waxing for a clean finish." },
      { name: "Lip", price: "$7", url: "https://app.10to8.com/book/csnjuk-free/448654", desc: "Quick and clean lip waxing for a polished look." },
      { name: "Jawline", price: "$7", url: "https://app.10to8.com/book/csnjuk-free/448660", desc: "Clean up and define your jawline with precision waxing." },
      { name: "Eye/Lip", price: "$14", url: "https://app.10to8.com/book/csnjuk-free/448655", desc: "Clean up and define your eye and lip areas with precision." },
      { name: "Eye/Lip/Chin", price: "$20", url: "https://app.10to8.com/book/csnjuk-free/448657", desc: "Full facial combo — eyes, lips, and chin in one visit." },
      { name: "Full Face", price: "$28", url: "https://app.10to8.com/book/csnjuk-free/448659", desc: "Complete facial waxing for a smooth, polished look." },
      { name: "Face Cheeks", price: "$8", url: "https://app.10to8.com/book/csnjuk-free/448658", desc: "Smooth, precise face cheek waxing done professionally." },
      { name: "Neckline", price: "$8", url: "https://app.10to8.com/book/csnjuk-free/448664", desc: "Clean neckline waxing for a neat, defined look." },
      { name: "Ears/Nose", price: "$10", url: "https://app.10to8.com/book/csnjuk-free/448663", desc: "Quick and clean ear and nose waxing service." },
      { name: "Full Arm", price: "$30", url: "https://app.10to8.com/book/csnjuk-free/448678", desc: "Smooth, hair-free arms from wrist to shoulder." },
      { name: "Half Arm", price: "$18", url: "https://app.10to8.com/book/csnjuk-free/448661", desc: "Half arm waxing — quick, smooth, and precise." },
      { name: "Fingers", price: "$5", url: "https://app.10to8.com/book/csnjuk-free/448677", desc: "Quick finger waxing — smooth hands in minutes." },
      { name: "Full Belly", price: "$15", url: "https://app.10to8.com/book/csnjuk-free/448674", desc: "Smooth belly waxing done quickly and professionally." },
      { name: "Back", price: "$30", url: "https://app.10to8.com/book/csnjuk-free/448676", desc: "Professional back waxing — clean, smooth, and precise." },
      { name: "Chest", price: "$30", url: "https://app.10to8.com/book/csnjuk-free/448675", desc: "Chest waxing for a clean, confident look." },
    ],
  },
  {
    id: "below",
    label: "Below The Waist",
    services: [
      { name: "Brazilian", price: "$40", originalPrice: "$48", url: "https://app.10to8.com/book/csnjuk-free/448680", desc: "First-timer friendly. Smooth, long-lasting results in a comfortable, professional setting." },
      { name: "French", price: "$35", originalPrice: "$40", url: "https://app.10to8.com/book/csnjuk-free/448681", desc: "A clean, precise French wax for smooth, lasting results." },
      { name: "Basic Bikini", price: "$25", originalPrice: "$30", url: "https://app.10to8.com/book/csnjuk-free/448682", desc: "Clean bikini line waxing for a neat, polished finish." },
      { name: "Full Legs", price: "$50", originalPrice: "$56", url: "https://app.10to8.com/book/csnjuk-free/448684", desc: "Full leg waxing for silky smooth skin from ankle to thigh." },
      { name: "Upper Half Legs", price: "$32", originalPrice: "$38", url: "https://app.10to8.com/book/csnjuk-free/1905392", desc: "Upper leg waxing — smooth and precise from knee to thigh." },
      { name: "Lower Half Legs", price: "$28", originalPrice: "$32", url: "https://app.10to8.com/book/csnjuk-free/448683", desc: "Lower leg waxing from ankle to knee — quick and smooth." },
      { name: "Buttocks", price: "$10+", url: "https://app.10to8.com/book/csnjuk-free/448686", desc: "Quick, professional, and discreet buttocks waxing." },
      { name: "Toes", price: "$5", originalPrice: "$7", url: "https://app.10to8.com/book/csnjuk-free/448687", desc: "Quick toe waxing — smooth feet in minutes." },
      { name: "Male Brazilian", price: "$55", originalPrice: "$65", url: "https://app.10to8.com/book/csnjuk-free/1940888", desc: "Professional male Brazilian waxing — discreet and thorough." },
    ],
  },
  {
    id: "packages",
    label: "Money Saving Packages",
    services: [
      { name: "Platinum Package", price: "$140", originalPrice: "$180", url: "https://app.10to8.com/book/csnjuk-free/448688", desc: "Full Legs, Brazilian, Full Arms, Underarms, Fingers, Brow, Lip, Chin and Belly. Save $40!", badge: "BEST VALUE" },
      { name: "Gold Package", price: "$100", originalPrice: "$130", url: "https://app.10to8.com/book/csnjuk-free/448689", desc: "Full Legs, Underarms, Eyebrows, Lip, and Brazilian. Save $30!", badge: "POPULAR" },
      { name: "Silver Package", price: "$85", originalPrice: "$90", url: "https://app.10to8.com/book/csnjuk-free/448697", desc: "Lower Legs, Underarms, Brazilian, Brows and Lip. Save $5!", badge: "STARTER" },
    ],
  },
];

export default function ServicesTabbed() {
  const [activeTab, setActiveTab] = useState("personal");
  const currentTab = TABS.find((t) => t.id === activeTab);

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Book Online</h2>
        <p style={styles.subheading}>By appointment only. No walk-ins.</p>
      </div>

      <div style={styles.layout}>
        <div style={styles.sidebar}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                ...styles.tabBtn,
                ...(activeTab === tab.id ? styles.tabBtnActive : {}),
              }}
            >
              {activeTab === tab.id && <span style={styles.tabIndicator} />}
              {tab.label}
            </button>
          ))}
        </div>

        <div style={styles.content}>
          <h3 style={styles.tabTitle}>{currentTab.label}</h3>
          <div style={styles.grid}>
            {currentTab.services.map((service, i) => (
              <div key={i} style={styles.card}>
                {service.badge && (
                  <div style={styles.badge}>{service.badge}</div>
                )}
                <div style={styles.cardName}>{service.name}</div>
                <div style={styles.cardDesc}>{service.desc}</div>
                <div style={styles.cardFooter}>
                  <div style={styles.priceWrap}>
                    {service.originalPrice && (
                      <span style={styles.originalPrice}>{service.originalPrice}</span>
                    )}
                    <span style={styles.price}>{service.price}</span>
                    <span style={styles.startingLabel}>Starting price</span>
                  </div>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.bookBtn}
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor: "#2d2645", padding: "64px 40px" },
  header: { textAlign: "center", marginBottom: "48px" },
  heading: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2.2rem", color: "#4ecdc4", marginBottom: "8px", letterSpacing: "0.02em" },
  subheading: { fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "#b8b0d0" },
  layout: { display: "flex", gap: "32px", maxWidth: "1100px", margin: "0 auto", alignItems: "flex-start", flexWrap: "wrap" },
  sidebar: { display: "flex", flexDirection: "column", minWidth: "220px", flex: "0 0 220px", backgroundColor: "#251f3d", borderRadius: "12px", overflow: "hidden" },
  tabBtn: { background: "transparent", border: "none", borderBottom: "1px solid #3a3358", padding: "16px 20px", color: "#b8b0d0", fontSize: "0.9rem", fontFamily: "'Lato', sans-serif", cursor: "pointer", textAlign: "left", position: "relative" },
  tabBtnActive: { background: "#3a3358", color: "#ffffff", fontWeight: "700" },
  tabIndicator: { display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#e8836a", marginRight: "8px", verticalAlign: "middle" },
  content: { flex: "1 1 600px" },
  tabTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", color: "#ffffff", marginBottom: "24px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" },
  card: { backgroundColor: "#3a3358", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px" },
  badge: { display: "inline-block", background: "#e8836a", color: "#ffffff", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 10px", borderRadius: "20px", fontFamily: "'Lato', sans-serif", alignSelf: "flex-start", marginBottom: "4px" },
  cardName: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: "700", color: "#ffffff" },
  cardDesc: { fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "#b8b0d0", lineHeight: "1.6", flex: 1 },
  cardFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "8px" },
  priceWrap: { display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" },
  originalPrice: { fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "#7a6e8a", textDecoration: "line-through" },
  price: { fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", fontWeight: "700", color: "#4ecdc4" },
  startingLabel: { fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#7a6e8a" },
  bookBtn: { background: "transparent", border: "2px solid #e8836a", color: "#e8836a", borderRadius: "20px", padding: "6px 18px", fontSize: "0.85rem", fontWeight: "700", fontFamily: "'Lato', sans-serif", cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap" },
};
