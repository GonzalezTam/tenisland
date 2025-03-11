import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TenisLand - Artículos para Tenis, Pádel y Deportes de Raqueta",
    template: "%s | TenisLand",
  },
  description:
    "Tienda especializada en venta de artículos para tenis, pádel y deportes de raqueta en San Isidro. Raquetas nuevas y usadas, pelotas, indumentaria y accesorios deportivos.",
  keywords: [
    "tenis",
    "pádel",
    "squash",
    "raquetas",
    "deportes",
    "San Isidro",
    "Buenos Aires",
    "artículos deportivos",
    "raquetas usadas",
  ],
  creator: "TenisLand",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-white text-black`}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
