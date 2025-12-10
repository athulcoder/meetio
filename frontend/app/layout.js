import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavigation from "@/components/MobileNavigation";
import DesktopNavigation from "@/components/DesktopNavigation";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Meetio",
  description: "an open-source social network platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen">
        <div className="flex w-full gap-40">
          <DesktopNavigation />

          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
