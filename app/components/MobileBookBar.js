// Phone-only bar pinned to the bottom of the screen so "Book Now" is always one tap away.
// Sedra prefers messages over calls (she is usually with a client), so the second button goes to the contact form.
const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

export default function MobileBookBar() {
  return (
    <>
      <div className="mobile-book-bar" role="navigation" aria-label="Quick booking">
        <a href="/contact" className="mbb-ask">Ask a Question</a>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mbb-book">📅 Book Now</a>
      </div>
      <style>{`
        .mobile-book-bar { display: none; }
        @media (max-width: 768px) {
          .mobile-book-bar {
            display: flex; gap: 10px; position: fixed; left: 0; right: 0; bottom: 0; z-index: 200;
            padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
            background: rgba(255,255,255,0.97); border-top: 1px solid #e5d5f5;
            box-shadow: 0 -4px 16px rgba(107,63,160,0.12);
          }
          .mobile-book-bar a {
            flex: 1; text-align: center; text-decoration: none; font-family: sans-serif; font-weight: 700;
            font-size: 0.95rem; padding: 0.8rem 0.5rem; border-radius: 26px;
          }
          .mbb-ask { color: #6b3fa0; border: 2px solid #6b3fa0; background: white; }
          .mbb-book { color: white; background: linear-gradient(135deg, #e91e8c, #6b3fa0); }
          body { padding-bottom: 76px; }
        }
      `}</style>
    </>
  )
}
