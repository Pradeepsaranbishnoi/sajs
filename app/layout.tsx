import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { DonateProvider } from "@/context/DonateContext";
import DonateModal from "@/components/ui/DonateModal";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "SAJS Foundation - Empowering Communities, Transforming Lives | NGO India",
  description: "SAJS Foundation is a leading NGO dedicated to empowering underprivileged communities through education, healthcare, and sustainable development programs across India.",
  keywords: "NGO India, charity foundation, SAJS Foundation, donate to charity, community development, education for children, healthcare NGO, social welfare, volunteer opportunities, nonprofit organization, sustainable development, empowerment programs",
  authors: [{ name: "SAJS Foundation" }],
  openGraph: {
    type: "website",
    url: "https://www.sajsfoundation.org",
    title: "SAJS Foundation - Empowering Communities, Transforming Lives",
    description: "Join SAJS Foundation in creating lasting change through education, healthcare, and community development.",
    images: [
      {
        url: "/images/hero_landscape.png",
        width: 1200,
        height: 630,
        alt: "SAJS Foundation",
      },
    ],
    siteName: "SAJS Foundation",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAJS Foundation",
    description: "Join SAJS Foundation in creating lasting change.",
    images: ["/images/hero_landscape.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <body className="font-sans antialiased bg-white">
        <DonateProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <DonateModal />
        </DonateProvider>
      </body>
    </html>
  );
}
