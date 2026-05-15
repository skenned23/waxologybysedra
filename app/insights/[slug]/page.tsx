import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

function getPost(slug) {
  const filePath = path.join(process.cwd(), "data", "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { title: data.title || slug, date: data.date || "", image: data.image || "", content };
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "data", "posts");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(".md", "") }));
}

export default async function InsightPost(props) {
  const params = await props.params;
  const slug = params?.slug;
  const post = getPost(slug);
  if (!post) notFound();

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
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 20px 80px' }}>
          <a href="/insights" style={{ color: '#a89ec9', fontSize: '0.9rem', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>← Back to Insights</a>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#40e0d0', marginBottom: '0.5rem', lineHeight: '1.3' }}>{post.title}</h1>
          <p style={{ color: '#a89ec9', fontStyle: 'italic', marginBottom: '2rem', fontSize: '0.9rem' }}>Posted on {post.date}</p>
          {post.image && <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '2rem' }} />}
          <div style={{ fontSize: '1rem', color: '#c8b8e8', lineHeight: '1.9' }}>
            <ReactMarkdown
              components={{
                h2: ({children}) => <h2 style={{ fontSize: '1.2rem', color: '#e0d0ff', marginTop: '2rem', marginBottom: '0.75rem', fontWeight: '700' }}>{children}</h2>,
                p: ({children}) => <p style={{ marginBottom: '1.25rem' }}>{children}</p>,
                a: ({href, children}) => <a href={href} style={{ color: '#40e0d0' }}>{children}</a>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#e0d0ff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>Ready to Book Your Waxing Appointment in Warner Robins?</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.85rem 2rem', borderRadius: '30px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none' }}>
              Book Your Appointment →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}