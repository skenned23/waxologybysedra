import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Waxology Studio | Professional Waxing in Warner Robins, GA',
  description: 'Warner Robins premier waxing studio. Master Cosmetologist with 10+ years experience. Brazilians, full body waxing, eyebrows & more. Book today!',
}

const services = [
  { name: 'Brazilian Wax', price: '$40+', desc: 'First-timer friendly. Smooth, long-lasting results in a comfortable, professional setting.', icon: '✨' },
  { name: 'Full Body Waxing', price: '$7+', desc: 'Head to toe hair removal services leaving you with silky smooth skin.', icon: '🌸' },
  { name: 'Eyebrows & Tint', price: '$8+', desc: 'Expert brow shaping and tinting to define and enhance your natural beauty.', icon: '💜' },
  { name: 'Above The Waist', price: 'Varies', desc: 'Arms, underarms, back, chest and more — professional and precise.', icon: '🌺' },
  { name: 'Below The Waist', price: 'Varies', desc: 'Legs, bikini, and full body options tailored to your needs.', icon: '💫' },
  { name: 'Inclusive Packages', price: '$85+', desc: 'Save more with bundled services. More for less — curated to your needs.', icon: '🎀' },
]

const reviews = [
  { name: 'Yneish Hunt', text: 'Sedra is the best — the only person I\'ll trust with my waxing. She takes her time, gets your mind off the pain and you really enjoy your time while she does her job.', rating: 5 },
  { name: 'Christina Johnson', text: 'The only person I let wax my brows and do my bikini wax. Sedra is the best!!', rating: 5 },
  { name: 'Twilight Tasha', text: 'Very first time going in and it was a very relaxing atmosphere. Sedra made me feel so comfortable. Will be coming back for sure.', rating: 5 },
  { name: 'Chelsea Evans', text: 'The best waxer ever!!! Sedra is very knowledgeable.', rating: 5 },
  { name: 'Phylisa Hammontree', text: 'The best waxing place in Warner Robins.', rating: 5 },
  { name: 'Jasmine Haynes', text: 'Service is amazing. She does a really good job & she is so sweet & professional. I will be back & I will bring her some more business. Very clean.', rating: 5 },
]

