import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContextProvider } from "@/context/ToastContext";
import UseSWRConfigProvider from "@/config/SWRConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insure All The Way",
  description: "Insurance With A Difference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UseSWRConfigProvider>
          <ToastContextProvider>{children}</ToastContextProvider>
        </UseSWRConfigProvider>
      </body>
    </html>
  );
}
