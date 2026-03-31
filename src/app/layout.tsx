import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
import "./globals.css";

export const metadata: Metadata = {
  title: "Halo",
  description: "Halo Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}