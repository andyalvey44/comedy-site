import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caesar = localFont({
  src: [
    { path: "../public/OPTICeasar-Light.otf", weight: "300" },
    { path: "../public/OPTICeasar-Regular.otf", weight: "400" },
  ],
  variable: "--font-caesar",
});

const knockout = localFont({
  src: "../public/Knockout HTF50-Welterweight Regular.otf",
  variable: "--font-knockout",
});

export const metadata: Metadata = {
  title: "Andy Alvey | Stand-Up Comedian",
  description:
    "Official website of Andy Alvey — stand-up comedian. Tour dates, videos, and more.",
  openGraph: {
    title: "Andy Alvey | Stand-Up Comedian",
    description: "Tour dates, videos, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${caesar.variable} ${knockout.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
