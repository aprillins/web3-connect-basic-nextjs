// https://medium.com/@kirankumar_gonti/web3-wallets-connection-using-walletconnect-in-next-js-ee9eb97d73c4

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import WagmiProviderComp from "@/lib/wagmi-provider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WagmiProviderComp initialState={initialState}>
          {children}
        </WagmiProviderComp>
      </body>
    </html>
  );
}