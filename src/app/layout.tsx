import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ Eddy X | Edward Sapp",
  description: "20+ years behind the decks. Private events, weddings, and social gatherings in Atlanta.",
  openGraph: {
    title: "DJ Eddy X | Edward Sapp",
    description: "20+ years behind the decks. Private events, weddings, and social gatherings in Atlanta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
