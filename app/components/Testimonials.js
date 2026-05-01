"use client";
import { useState } from "react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CfdTt1zgUZJmEAE/review";

const reviews = [
  { initials: "JH", name: "Jasmine Haynes", rating: 5, text: "Service is amazing. She does a really good job & she is so sweet & professional. I will be back & I will bring her some more business. Very clean & I felt so comfortable & relaxed. Thankyou again Sedra!" },
  { initials: "RR", name: "Regina Robinson", rating: 5, text: "Sedra was incredibly friendly and had a sweet personality. I felt very comfortable and relaxed after conversing with her because of her inviting nature." },
  { initials: "AG", name: "Ana Guanipa", rating: 5, text: "Absolutely amazing! It was my first time getting a brazilian and let me tell you it is not bad as people make it seems! She is incredible!" },
  { initials: "KN", name: "Katherine Neagle", rating: 5, text: "Top notch service, Sedra is friendly and professional. My skin usually freaks out when I get waxed, but this time it hasn't. 10/10!" },
  { initials: "JH", name: "Jasmine Haslem", rating: 5, text: "Always does an amazing job. Plus I was having a bad day and she could tell. Definitely tried her best to cheer me up while delivering great service. Thank you Sedra!!" },
  { initials: "LL", name: "Lioness Lioness", rating: 5, text: "Beautiful lady and I enjoyed my full body wax. Definitely recommend. And my brows are nice and clean." },
  { initials: "YH", name: "Yneish Hunt", rating: 5, text: "Sedra is the best — the only person I'll trust with my waxing. She takes her time, gets your mind off the pain and you really enjoy your time while she does her job." },
  { initials: "CJ", name: "Christina Johnson", rating: 5, text: "The only person I let wax my brows and do my bikini wax. Sedra is the best!!" },
  { initials: "TT", name: "Twilight Tasha", rating: 5, text: "Very first time going in and it was a very relaxing atmosphere. Sedra made me feel so comfortable. Will be coming back for sure." },
  { initials: "CE", name: "Chelsea Evans", rating: 5, text: "The best waxer ever!!! Sedra is very knowledgeable." },
  { initials: "PH", name: "Phylisa Hammontree", rating: 5, text: "The best waxing place in Warner Robins." },
  { initials: "JY", name: "Jasmine Haynes", rating: 5, text: "Service is amazing. She does a really good job & she is so sweet & professional. I will be back & I will bring her some more business. Very clean." },
];

const REVIEWS_PER_PAGE = 2;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const current = reviews.slice(page * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE);

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Testimonials</h2>
      <p style={styles.subheading}>⭐ 4.7 · 113 Google Reviews</p>

      <div style={styles.carouselWrap}>
        <button onClick={prev} style={styles.arrow}>‹</button>

        <div style={styles.cards}>
          {current.map((r, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.quoteIcon}>"</div>
              <div style={styles.cardTop}>
                <div style={styles.avatar}>{r.initials}</div>
                <div>
                  <div style={styles.reviewerName}>{r.name}</div>
                  <div style={styles.stars}>{"★".repeat(r.rating)}</div>
                </div>
              </div>
              <p style={styles.reviewText}>{r.text}</p>
            </div>
          ))}
        </div>

        <button onClick={next} style={styles.arrow}>›</button>
      </div>

      <div style={styles.dots}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{ ...styles.dot, ...(i === page ? styles.dotActive : {}) }}
          />
        ))}
      </div>

      <div style={styles.ctaWrap}>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.reviewBtn}
        >
          ⭐ Leave a Google Review
        </a>
        <a
          href="https://www.google.com/maps/search/Waxology+Studio+Warner+Robins"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.allReviewsBtn}
        >
          See All Reviews
        </a>
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
  carouselWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  arrow: {
    background: "transparent",
    border: "2px solid #4ecdc4",
    color: "#4ecdc4",
    borderRadius: "50%",
    width: "44px",
    height: "44px",
    fontSize: "1.5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    lineHeight: "1",
  },
  cards: {
    display: "flex",
    gap: "24px",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#3a3358",
    borderRadius: "12px",
    padding: "28px",
    flex: "1 1 300px",
    maxWidth: "420px",
    textAlign: "left",
    position: "relative",
  },
  quoteIcon: {
    position: "absolute",
    top: "16px",
    left: "20px",
    fontSize: "3rem",
    color: "#4ecdc4",
    opacity: 0.3,
    fontFamily: "Georgia, serif",
    lineHeight: "1",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#5a4e7a",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "700",
    fontSize: "0.9rem",
    flexShrink: 0,
  },
  reviewerName: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: "700",
    color: "#ffffff",
    fontSize: "0.95rem",
  },
  stars: {
    color: "#f59e0b",
    fontSize: "0.9rem",
    letterSpacing: "1px",
  },
  reviewText: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.9rem",
    color: "#b8b0d0",
    lineHeight: "1.7",
    fontStyle: "italic",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "24px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#5a4e7a",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  dotActive: {
    background: "#4ecdc4",
  },
  ctaWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "40px",
    flexWrap: "wrap",
  },
  reviewBtn: {
    background: "#4ecdc4",
    color: "#1f1235",
    padding: "12px 28px",
    borderRadius: "30px",
    textDecoration: "none",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "700",
    fontSize: "0.95rem",
  },
  allReviewsBtn: {
    background: "transparent",
    color: "#4ecdc4",
    border: "2px solid #4ecdc4",
    padding: "12px 28px",
    borderRadius: "30px",
    textDecoration: "none",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "700",
    fontSize: "0.95rem",
  },
};