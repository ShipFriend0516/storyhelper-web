import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://storyhelper.shipfriend.dev'),
  title: {
    default: "StoryHelper - 최고의 티스토리 생산성 확장프로그램",
    template: "%s | StoryHelper"
  },
  description: "SEO 최적화부터 글자 수 카운팅까지, StoryHelper로 티스토리 블로그 생산성을 10배 향상시키세요. 200+ 활성 사용자, 5.0/5.0 평점의 무료 Chrome 확장프로그램",
  keywords: ["티스토리", "확장프로그램", "SEO", "블로그", "생산성", "티스토리 도구", "글자수 세기", "이미지 최적화", "Chrome 확장", "블로그 도구"],
  authors: [{ name: "shipfriend.dev", url: "https://shipfriend.dev" }],
  creator: "shipfriend.dev",
  publisher: "shipfriend.dev",
  applicationName: "StoryHelper",
  category: "Productivity",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://storyhelper.shipfriend.dev",
    siteName: "StoryHelper",
    title: "StoryHelper - 최고의 티스토리 생산성 확장프로그램",
    description: "SEO 최적화부터 글자 수 카운팅까지, 티스토리 블로그 생산성을 10배 향상시키세요. 200+ 활성 사용자, 5.0/5.0 평점",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "StoryHelper Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryHelper - 최고의 티스토리 생산성 확장프로그램",
    description: "SEO 최적화부터 글자 수 카운팅까지, 티스토리 블로그 생산성을 10배 향상시키세요",
    creator: "@shipfriend_dev",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://storyhelper.shipfriend.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
