import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Wild Life Photography | Upul Dunuhinga | Sri Lankan Wildlife",
    template: "%s | Wild Life Photography by Upul Dunuhinga",
  },
  description:
    "Award-winning wildlife photography by Upul Dunuhinga. Capturing the beauty of Sri Lankan wildlife including elephants, leopards, birds, and more. Professional wildlife safaris, photography workshops, and fine art prints.",
  keywords: [
    "wildlife photography",
    "Sri Lanka wildlife",
    "Upul Dunuhinga",
    "wildlife photographer",
    "Yala National Park",
    "Udawalawe",
    "elephant photography",
    "leopard photography",
    "bird photography",
    "wildlife safari",
    "photography workshop",
    "Sri Lankan wildlife",
    "wildlife conservation",
  ],
  authors: [{ name: "Upul Dunuhinga" }],
  creator: "Upul Dunuhinga",
  publisher: "Upul Dunuhinga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Wild Life Photography by Upul Dunuhinga",
    title: "Wild Life Photography | Upul Dunuhinga | Sri Lankan Wildlife",
    description:
      "Award-winning wildlife photography by Upul Dunuhinga. Capturing the beauty of Sri Lankan wildlife including elephants, leopards, birds, and more.",
    images: [
      {
        url: `${baseUrl}/assets/prof.jpg`,
        width: 1200,
        height: 630,
        alt: "Upul Dunuhinga - Wildlife Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Life Photography | Upul Dunuhinga",
    description:
      "Award-winning wildlife photography by Upul Dunuhinga. Capturing the beauty of Sri Lankan wildlife.",
    images: [`${baseUrl}/assets/prof.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Upul Dunuhinga",
    jobTitle: "Wildlife Photographer",
    description:
      "Award-winning wildlife photographer specializing in Sri Lankan wildlife",
    url: baseUrl,
    image: `${baseUrl}/assets/prof.jpg`,
    sameAs: [
      "https://www.facebook.com/share/1Fix8iLnZR/",
      "https://youtube.com/@greatwild-ws7fg",
      "https://www.instagram.com/grea.twild?igsh=MWNjNjNrZ3JjbmczbA==",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94-773070717",
      contactType: "Customer Service",
      email: "upul.enterprises@gmail.com",
      areaServed: "LK",
      availableLanguage: ["en", "si"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Sri Lanka",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wild Life Photography by Upul Dunuhinga",
    url: baseUrl,
    description:
      "Award-winning wildlife photography showcasing Sri Lankan wildlife",
    publisher: {
      "@type": "Person",
      name: "Upul Dunuhinga",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
