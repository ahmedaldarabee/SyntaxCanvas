import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Syntax Canvas",
  description: "SyntaxCanvas | UI/UX Discover unforgettable travel experiences, plan your next adventure, and book stunning destinations with WanderTrail. Your journey starts here!",
};

export default function RootLayout({children}:Readonly<{children: React.ReactNode}>){
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
