import HeroNeon from './components/HeroNeon'
import IntroCircles from './components/IntroCircles'
import ServicesTabbed from './components/ServicesTabbed'
import BookingNote from './components/BookingNote'
import AwardBadge from './components/AwardBadge';
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'

const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

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
        .nav-logo { font-size: 1.3rem; font-weight: 700; color: var(--purple); }
        .nav-logo span { color: var(--pink); }
        .nav-links { display: flex; gap: 1.5rem; align-items: center; }
        .hamburger-toggle { display: none; }
        .hamburger-label { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
        .hamburger-label span { display: block; width: 24px; height: 2px; background: #6b3fa0; transition: all 0.3s; }
        .mobile-menu { display: none; position: absolute; top: 100%; left: 0; right: 0; background: white; border-bottom: 2px solid #e5d5f5; box-shadow: 0 4px 12px rgba(107,63,160,0.12); z-index: 99; padding: 1rem 2rem; flex-direction: column; gap: 1rem; }
        .mobile-menu a { color: #6b7280; text-decoration: none; font-family: sans-serif; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid #f5f0ff; }
        .mobile-menu .mobile-book { background: linear-gradient(135deg, #e91e8c, #6b3fa0); color: white !important; padding: 0.75rem 1.5rem; border-radius: 25px; text-align: center; font-weight: 600; border-bottom: none; margin-top: 0.5rem; }
        .hamburger-toggle:checked ~ .mobile-menu { display: flex; }
        .nav-links a { color: var(--gray); text-decoration: none; font-size: 0.9rem; font-family: sans-serif; }
        .nav-links a:hover { color: var(--purple); }
        .nav-book { background: linear-gradient(135deg, var(--pink), var(--purple)); color: white !important; padding: 0.5rem 1.25rem; border-radius: 25px; font-weight: 600; }
        .trust-bar { background: linear-gradient(135deg, var(--purple), var(--pink)); padding: 1.25rem 2rem; display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; }
        .trust-item { color: white; text-align: center; font-family: sans-serif; }
        .trust-item strong { display: block; font-size: 1.3rem; }
        .trust-item span { font-size: 0.8rem; opacity: 0.85; }
        .cta-section { background: linear-gradient(135deg, var(--purple), var(--pink)); padding: 4rem 2rem; text-align: center; color: white; }
        .cta-section h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1rem; }
        .cta-section p { font-size: 1rem; opacity: 0.9; margin-bottom: 2rem; font-family: sans-serif; max-width: 500px; margin-left: auto; margin-right: auto; }
        .btn-white { background: white; color: var(--purple); padding: 0.85rem 2rem; border-radius: 30px; text-decoration: none; font-weight: 700; font-family: sans-serif; font-size: 1rem; display: inline-block; margin-top: 1.5rem; }
        footer { background: var(--dark); color: rgba(255,255,255,0.7); padding: 2.5rem 2rem; text-align: center; font-family: sans-serif; font-size: 0.9rem; }
        footer a { color: var(--pink-light); text-decoration: none; }
        .footer-links { display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 1rem; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger-label { display: flex; }
          .trust-bar { gap: 1.5rem; }
        }
      `}</style>

      <nav style={{ position: 'relative' }}>
        <div className="nav-logo">Waxology <span>Studio</span></div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="nav-book">Book Now</a>
        </div>
        <input type="checkbox" id="hamburger-toggle" className="hamburger-toggle" />
        <label htmlFor="hamburger-toggle" className="hamburger-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mobile-book">Book Now</a>
        </div>
      </nav>

      <HeroNeon />
      <IntroCircles />

      <div className="trust-bar">
        <div className="trust-item"><strong>10+</strong><span>Years Experience</span></div>
        <div className="trust-item"><strong>113+</strong><span>5-Star Reviews</span></div>
        <div className="trust-item"><strong>100%</strong><span>Licensed Professional</span></div>
        <div className="trust-item"><strong>Female</strong><span>Owned & Operated</span></div>
      </div>

      <Testimonials />

      <div id="services">
        <ServicesTabbed />
      </div>
      <BookingNote />
      <AwardBadge />
      <Gallery />
      <div style={{ width: '100%', height: '400px', marginTop: '0' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.7136011213665!2d-83.6795112!3d32.613815100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3e10dc988e429%3A0x669251e05cb753f7!2sWaxology%20Studio!5e0!3m2!1sen!2sus!4v1777735209816!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div id="contact" className="cta-section">
        <h2>Ready to Get Smooth?</h2>
        <p>Book your appointment at Waxology Studio today. No deposit required — just show up and let Sedra do the rest.</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-white">Book Your Appointment →</a>
        <p style={{marginTop: '1.5rem', opacity: 0.8, fontSize: '0.9rem'}}>
          📍 154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088<br/>
          By appointment only · No walk-ins · waxologybysedra@gmail.com
        </p>
      </div>

      <footer>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
          <a href="https://www.facebook.com/waxingwarnerrobins" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <p>© 2026 Waxology Studio · Warner Robins, GA · "From Head to Toe & Everything in Between"</p>
      </footer>
    </>
  )
}