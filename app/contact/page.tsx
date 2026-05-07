'use client'
import { useState } from 'react'

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Nav */}
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #e5d5f5',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(107,63,160,0.08)',
      }}>
        <a href="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#6b3fa0', textDecoration: 'none', fontFamily: 'sans-serif' }}>
          Waxology <span style={{ color: '#e91e8c' }}>Studio</span>
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Home</a>
          <a href="/#services" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Services</a>
          <a href="/contact" style={{ color: '#6b3fa0', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif', fontWeight: '600' }}>Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '25px', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>
            Book Now
          </a>
        </div>
      </nav>

      <main style={{ backgroundColor: '#2e2650', minHeight: '100vh', fontFamily: 'Georgia, serif', color: 'white' }}>
        <section style={{ textAlign: 'center', padding: '80px 20px 40px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#40e0d0', marginBottom: '1rem' }}>
            Get in Touch for a Confident, Hair-Free You!
          </h1>
          <div style={{ width: '60px', height: '3px', background: '#40e0d0', margin: '0 auto 1.5rem' }} />
          <p style={{ fontSize: '1rem', color: '#c8b8e8', maxWidth: '600px', margin: '0 auto 1rem', lineHeight: '1.8' }}>
            Have questions or want to learn more about my waxing services? I'm here to help! Feel free to reach out with any inquiries or to schedule your appointment. Your journey to smooth, beautiful skin starts here.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            style={{ color: '#40e0d0', fontWeight: '700', fontSize: '1rem', textDecoration: 'underline' }}>
            Click here to Book Online!
          </a>
        </section>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 20px 80px' }}>
          <form
            action="https://formsubmit.co/waxologybysedra@gmail.com"
            method="POST"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

            <input type="hidden" name="_subject" value="New message from Waxology Studio website" />
            <input type="hidden" name="_next" value="https://waxologybysedra.com/contact" />
            <input type="hidden" name="_captcha" value="false" />

            <textarea name="message" placeholder="Tell me about your request" required rows={8}
              style={{ gridRow: '1 / 4', padding: '1rem', background: 'white', border: 'none', borderRadius: '4px', fontSize: '0.95rem', color: '#333', resize: 'vertical', fontFamily: 'Georgia, serif' }}
            />
            <input type="text" name="name" placeholder="Your name" required
              style={{ padding: '1rem', background: 'white', border: 'none', borderRadius: '4px', fontSize: '0.95rem', color: '#333', fontFamily: 'Georgia, serif' }}
            />
            <input type="email" name="email" placeholder="Your email" required
              style={{ padding: '1rem', background: 'white', border: 'none', borderRadius: '4px', fontSize: '0.95rem', color: '#333', fontFamily: 'Georgia, serif' }}
            />
            <input type="tel" name="phone" placeholder="Your phone number"
              style={{ padding: '1rem', background: 'white', border: 'none', borderRadius: '4px', fontSize: '0.95rem', color: '#333', fontFamily: 'Georgia, serif' }}
            />

            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '10px' }}>
              <button type="submit"
                style={{ background: '#7b6bb0', color: 'white', border: 'none', padding: '0.85rem 2.5rem', borderRadius: '30px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', fontFamily: 'Georgia, serif' }}>
                Send Message
              </button>
            </div>
          </form>

          <div style={{ textAlign: 'center', marginTop: '60px', color: '#c8b8e8' }}>
            <p style={{ marginBottom: '0.5rem' }}>📍 154 S. Houston Lake Rd, Ste 200, Warner Robins, GA 31088</p>
            <p style={{ marginBottom: '0.5rem' }}>✉️ waxologybysedra@gmail.com</p>
          
            <p>By appointment only · No walk-ins</p>
          </div>
        </section>
      </main>
    </>
  );
}