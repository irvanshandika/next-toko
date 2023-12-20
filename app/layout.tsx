/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "May Beauty Skin",
    default: "May Beauty Skin",
  },
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="bg-[#F6D6D6]">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
