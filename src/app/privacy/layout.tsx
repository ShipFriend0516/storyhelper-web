import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Privacy Policy",
  description: "StoryHelper 확장프로그램 개인정보처리방침 - Privacy Policy for StoryHelper Chrome Extension",
  openGraph: {
    title: "개인정보처리방침 | Privacy Policy - StoryHelper",
    description: "StoryHelper 확장프로그램 개인정보처리방침",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
