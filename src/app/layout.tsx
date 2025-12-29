import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryHelper - 최고의 티스토리 생산성 확장프로그램",
  description: "SEO 최적화부터 글자 수 카운팅까지, StoryHelper로 티스토리 블로그 생산성을 10배 향상시키세요. 169+ 활성 사용자, 5.0/5.0 평점의 무료 Chrome 확장프로그램",
  keywords: ["티스토리", "확장프로그램", "SEO", "블로그", "생산성", "티스토리 도구", "글자수 세기", "이미지 최적화"],
  authors: [{ name: "shipfriend.dev", url: "https://shipfriend.dev" }],
  openGraph: {
    title: "StoryHelper - 최고의 티스토리 생산성 확장프로그램",
    description: "SEO 최적화부터 글자 수 카운팅까지, 티스토리 블로그 생산성을 10배 향상시키세요",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryHelper - 최고의 티스토리 생산성 확장프로그램",
    description: "SEO 최적화부터 글자 수 카운팅까지, 티스토리 블로그 생산성을 10배 향상시키세요",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
