import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import SectionHeader from "@/components/shared/layout/SectionHeader";
import CarSVG from "@/components/icons/CarSVG";
import { FormProvider } from "@/context/FormContext";
import { AddressProvider } from "@/context/AddressContext";

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
      <body className={`${vazirmatn.variable} antialiased`}>
        <FormProvider>
          <AddressProvider>
            <SectionHeader title="مشخصات بیمه نامه" icon={<CarSVG />} />
            {children}
          </AddressProvider>
        </FormProvider>
      </body>
    </html>
  );
}
