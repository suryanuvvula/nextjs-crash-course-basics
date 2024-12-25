import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="bg-slate-900 text-white p-4 text-center">
            {/* <h1>Welcome to Next 15 crash course</h1> */}
            <Navigation />
          </header>
          {children}
          <footer className="bg-slate-900 text-white p-4 text-center">
            <p>Crash course</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
