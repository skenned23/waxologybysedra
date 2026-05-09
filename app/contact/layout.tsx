import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Waxology Studio | Book Waxing in Warner Robins, GA",
  description: "Contact Waxology Studio in Warner Robins, GA. Schedule your Brazilian wax, eyebrow waxing, or full body waxing appointment. Email or book online.",
  alternates: {
    canonical: "https://www.waxologybysedra.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}