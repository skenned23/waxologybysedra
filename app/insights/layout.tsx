import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waxing Tips & Insights | Waxology Studio Warner Robins",
  description: "Expert waxing tips, guides, and insights from Sedra at Waxology Studio in Warner Robins, GA. Learn about Brazilian wax, eyebrow waxing, and more.",
  alternates: {
   canonical: "https://www.waxologybysedra.com/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}