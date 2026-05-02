'use client'

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

export default function ContactPage() {
  return (
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
          <input type="hidden" name="_next" value="https://waxology-ga.vercel.app/contact" />
          <input type="hidden" name="_captcha" value="false" />

          <textarea
            name="message"
            placeholder="Tell me about your request"
            required
            rows={8}
            style={{
              gridRow: '1 / 4',
              padding: '1rem',
              background: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '0.95rem',
              color: '#333',
              resize: 'vertical',
              fontFamily: 'Georgia, serif',
            }}
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
  );
}