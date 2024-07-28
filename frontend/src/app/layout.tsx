import type { Metadata } from "next";
import "@/styles/globals.css"
import Script from "next/script";
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/home/Navbar";
import { Web3Modal } from "@/context/web3Modal";
import { Toaster } from "sonner";


const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "StarkCore",
  description: "A decentralized Insurefi application on StarkNet tailored to give secured and save insuarance participation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen w-full font-sans antialiased bg-white",
        fontSans.variable
      )}>
        <Web3Modal>
          <Navbar/>
          {children}
          <Toaster richColors position="top-right" />
        </Web3Modal>
      </body>
    </html>
  );
}
