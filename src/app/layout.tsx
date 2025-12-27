import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "DJ Eddy X | Edward Sapp",
  description: "20+ years behind the decks. Private events, weddings, and social gatherings in Atlanta.",
  metadataBase: new URL("https://dj.edwardsapp.com"),
  openGraph: {
    title: "DJ Eddy X",
    description: "20+ years behind the decks. Private events, weddings, and social gatherings in Atlanta.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Eddy X",
    description: "20+ years behind the decks. Private events, weddings, and social gatherings in Atlanta.",
    images: ["/og-image.jpg"],
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
