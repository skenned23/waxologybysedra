import Link from "next/link";

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

const posts = {
  "first-timers-guide-brazilian-wax-warner-robins": {
    title: "First-Timer's Guide to a Brazilian Wax in Warner Robins",
    date: "October 1, 2025",
    image: "/studio1.jpg",
    content: `Thinking about getting your first Brazilian wax? You're not alone! Many clients in Warner Robins come to us with questions, concerns, and a healthy dose of nervousness about their first experience.

**What Exactly Is a Brazilian Wax?**

A Brazilian wax removes hair from the front, sides, underneath, and between the cheeks. You can customize the coverage based on your preference. Unlike bikini waxes, a Brazilian gives you complete smoothness that lasts 3-4 weeks.

**Why Choose Professional Brazilian Waxing?**

Professional waxers use hard wax designed for sensitive areas, which grips only the hair—not the skin. Licensed studios follow strict sanitation protocols. Skilled technicians know how to minimize discomfort through proper technique.

**Preparing for Your First Brazilian Wax**

Let hair grow to about ¼ inch. The day before, gently exfoliate and take a warm shower. The day of, skip heavy lotions or oils. Consider taking a pain reliever 30-45 minutes before. Wear loose, comfortable clothing.

**What to Expect During Your Brazilian Wax**

Your technician will discuss your preferences and explain the process. Hard wax is applied in small sections, allowed to harden, and quickly removed. First-time Brazilians typically take 30-45 minutes.

**Does a Brazilian Wax Hurt?**

There is some discomfort, but it is often not as bad as first-timers expect. The pain is brief and sharp. Practice deep breathing during removal.

**Aftercare**

For the first 24-48 hours, avoid hot baths, saunas, and intense workouts. Start gentle exfoliation 2-3 days after waxing. Moisturize daily. Schedule your next appointment 4-5 weeks later.`,
  },
  "wax-strips-vs-professional-waxing": {
    title: "Wax Strips vs Professional Waxing: What Really Works?",
    date: "October 1, 2025",
    image: "/studio2.jpg",
    content: `When it comes to smooth, hair-free skin, you have choices. At-home wax strips promise convenience and savings, while professional waxing offers expertise and better results.

**The Appeal of At-Home Wax Strips**

Drugstore wax strips are tempting: convenience, privacy, and lower upfront cost at $8-$15 per box. But convenience comes with trade-offs.

**Where Wax Strips Fall Short**

Wax strips use a soft wax formula that does not grip short or coarse hair effectively. You will often end up with patchy results and leftover stubble. Regrowth appears faster — often within 1-2 weeks instead of 3-4 weeks from professional waxing.

**Professional Waxing: The Warner Robins Advantage**

Licensed professionals use hard wax that grips hair without sticking to skin. Professional waxing removes hair completely at the root, giving you 3-4 weeks of smooth skin. With consistent visits, hair grows back finer and sparser over time.

**Making the Switch**

Stop shaving 2-3 weeks before your first appointment. Choose a licensed studio with quality products and high hygiene standards. Commit to regular appointments for best results.`,
  },
  "common-myths-misconceptions-about-waxing": {
    title: "Common Myths and Misconceptions About Waxing",
    date: "October 10, 2023",
    image: "/studio3.jpg",
    content: `As the dedicated owner of Waxology Studio in Warner Robins, I have assisted numerous clients on their hair removal journeys. Today I want to dispel the most persistent myths about waxing.

**Myth 1: Waxing is Excruciatingly Painful**

Waxing does not have to be a painful ordeal. The level of discomfort varies from person to person, and with regular sessions, many find the sensation lessens over time. Any discomfort lasts mere seconds.

**Myth 2: Waxing Causes Ingrown Hairs**

When done with correct technique, waxing can actually reduce ingrown hairs. By removing hair from the root, waxing prevents hair from growing back unevenly. Regular exfoliation further minimizes the risk.

**Myth 3: Waxing Causes Skin Damage**

I use high-quality, hypoallergenic waxes and strict hygiene practices. Temporary redness is short-lived. Regular waxing can actually lead to smoother, healthier skin over time.

**Myth 4: You Need Long Hair for Waxing**

Waxing does not require long hair. Shorter hair can actually be easier to wax, and I am skilled at removing hair as short as 1/8 inch.`,
  },
  "waxing-vs-shaving-pros-cons": {
    title: "Waxing vs. Shaving: Pros and Cons for Hair Removal",
    date: "September 10, 2023",
    image: "/gallery1.jpg",
    content: `As the sole proprietor of Waxology Studio in Warner Robins, I have developed an intimate understanding of both waxing and shaving.

**Waxing: The Smooth Operator**

Waxing delivers weeks of hair-free skin by eliminating hair from the root. When hair grows back, it tends to be finer and softer. Waxing also removes dead skin cells, leaving skin softer and more radiant.

**Shaving: The Quick Fix**

Shaving is fast and convenient. You can target hair of any length with no waiting period. However, results are short-lived — hair returns within a day or two. Shaving carries a higher risk of skin irritation and ingrown hairs.

**Making the Decision**

If you seek longer-lasting results, waxing is the superior choice. Waxing tends to be gentler on sensitive skin in the long run. Waxing requires less frequent upkeep than shaving.`,
  },
};

export default async function InsightPost(props: any) {
  const params = await props.params;
  const slug = params?.slug;
  const post = (posts as any)[slug];

  if (!post) {
    return (
      <main style={{ backgroundColor: '#2e2650', minHeight: '100vh', color: 'white', padding: '4rem', textAlign: 'center' }}>
        <h1 style={{ color: '#40e0d0' }}>Post not found</h1>
     
        <a href="/insights" style={{ color: '#40e0d0', marginTop: '2rem', display: 'block' }}>← Back to Insights</a>
      </main>
    );
  }

  const paragraphs = post.content.trim().split('\n\n');

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
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '2rem' }} />
          {paragraphs.map((para: string, i: number) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h2 key={i} style={{ fontSize: '1.2rem', color: '#e0d0ff', marginTop: '2rem', marginBottom: '0.75rem', fontWeight: '700' }}>{para.replace(/\*\*/g, '')}</h2>;
            }
            return <p key={i} style={{ fontSize: '1rem', color: '#c8b8e8', lineHeight: '1.9', marginBottom: '1.25rem' }}>{para}</p>;
          })}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#e0d0ff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>Ready to Book?</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.85rem 2rem', borderRadius: '30px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none' }}>
              Book Your Appointment →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}