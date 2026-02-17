import type { Metadata } from "next";
import { Iceland, Inter, Red_Hat_Text } from "next/font/google";

import "./globals.css";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Meridian : The Future of AI",
  description: "Meridian is a platform for the future of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${redHatText.variable} ${inter.variable} ${iceland.variable} bg-background text-foreground dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
