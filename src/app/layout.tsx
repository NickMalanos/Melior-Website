import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Melior | AI Automation Consulting",
  description:
    "Custom AI tools that automate your operations, replace your spreadsheets, and give you real-time visibility."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: "typeof window!=='undefined'&&(window.history.scrollRestoration='manual',window.scrollTo(0,0));",
          }}
        />
        {children}
      </body>
    </html>
  );
}
