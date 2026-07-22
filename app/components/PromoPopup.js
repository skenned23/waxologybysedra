'use client';

import { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const expirationDate = new Date('2026-07-29T23:59:59');
    const now = new Date();

    if (now > expirationDate) {
      return; // Offer expired, never show
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
      onClick={() => setIsVisible(false)}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '90%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsVisible(false)}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#fff',
            border: 'none',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            zIndex: 10000,
          }}
          aria-label="Close popup"
        >
          ×
        </button>
        
          href="https://app.10to8.com/book/waxologybysedra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/promo-brazilian-wax-bonus.png"
            alt="Brazilian Wax + Free Bonus - Limited Time Offer"
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              cursor: 'pointer',
            }}
          />
        </a>
      </div>
    </div>
  );
}