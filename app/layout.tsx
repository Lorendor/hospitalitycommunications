import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospitality Communications",
  description:
    "Hospitality English course, communication & leadership workshops, consulting, and assessments designed specifically for the hospitality industry.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
