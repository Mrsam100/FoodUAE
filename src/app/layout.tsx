import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { LanguageProvider } from "@/lib/language-context";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0505",
};

export const metadata: Metadata = {
  title: "Real Food UAE | Eat Real. Feel Real. Be Real.",
  description: "A private UAE initiative by Lycoris Design Studios promoting whole, nutrient-dense foods for better health. Discover the new food pyramid and nutritional guidance designed for UAE residents.",
  keywords: ["real food", "UAE nutrition", "healthy eating UAE", "food pyramid", "whole foods", "nutrient-dense foods", "Lycoris Design Studios", "UAE health"],
  authors: [{ name: "Lycoris Design Studios" }],
  creator: "Lycoris Design Studios",
  publisher: "Lycoris Design Studios",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://realfood-uae.com",
    siteName: "Real Food UAE",
    title: "Real Food UAE | Eat Real. Feel Real. Be Real.",
    description: "A private UAE initiative promoting whole, nutrient-dense foods for better health. Discover the new food pyramid designed for UAE residents.",
    images: [
      {
        url: "/images/3d-food/food-spread.png",
        width: 1200,
        height: 630,
        alt: "Real Food UAE - Eat Real Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Food UAE | Eat Real. Feel Real. Be Real.",
    description: "A private UAE initiative promoting whole, nutrient-dense foods for better health.",
    images: ["/images/3d-food/food-spread.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ErrorReporter />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
