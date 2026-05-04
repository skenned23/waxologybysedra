import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Waxology Studio | Brazilian Waxing & Wax Services in Warner Robins, GA",
  description: "Professional waxing services in Warner Robins, GA. Brazilian wax, full body waxing, eyebrow waxing & more. 113+ 5-star reviews. Book online today.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Waxology Studio",
  "description": "Professional waxing services in Warner Robins, GA. Brazilian wax, full body waxing, eyebrow waxing and more.",
  "url": "https://waxologybysedra.com",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "154 S. Houston Lake Rd, Ste 200",
    "addressLocality": "Warner Robins",
    "addressRegion": "GA",
    "postalCode": "31088",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.5735,
    "longitude": -83.6324
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "113"
  },
  "openingHoursSpecification": [
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "18:00" },
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "11:00", "closes": "19:00" },
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "11:00", "closes": "19:00" },
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "11:00", "closes": "20:00" },
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "11:00", "closes": "20:00" },
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "11:00", "closes": "20:00" }
],
  "priceRange": "$$"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}