import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>Sorry, we couldn't find what you were looking for.</p>
      <Link href="/" style={{ background: '#c8a86a', color: '#fff', padding: '0.75rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '700' }}>
        Back to Home
      </Link>
    </div>
  )
}