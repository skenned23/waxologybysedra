'use client'
import { useState } from 'react'

const BOOKING_URL = 'https://app.10to8.com/book/waxologybysedra/'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'none' }} className="mobile-nav-wrapper">
      <style>{`
        @media (max-width: 768px) {
          .mobile-nav-wrapper { display: block !important; }
        }
        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #6b3fa0;
          transition: all 0.3s;
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 2px solid #e5d5f5;
          box-shadow: 0 4px 12px rgba(107,63,160,0.12);
          z-index: 99;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-menu a {
          color: #6b7280;
          text-decoration: none;
          font-family: sans-serif;
          font-size: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f5f0ff;
        }
        .mobile-menu a:last-child {
          background: linear-gradient(135deg, #e91e8c, #6b3fa0);
          color: white !important;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-align: center;
          font-weight: 600;
          border-bottom: none;
          margin-top: 0.5rem;
        }
      `}</style>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div className="mobile-menu">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="/insights" onClick={() => setOpen(false)}>Insights</a>
<a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book Now</a>
        </div>
      )}
    </div>
  )
}