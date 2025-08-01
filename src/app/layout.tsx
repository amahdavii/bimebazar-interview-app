import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "خرید آنلاین بیمه، استعلام و مقایسه قیمت | بیمه بازار",
  description: "تسک مصاحبه بیمه بازار",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>{children}</body>
    </html>
  );
}
