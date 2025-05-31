import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";


const poppins = Poppins({
  variable: "--font-poppins",
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spark Arise",
  description: "A motivational quote generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${manrope.variable} antialiased min-h-screen bg-black overflow-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
