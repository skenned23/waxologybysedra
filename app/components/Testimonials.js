"use client";
import { useState, useEffect } from "react";

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
  { initials: "SB", name: "Shaquisha Mckenzie", rating: 5, text: "My professional waxing experience is always such a pleasure with Sedra. The cleanliness and professionalism she has is amazing. Her effectiveness of the service is always on point." },
];

const REVIEWS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
const TRUNCATE_LENGTH = 150;

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TRUNCATE_LENGTH;
  const displayText = expanded || !isLong ? review.text : review.text.slice(0, TRUNCATE_LENGTH) + "...";

  return (
    <div style={styles.card}>
      <div style={styles.cardTop}>
        <div style={styles.avatar}>{review.initials}</div>
        <div>
          <div style={styles.reviewerName}>{review.name}</div>
          <div style={styles.googleLabel}>GOOGLE REVIEW</div>
          <div style={styles.stars}>{"★".repeat(review.rating)}</div>
        </div>
      </div>
      <p style={styles.reviewText}><em>{displayText}</em></p>
      {isLong && (
        <button onClick={() => setExpanded(!expanded)} style={styles.readMore}>
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p === TOTAL_PAGES - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = reviews.slice(page * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE);
  const prev = () => setPage((p) => (p === 0 ? TOTAL_PAGES - 1 : p - 1));
  const next = () => setPage((p) => (p === TOTAL_PAGES - 1 ? 0 : p + 1));

  return (
    <section style={styles.section}>
      <div style={styles.starsTop}>★★★★★</div>
      <div style={styles.lovedBy}>LOVED BY WARNER ROBINS</div>
      <h2 style={styles.heading}>
        113 Five-Star Reviews{" "}
        <span style={styles.headingItalic}>(and Counting)</span>
      </h2>

      <div style={styles.carouselWrap}>
        <button onClick={prev} style={styles.arrow}>‹</button>
        <div style={styles.cards}>
          {current.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
        <button onClick={next} style={styles.arrow}>›</button>
      </div>

      <div style={styles.dots}>
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{ ...styles.dot, ...(i === page ? styles.dotActive : {}) }}
          />
        ))}
      </div>

      <div style={styles.ctaWrap}>
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={styles.reviewBtn}>
          ⭐ Leave a Google Review
        </a>
        <a href="https://www.google.com/maps/search/Waxology+Studio+Warner+Robins" target="_blank" rel="noopener noreferrer" style={styles.allReviewsBtn}>
          See All Reviews
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor: "#2d2645", padding: "64px 40px", textAlign: "center" },
  starsTop: { color: "#f59e0b", fontSize: "1.4rem", letterSpacing: "4px", marginBottom: "8px" },
  lovedBy: { fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "3px", color: "#b8b0d0", textTransform: "uppercase", marginBottom: "12px" },
  heading: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#ffffff", marginBottom: "40px" },
  headingItalic: { color: "#4ecdc4", fontStyle: "italic" },
  carouselWrap: { display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "16px", maxWidth: "1100px", margin: "0 auto" },
  arrow: { background: "transparent", border: "2px solid #4ecdc4", color: "#4ecdc4", borderRadius: "50%", width: "44px", height: "44px", fontSize: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "60px" },
  cards: { display: "flex", gap: "20px", flex: 1, flexWrap: "wrap", justifyContent: "center" },
  card: { backgroundColor: "#3a3358", borderRadius: "12px", padding: "24px", flex: "1 1 260px", maxWidth: "320px", textAlign: "left" },
  cardTop: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" },
  avatar: { width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#6b3fa0", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lato', sans-serif", fontWeight: "700", fontSize: "0.85rem", flexShrink: 0 },
  reviewerName: { fontFamily: "'Lato', sans-serif", fontWeight: "700", color: "#ffffff", fontSize: "0.9rem" },
  googleLabel: { fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "1.5px", color: "#4ecdc4", textTransform: "uppercase", marginTop: "2px", marginBottom: "2px" },
  stars: { color: "#f59e0b", fontSize: "0.85rem", letterSpacing: "1px" },
  reviewText: { fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "#b8b0d0", lineHeight: "1.7" },
  readMore: { background: "none", border: "none", color: "#4ecdc4", cursor: "pointer", fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", padding: "6px 0 0", textDecoration: "underline" },
  dots: { display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" },
  dot: { width: "8px", height: "8px", borderRadius: "50%", background: "#5a4e7a", border: "none", cursor: "pointer", padding: 0 },
  dotActive: { background: "#4ecdc4" },
  ctaWrap: { display: "flex", justifyContent: "center", gap: "16px", marginTop: "40px", flexWrap: "wrap" },
  reviewBtn: { background: "#4ecdc4", color: "#1f1235", padding: "12px 28px", borderRadius: "30px", textDecoration: "none", fontFamily: "'Lato', sans-serif", fontWeight: "700", fontSize: "0.95rem" },
  allReviewsBtn: { background: "transparent", color: "#4ecdc4", border: "2px solid #4ecdc4", padding: "12px 28px", borderRadius: "30px", textDecoration: "none", fontFamily: "'Lato', sans-serif", fontWeight: "700", fontSize: "0.95rem" },
};