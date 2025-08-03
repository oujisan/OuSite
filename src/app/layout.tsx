import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Oujisan Dev",
  description: "Oujisan's Personal Website",
  icons: {
    icon: '/fumori.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}