import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_Georgian({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWIFTSPACE",
  description: "WEBSITE DEVELOPMENT",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}   `}>{children}</body>
    </html>
  );
}
