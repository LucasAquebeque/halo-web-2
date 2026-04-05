import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/utils/ScrollToTop";
import { Sora } from "next/font/google";
import localFont from "next/font/local";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
       <Navbar />
       {children}
        <Footer />
      </body>
    </html>
  );
}