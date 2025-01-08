import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jérémie",
  description: "Salut, je suis Jérémie.",
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
