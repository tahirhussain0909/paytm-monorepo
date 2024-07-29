import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import { cn } from "@venmo/ui/lib/utils";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paytm: Secure & Fast UPI Payments, Recharge Mobile & Pay Bills",
  description: "Send money with UPI using any bank account. Recharge mobile and pay bills.",
  icons: {
    icon: "https://paytm.com/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("antialiased", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}