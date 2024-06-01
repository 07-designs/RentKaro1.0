import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentKaro™",
  description: "This is the renting and selling app for colleges across india",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-hidden bg-black">
      <UserProvider>
        <body className={inter.className} >
          <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </UserProvider>
    </html>
  );
}