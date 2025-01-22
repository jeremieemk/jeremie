import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🪂",
  description: "Hey, I am Jérémie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="w-screen md:h-screen flex items-center justify-center bg-[#f9f2e6]">
        {children}
      </body>
    </html>
  );
}
