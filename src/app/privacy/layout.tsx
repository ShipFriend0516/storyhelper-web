import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "StoryHelper 확장프로그램 개인정보처리방침 - Privacy Policy for StoryHelper Chrome Extension",
  alternates: {
    canonical: "https://storyhelper.shipfriend.dev/privacy",
  },
  openGraph: {
    title: "개인정보처리방침 | StoryHelper",
    description: "StoryHelper 확장프로그램 개인정보처리방침",
    url: "https://storyhelper.shipfriend.dev/privacy",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
