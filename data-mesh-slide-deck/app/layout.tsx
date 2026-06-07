import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Data Mesh Reference Architecture for NOAA Fisheries",
  description:
    "An interactive slide deck presenting a data mesh reference architecture for NOAA Fisheries, applying domain ownership, data as a product, self-serve platform, and federated computational governance on Google Cloud Platform.",
  keywords: [
    "data mesh",
    "NOAA Fisheries",
    "reference architecture",
    "Google Cloud Platform",
    "domain ownership",
    "data contracts",
    "federated governance",
    "electronic monitoring",
    "Magnuson-Stevens Act",
    "NIST SP 800-53",
  ],
  openGraph: {
    title: "A Data Mesh Reference Architecture for NOAA Fisheries",
    description:
      "An interactive slide deck presenting a data mesh reference architecture for NOAA Fisheries on Google Cloud Platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${roboto.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}