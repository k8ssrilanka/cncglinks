import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getCommunityConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getCommunityConfig();
  const seo = config.seo ?? {};
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
    ),
    title: seo.title ?? config.community.name,
    description: seo.description ?? config.community.description,
    openGraph: {
      title: seo.title ?? config.community.name,
      description: seo.description ?? config.community.description,
      images: seo.ogImageUrl ? [{ url: seo.ogImageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      site: seo.twitterHandle,
    },
    icons: {
      icon: config.community.faviconUrl ?? "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getCommunityConfig();
  const themeColor = config.community.themeColor ?? "#0f62fe";
  const backgroundColor = config.community.backgroundColor ?? "#ffffff";

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full"
        style={
          {
            "--theme-color": themeColor,
            "--background": backgroundColor,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
