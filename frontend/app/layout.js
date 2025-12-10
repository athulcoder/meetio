import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavigation from "@/components/MobileNavigation";

export const metadata = {
  title: "Meetio",
  description: "an open-source social network platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-backgrounds">
        {children}
        <MobileNavigation />
      </body>
    </html>
  );
}
