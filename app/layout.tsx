import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Street Workout Bordeaux",
  description: "Association de Street Workout à Bordeaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="./public/lettering.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="py-6 px-4 text-center">
          <h1 className="text-6xl  octin-spraypaint">
            Street Workout Bordeaux
          </h1>
        </header>
        {children}
        <Navbar />
        <footer className="py-6 px-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
          @Street Workout Bordeaux. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
