import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} · ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.tagline,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
