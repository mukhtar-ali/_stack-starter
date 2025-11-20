import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stack Starter",
  description: "Next.js starter with Tailwind, TanStack Query, Storybook, and Jest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900`}>
        <QueryProvider>
          <div className="min-h-screen">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
