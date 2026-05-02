import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "https://app.10to8.com/book/waxologybysedra/";

const posts: Record<string, {
  title: string;
  date: string;
  image: string;
  content: string;
}> = {
  "first-timers-guide-brazilian-wax-warner-robins": {
    title: "First-Timer's Guide to a Brazilian Wax in Warner Robins",
    date: "October 1, 2025",
    image: "/studio1.jpg",
    content: `
Thinking about getting your first Brazilian wax? You're not alone! Many clients in Warner Robins come to us with questions, concerns, and a healthy dose of nervousness about their first experience. Here's everything you need to know to feel confident, prepared, and comfortable during your visit to Waxology Studio.

**What Exactly Is a Brazilian Wax?**

A Brazilian wax removes hair from the front, sides, underneath, and between the cheeks. You can customize the coverage based on your preference, from a full removal to leaving a small strip or triangle in front. Unlike bikini waxes that only tidy the bikini line, a Brazilian gives you complete smoothness that lasts 3-4 weeks. The results are cleaner and longer-lasting than shaving, with less risk of razor burn or bumps.

**Why Choose Professional Brazilian Waxing?**

Professional waxers use hard wax designed for sensitive areas, which grips only the hair—not the skin—making removal more comfortable. Licensed studios follow strict sanitation protocols, including fresh gloves and sanitized tools for every client. Skilled technicians know how to minimize discomfort through proper stretching and positioning.

**Preparing for Your First Brazilian Wax**

Let hair grow to about ¼ inch (the length of a grain of rice). This typically means avoiding shaving for 2-3 weeks. The day before, gently exfoliate the area and take a warm shower to soften hair follicles. The day of your appointment, take a shower but skip heavy lotions or oils. Consider taking an over-the-counter pain reliever 30-45 minutes before your appointment. Wear loose, comfortable clothing.

**What to Expect During Your Brazilian Wax**

Your technician will discuss your preferences, address concerns, and explain the process. Hard wax is applied in small sections, allowed to harden, and then quickly removed against the direction of hair growth. First-time Brazilians typically take 30-45 minutes.

**Does a Brazilian Wax Hurt?**

There is some discomfort, but it's often not as bad as first-timers expect. The pain is brief and sharp, and using hard wax significantly reduces the sting compared to strips. Practice deep breathing during removal and remember that each pull is quick — usually under 3 seconds.

**Aftercare**

For the first 24-48 hours, avoid hot baths, saunas, tanning, and intense workouts. Wear loose cotton underwear. Start gentle exfoliation 2-3 days after waxing to prevent ingrown hairs. Moisturize daily with a fragrance-free lotion. Schedule your next appointment for 4-5 weeks later.

Ready to book? Schedule your appointment at Waxology Studio, or contact us with any questions. We're here to make your first waxing experience as positive as possible.
    `,
  },
  "wax-strips-vs-professional-waxing": {
    title: "Wax Strips vs Professional Waxing: What Really Works?",
    date: "October 1, 2025",
    image: "/studio2.jpg",
    content: `
When it comes to smooth, hair-free skin, you have choices. At-home wax strips promise convenience and savings, while professional waxing offers expertise and better results. If you're deciding between DIY strips and booking a session at a Warner Robins waxing studio, here's what you need to know.

**The Appeal of At-Home Wax Strips**

Drugstore wax strips are tempting for good reasons: convenience, privacy, and lower upfront cost at $8-$15 per box. But convenience comes with trade-offs that many discover the hard way.

**Where Wax Strips Fall Short**

Wax strips use a soft wax formula that doesn't grip short or coarse hair as effectively as professional hard wax. You'll often end up with patchy results, missed spots, and leftover stubble. Strips pull on skin as well as hair, causing more discomfort and redness. Because strips miss shorter hairs, regrowth appears faster — often within 1-2 weeks instead of 3-4 weeks from professional waxing.

**Professional Waxing: The Warner Robins Advantage**

Licensed professionals use hard wax that grips hair without sticking to skin, plus proper stretching techniques to minimize discomfort. Professional waxing removes hair completely at the root, giving you 3-4 weeks of smooth skin. With consistent visits, hair grows back finer and sparser over time.

**The Real Cost Comparison**

While professional waxing costs more upfront, the results last twice as long. When you factor in time savings, superior results, and reduced frequency, the price difference narrows significantly.

**Making the Switch**

Stop shaving 2-3 weeks before your first appointment. Let hair grow to about 1/4 inch so the wax can grip properly. Choose a licensed studio that uses quality products and maintains high hygiene standards. Commit to regular appointments — consistency is key to maintaining smooth skin and reducing discomfort over time.

Ready to experience the difference? Book your appointment at Waxology Studio in Warner Robins.
    `,
  },
  "common-myths-misconceptions-about-waxing": {
    title: "Common Myths and Misconceptions About Waxing",
    date: "October 10, 2023",
    image: "/studio3.jpg",
    content: `
As the dedicated owner and sole operator of Waxology Studio in Warner Robins, I've had the honor of assisting numerous clients on their hair removal journeys. Each one has arrived with their own concerns and preconceptions about the waxing process. Today I want to dispel some of the most persistent myths.

**Myth 1: Waxing is Excruciatingly Painful**

Waxing doesn't have to be a painful ordeal. The level of discomfort varies from person to person, and with regular waxing sessions, many individuals find that the sensation lessens over time. At Waxology Studio, I prioritize your comfort by using top-quality wax and employing expert techniques. Any discomfort experienced during waxing is transitory — it lasts mere seconds as the wax is swiftly removed.

**Myth 2: Waxing Causes Ingrown Hairs**

When waxing is executed with the correct techniques, it can actually reduce the likelihood of ingrown hairs. By removing hair from the root, waxing prevents hair from growing back unevenly. Regular exfoliation is key to further minimizing the risk. Following post-waxing instructions significantly contributes to preventing ingrown hairs.

**Myth 3: Waxing Causes Skin Damage**

Your skin's health and safety are paramount at Waxology Studio. I exclusively use high-quality, hypoallergenic waxes and adhere to stringent hygiene practices. Although some clients may experience temporary redness immediately after waxing, these side effects are typically short-lived. Regular waxing can actually lead to smoother, healthier skin over time.

**Myth 4: You Need Long Hair for Waxing**

Waxing doesn't require long hair to work effectively. In fact, shorter hair can be easier to wax, and I'm skilled at removing hair as short as 1/8 inch. Regular maintenance ensures that hair is consistently removed from the root, leading to smoother, longer-lasting results.

If you have questions or are ready to experience the benefits of waxing, reach out to me at waxologybysedra@gmail.com. At Waxology Studio, we're your trusted partner in achieving and maintaining smooth, beautiful skin.
    `,
  },
  "waxing-vs-shaving-pros-cons": {
    title: "Waxing vs. Shaving: Pros and Cons for Hair Removal",
    date: "September 10, 2023",
    image: "/gallery1.jpg",
    content: `
As the sole proprietor of Waxology Studio in Warner Robins, I've developed an intimate understanding of both waxing and shaving. Today I'm sharing the comprehensive insights you need to confidently choose the hair removal method that aligns with your preferences.

**Waxing: The Smooth Operator**

One of the standout benefits of waxing is the exceptional longevity of its results — weeks of hair-free skin. This owes itself to the fact that waxing eliminates hair from the root, causing it to take significantly longer to grow back. When hair does eventually grow back, it tends to be finer and softer compared to the bristly stubbles that follow shaving. Waxing also offers a fantastic exfoliation benefit — as the wax is pulled away, it removes dead skin cells, leaving your skin softer and more radiant.

**Shaving: The Quick Fix**

Shaving reigns supreme when it comes to speed and convenience. You can swiftly eliminate unwanted hair in the comfort of your own home. Unlike waxing, shaving offers the flexibility to target hair of any length. However, results are short-lived, with hair returning within a day or two. Shaving also carries a higher risk of skin irritation and ingrown hairs.

**Making the Decision**

Consider your time — if you're seeking longer-lasting results that reduce overall maintenance, waxing is the superior choice. Consider your skin sensitivity — waxing tends to be gentler in the long run. Consider your maintenance commitment — waxing requires less frequent upkeep.

At Waxology Studio, I am wholly committed to meeting your unique hair removal needs. Whether you prefer waxing or are curious about making the switch, contact me at waxologybysedra@gmail.com and I'll be delighted to assist you.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug];
  return {
    title: post ? `${post.title} | Waxology Studio` : "Insights | Waxology Studio",
    description: post ? post.content.slice(0, 150) : "",
  };
}

export default function InsightPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return <main style={{ backgroundColor: '#2e2650', minHeight: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Post not found</h1>
    </main>;
  }

  const paragraphs = post.content.trim().split('\n\n');

  return (
    <>
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #e5d5f5',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(107,63,160,0.08)',
      }}>
        <a href="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#6b3fa0', textDecoration: 'none', fontFamily: 'sans-serif' }}>
          Waxology <span style={{ color: '#e91e8c' }}>Studio</span>
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Home</a>
          <a href="/#services" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Services</a>
          <a href="/insights" style={{ color: '#6b3fa0', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif', fontWeight: '600' }}>Insights</a>
          <a href="/contact" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '25px', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>
            Book Now
          </a>
        </div>
      </nav>

      <main style={{ backgroundColor: '#2e2650', minHeight: '100vh', fontFamily: 'Georgia, serif', color: 'white' }}>
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 20px 80px' }}>
          <Link href="/insights" style={{ color: '#a89ec9', fontSize: '0.9rem', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
            ← Back to Insights
          </Link>

          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#40e0d0', marginBottom: '0.5rem', lineHeight: '1.3' }}>
            {post.title}
          </h1>
          <p style={{ color: '#a89ec9', fontStyle: 'italic', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Posted on {post.date}
          </p>

          <img src={post.image} alt={post.title}
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '2rem' }} />

          {paragraphs.map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h2 key={i} style={{ fontSize: '1.2rem', color: '#e0d0ff', marginTop: '2rem', marginBottom: '0.75rem', fontWeight: '700' }}>
                {para.replace(/\*\*/g, '')}
              </h2>;
            }
            return <p key={i} style={{ fontSize: '1rem', color: '#c8b8e8', lineHeight: '1.9', marginBottom: '1.25rem' }}>
              {para}
            </p>;
          })}

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#e0d0ff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>Ready to Book?</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e91e8c, #6b3fa0)', color: 'white', padding: '0.85rem 2rem', borderRadius: '30px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none' }}>
              Book Your Appointment →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}