export default function Home() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --purple: #6b3fa0;
          --purple-light: #9b6fd4;
          --pink: #e91e8c;
          --pink-light: #f472b6;
          --pink-pale: #fdf2f8;
          --purple-pale: #f5f0ff;
          --white: #ffffff;
          --gray: #6b7280;
          --dark: #1f1235;
          --border: #e5d5f5;
        }
        body { font-family: 'Georgia', serif; color: var(--dark); background: var(--white); }

        /* NAV */
        nav {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 12px rgba(107,63,160,0.08);
        }
        .nav-logo { font-size: 1.3rem; font-weight: 700; color: var(--purple); letter-spacing: -0.5px; }
        .nav-logo span { color: var(--pink); }
        .nav-links { display: flex; gap: 1.5rem; align-items: center; }
        .nav-links a { color: var(--gray); text-decoration: none; font-size: 0.9rem; font-family: sans-serif; transition: color 0.2s; }
        .nav-links a:hover { color: var(--purple); }
        .nav-book { background: linear-gradient(135deg, var(--pink), var(--purple)); color: white !important; padding: 0.5rem 1.25rem; border-radius: 25px; font-weight: 600; }
        .nav-book:hover { opacity: 0.9; }

        /* HERO */
        .hero {
          background: linear-gradient(135deg, #f5f0ff 0%, #fdf2f8 50%, #fff0f8 100%);
          padding: 5rem 2rem 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(107,63,160,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--pink), var(--purple));
          color: white;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          font-family: sans-serif;
        }
        .hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: var(--purple);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }
        .hero h1 span { color: var(--pink); }
        .hero-sub {
          font-size: 1.2rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
          font-style: italic;
        }
        .hero-tagline {
          font-size: 1rem;
          color: var(--purple-light);
          margin-bottom: 2rem;
          font-family: sans-serif;
        }
        .stars { color: #f59e0b; font-size: 1.2rem; margin-bottom: 0.5rem; }
        .review-count { font-size: 0.9rem; color: var(--gray); font-family: sans-serif; margin-bottom: 2rem; }
        .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
        .btn-primary {
          background: linear-gradient(135deg, var(--pink), var(--purple));
          color: white;
          padding: 0.9rem 2rem;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 700;
          font-family: sans-serif;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(233,30,140,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(233,30,140,0.4); }
        .btn-secondary {
          background: white;
          color: var(--purple);
          border: 2px solid var(--purple);
          padding: 0.9rem 2rem;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 700;
          font-family: sans-serif;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .btn-secondary:hover { background: var(--purple-pale); }
        .hero-address {
          font-size: 0.9rem;
          color: var(--gray);
          font-family: sans-serif;
        }
        .hero-address a { color: var(--purple); text-decoration: none; }

        /* TRUST BAR */
        .trust-bar {
          background: linear-gradient(135deg, var(--purple), var(--pink));
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .trust-item {
          color: white;
          text-align: center;
          font-family: sans-serif;
        }
        .trust-item strong { display: block; font-size: 1.3rem; }
        .trust-item span { font-size: 0.8rem; opacity: 0.85; }

        /* SECTIONS */
        .section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; }
        .section-label { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--pink); font-family: sans-serif; margin-bottom: 0.5rem; }
        .section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--purple); margin-bottom: 1rem; }
        .section-desc { color: var(--gray); font-size: 1rem; max-width: 560px; font-family: sans-serif; line-height: 1.7; margin-bottom: 2.5rem; }

        /* SERVICES */
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .service-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, var(--pink), var(--purple));
        }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(107,63,160,0.12); }
        .service-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .service-name { font-size: 1.1rem; font-weight: 700; color: var(--purple); margin-bottom: 0.25rem; }
        .service-price { font-size: 0.9rem; color: var(--pink); font-weight: 600; font-family: sans-serif; margin-bottom: 0.5rem; }
        .service-desc { font-size: 0.9rem; color: var(--gray); font-family: sans-serif; line-height: 1.6; }

        /* ABOUT */
        .about-section {
          background: linear-gradient(135deg, var(--purple-pale), var(--pink-pale));
          padding: 4rem 2rem;
        }
        .about-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .about-text p { color: var(--gray); font-size: 1rem; line-height: 1.8; font-family: sans-serif; margin-bottom: 1rem; }
        .about-features { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem; }
        .about-feature { display: flex; align-items: center; gap: 0.75rem; font-family: sans-serif; font-size: 0.95rem; color: var(--dark); }
        .about-feature::before { content: '✓'; color: var(--pink); font-weight: 700; font-size: 1rem; }
        .about-visual {
          background: linear-gradient(135deg, var(--purple), var(--pink));
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          color: white;
        }
        .about-visual h3 { font-size: 1.4rem; margin-bottom: 1rem; }
        .about-visual p { font-size: 0.95rem; opacity: 0.9; font-family: sans-serif; line-height: 1.7; }

        /* BOOKING NOTE */
        .booking-note {
          background: #fff8e7;
          border: 1px solid #f59e0b;
          border-left: 4px solid #f59e0b;
          border-radius: 0 12px 12px 0;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
          font-family: sans-serif;
          font-size: 0.9rem;
          color: #92400e;
          max-width: 700px;
        }
        .booking-note strong { display: block; margin-bottom: 0.25rem; color: #78350f; }

        /* REVIEWS */
        .reviews-section { background: white; padding: 4rem 2rem; }
        .reviews-inner { max-width: 1100px; margin: 0 auto; }
        .reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; }
        .review-card {
          background: var(--purple-pale);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
        }
        .review-stars { color: #f59e0b; margin-bottom: 0.75rem; }
        .review-text { font-size: 0.95rem; color: var(--dark); line-height: 1.7; margin-bottom: 1rem; font-style: italic; }
        .review-name { font-size: 0.85rem; font-weight: 700; color: var(--purple); font-family: sans-serif; }

        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, var(--purple), var(--pink));
          padding: 4rem 2rem;
          text-align: center;
          color: white;
        }
        .cta-section h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1rem; }
        .cta-section p { font-size: 1rem; opacity: 0.9; margin-bottom: 2rem; font-family: sans-serif; max-width: 500px; margin-left: auto; margin-right: auto; }
        .btn-white {
          background: white;
          color: var(--purple);
          padding: 0.9rem 2.5rem;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 700;
          font-family: sans-serif;
          font-size: 1rem;
          display: inline-block;
          transition: transform 0.2s;
        }
        .btn-white:hover { transform: translateY(-2px); }

        /* FOOTER */
        footer {
          background: var(--dark);
          color: rgba(255,255,255,0.7);
          padding: 2.5rem 2rem;
          text-align: center;
          font-family: sans-serif;
          font-size: 0.9rem;
        }
        footer a { color: var(--pink-light); text-decoration: none; }
        footer .footer-links { display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 1rem; flex-wrap: wrap; }

        /* MOBILE */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .trust-bar { gap: 1.5rem; }
          .about-inner { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">Waxology <span>Studio</span></div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
          <a href="https://waxologybysedra.com" className="nav-book">Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Warner Robins, GA · By Appointment Only</div>
        <h1>Waxology <span>Studio</span></h1>
        <p className="hero-sub">Got Hair? Get Waxed!</p>
        <p className="hero-tagline">Master Cosmetologist · 10+ Years Experience · 113+ 5-Star Reviews</p>
        <div className="stars">★★★★★</div>
        <p className="review-count">113 Reviews · Best Waxing in Warner Robins</p>
        <div className="hero-btns">
          <a href="https://waxologybysedra.com" className="btn-primary">📅 Book Appointment</a>
          <a href="#services" className="btn-secondary">View Services</a>
        </div>
        <p className="hero-address">
          📍 <a href="https://maps.google.com/?q=154+S+Houston+Lake+Rd+Ste+200+Warner+Robins+GA+31088" target="_blank" rel="noopener noreferrer">
            154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088
          </a>
        </p>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item"><strong>10+</strong><span>Years Experience</span></div>
        <div className="trust-item"><strong>113+</strong><span>5-Star Reviews</span></div>
        <div className="trust-item"><strong>100%</strong><span>Licensed Professional</span></div>
        <div className="trust-item"><strong>Female</strong><span>Owned & Operated</span></div>
      </div>

      {/* SERVICES */}
      <div id="services">
        <div className="section">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Professional Waxing Services</h2>
          <p className="section-desc">From Brazilians to full body waxing, every service is performed by a licensed Master Cosmetologist in a clean, comfortable, private studio.</p>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-price">Starting at {s.price}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="booking-note">
            <strong>📌 Booking Policy</strong>
            No deposit required to book. If you need to cancel or reschedule, please give at least 6–12 hours notice so another client can take your spot. Your consideration is appreciated!
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-label">Meet Your Esthetician</div>
            <h2 className="section-title">Waxology by Sedra</h2>
            <p>Welcome to Waxology Studio — Warner Robins' premier destination for top-notch personal care. I'm Sedra, a Master Cosmetologist with over a decade of experience dedicated to the art of hair removal, ingrown hair extractions, and full body waxing.</p>
            <p>At Waxology Studio, your satisfaction is my priority. I'm not just about removing unwanted hair — I'm about enhancing your confidence and comfort. Every visit is professional, private, and personalized to you.</p>
            <div className="about-features">
              <div className="about-feature">Master Cosmetologist License</div>
              <div className="about-feature">10+ Years Experience</div>
              <div className="about-feature">Female-Owned Business</div>
              <div className="about-feature">First-Timer Friendly</div>
              <div className="about-feature">By Appointment Only — No Walk-Ins</div>
              <div className="about-feature">Clean, Private, Professional Studio</div>
            </div>
          </div>
          <div className="about-visual">
            <h3>Ready for Smooth Skin?</h3>
            <p>Waxology Studio serves Warner Robins and surrounding Middle Georgia communities. Book your appointment today and experience the difference a true professional makes.</p>
            <br />
            <a href="https://waxologybysedra.com" className="btn-white" style={{marginTop: '1rem'}}>Book Now →</a>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews" className="reviews-section">
        <div className="reviews-inner">
          <div className="section-label">What Clients Say</div>
          <h2 className="section-title">113+ Five-Star Reviews</h2>
          <p className="section-desc">Don't take our word for it — here's what real clients have to say about Waxology Studio.</p>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-name">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="contact" className="cta-section">
        <h2>Ready to Get Smooth?</h2>
        <p>Book your appointment at Waxology Studio today. No deposit required — just show up and let Sedra do the rest.</p>
        <a href="https://waxologybysedra.com" className="btn-white">Book Your Appointment →</a>
        <p style={{marginTop: '1.5rem', opacity: 0.8, fontSize: '0.9rem'}}>
          📍 154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088<br/>
          By appointment only · No walk-ins
        </p>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="https://waxologybysedra.com">Book Now</a>
        </div>
        <p>© 2026 Waxology Studio · Warner Robins, GA · All rights reserved</p>
      </footer>
    </>
  )
}