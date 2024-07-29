import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/app/providers";
import { cn } from "@venmo/ui/lib/utils";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pay Friends | Payments App | Venmo",
  description:
    "Venmo is a payment app for fast, safe, social and business payments. Pay friends and get paid easily. Join over 60 million users. Download Venmo today!",
  icons: {
    icon: "https://venmo.com/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased overflow-hidden bg-blue-50 select-none",
          inter.className
        )}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
