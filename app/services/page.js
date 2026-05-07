import type { Metadata } from "next";

export const metadata = {
  title: "Waxing Services & Prices | Waxology Studio Warner Robins, GA",
  description: "View all waxing services and prices at Waxology Studio in Warner Robins, GA. Brazilian wax, full body waxing, eyebrow waxing, packages and more. Book online today.",
  alternates: {
    canonical: "https://www.waxologybysedra.com/services",
  },
};

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

const sections = [
  {
    title: "Most Popular Services",
    services: [
      { name: "Brazilian", price: "$40", originalPrice: "$48", desc: "Our #1 most booked service. First-timer friendly with smooth, long-lasting results." },
      { name: "Eyebrow", price: "$8", desc: "Expert brow shaping to define and enhance your natural arch." },
      { name: "Eye/Lip/Chin", price: "$20", desc: "Full facial combo — eyes, lips, and chin in one visit." },
      { name: "Male Brazilian", price: "$55", originalPrice: "$65", desc: "Professional male Brazilian waxing — discreet, thorough, by appointment only." },
      { name: "Eye & Lip", price: "$14", desc: "Clean up and define your eye and lip areas with precision." },
    ],
  },
  {
    title: "Above The Waist",
    services: [
      { name: "Eyebrow", price: "$8" },
      { name: "Brow Tint", price: "$15" },
      { name: "Chin", price: "$8" },
      { name: "Lip", price: "$7" },
      { name: "Jawline", price: "$7" },
      { name: "Eye/Lip", price: "$14" },
      { name: "Eye/Lip/Chin", price: "$20" },
      { name: "Full Face", price: "$28" },
      { name: "Face Cheeks", price: "$8" },
      { name: "Neckline", price: "$8" },
      { name: "Ears/Nose", price: "$10" },
      { name: "Full Arm", price: "$30" },
      { name: "Half Arm", price: "$18" },
      { name: "Fingers", price: "$5" },
      { name: "Full Belly", price: "$15" },
      { name: "Back", price: "$30" },
      { name: "Chest", price: "$30" },
    ],
  },
  {
    title: "Below The Waist",
    services: [
      { name: "Brazilian", price: "$40", originalPrice: "$48" },
      { name: "French", price: "$35", originalPrice: "$40" },
      { name: "Basic Bikini", price: "$25", originalPrice: "$30" },
      { name: "Full Legs", price: "$50", originalPrice: "$56" },
      { name: "Upper Half Legs", price: "$32", originalPrice: "$38" },
      { name: "Lower Half Legs", price: "$28", originalPrice: "$32" },
      { name: "Buttocks", price: "$10+" },
      { name: "Toes", price: "$5", originalPrice: "$7" },
      { name: "Male Brazilian", price: "$55", originalPrice: "$65" },
    ],
  },
  {
    title: "Money Saving Packages",
    services: [
      { name: "Platinum Package", price: "$140", originalPrice: "$180", desc: "Full Legs, Brazilian, Full Arms, Underarms, Fingers, Brow, Lip, Chin and Belly. Save $40!", badge: "BEST VALUE" },
      { name: "Gold Package", price: "$100", originalPrice: "$130", desc: "Full Legs, Underarms, Eyebrows, Lip, and Brazilian. Save $30!", badge: "POPULAR" },
      { name: "Silver Package", price: "$85", originalPrice: "$90", desc: "Lower Legs, Underarms, Brazilian, Brows and Lip. Save $5!", badge: "STARTER" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <nav style={{ background: 'white', borderBottom: '1px solid #e5d5f5', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(107,63,160,0.08)' }}>
        <a href="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#6b3fa0', textDecoration: 'none', fontFamily: 'sans-serif' }}>
          Waxology <span style={{ color: '#e91e8c' }}>Studio</span>
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Home</a>
          <a href="/services" style={{ color: '#6b3fa0', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif', fontWeight: '600' }}>Services</a>
          <a href="/insights" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Insights</a>
          <a href="/contact" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '25px', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Book Now</a>
        </div>
      </nav>

      <main style={{ backgroundColor: '#2e2650', minHeight: '100vh', fontFamily: 'Georgia, serif', color: 'white' }}>
        <section style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#40e0d0', marginBottom: '0.5rem' }}>
            Waxing Services in Warner Robins, GA
          </h1>
          <div style={{ width: '60px', height: '3px', background: '#40e0d0', margin: '0 auto 1rem' }} />
          <p style={{ color: '#c8b8e8', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Professional waxing services by Sedra — Warner Robins' most trusted wax specialist. By appointment only.
          </p>
        </section>

        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 20px 80px' }}>
          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.4rem', color: '#40e0d0', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>{section.title}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {section.services.map((service, i) => (
                  <div key={i} style={{ backgroundColor: '#3a3358', borderRadius: '12px', padding: '20px' }}>
                    {service.badge && (
                      <div style={{ display: 'inline-block', background: '#e8836a', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', padding: '3px 10px', borderRadius: '20px', marginBottom: '8px' }}>{service.badge}</div>
                    )}
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>{service.name}</div>
                    {service.desc && <div style={{ fontSize: '0.85rem', color: '#b8b0d0', lineHeight: '1.6', marginBottom: '8px' }}>{service.desc}</div>}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      {service.originalPrice && <span style={{ fontSize: '0.85rem', color: '#7a6e8a', textDecoration: 'line-through' }}>{service.originalPrice}</span>}
                      <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#4ecdc4' }}>{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '1rem 2.5rem', borderRadius: '30px', fontSize: '1.1rem', fontWeight: '700', textDecoration: 'none' }}>
              Book Your Appointment →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}