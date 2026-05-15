import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waxing Tips & Insights | Waxology Studio Warner Robins",
  description: "Read expert waxing tips, guides, and insights from Sedra at Waxology Studio in Warner Robins, GA.",
};

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

function getPosts() {
  const postsDir = path.join(process.cwd(), "data", "posts");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data, content } = matter(raw);
    const slug = filename.replace(".md", "");
    const excerpt = content.replace(/[#*!\[\]()]/g, "").slice(0, 160).trim() + "...";
    return { slug, title: data.title || slug, date: data.date || "", image: data.image || "", excerpt };
  });
}

export default function InsightsPage() {
  const posts = getPosts();
  return (
    <>
      <nav style={{ background: 'white', borderBottom: '1px solid #e5d5f5', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(107,63,160,0.08)' }}>
        <a href="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#6b3fa0', textDecoration: 'none', fontFamily: 'sans-serif' }}>
          Waxology <span style={{ color: '#e91e8c' }}>Studio</span>
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Home</a>
          <a href="/#services" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Services</a>
          <a href="/insights" style={{ color: '#6b3fa0', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif', fontWeight: '600' }}>Insights</a>
          <a href="/contact" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '25px', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>
            Book Now
          </a>
        </div>
      </nav>

      <main style={{ backgroundColor: '#2e2650', minHeight: '100vh', fontFamily: 'Georgia, serif', color: 'white' }}>
        <section style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#40e0d0', marginBottom: '0.5rem' }}>
            Waxing Tips, Trends, and Insights
          </h1>
          <div style={{ width: '60px', height: '3px', background: '#40e0d0', margin: '0 auto 1rem' }} />
          <p style={{ color: '#c8b8e8', fontSize: '1rem' }}>Expert advice from Sedra at Waxology Studio</p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '20px 20px 80px' }}>
          {posts.map((post) => (
            <div key={post.slug} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem', marginBottom: '2rem', alignItems: 'start' }}>
              {post.image && <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px' }} />}
              <div>
                <Link href={`/insights/${post.slug}`} style={{ fontSize: '1.2rem', fontWeight: '700', color: '#40e0d0', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}>
                  {post.title}
                </Link>
                <p style={{ fontSize: '0.8rem', color: '#a89ec9', fontStyle: 'italic', marginBottom: '0.75rem' }}>Posted on {post.date}</p>
                <p style={{ fontSize: '0.95rem', color: '#c8b8e8', lineHeight: '1.7', marginBottom: '0.75rem' }}>{post.excerpt}</p>
                <Link href={`/insights/${post.slug}`} style={{ color: '#40e0d0', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600' }}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}