import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavigation from "@/components/MobileNavigation";
import DesktopNavigation from "@/components/DesktopNavigation";
import Navbar from "@/components/Navbar";
import ClientComponent from "@/components/ClientComponent";

export const metadata = {
  title: "Meetio",
  description: "an open-source social network platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="bg-background min-h-screen ">
        <div className="flex w-full  min-h-screen ">
          <ClientComponent>{children}</ClientComponent>
        </div>
      </body>
    </html>
  );
}
