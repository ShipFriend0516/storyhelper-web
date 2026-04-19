import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "피드백",
  description: "StoryHelper 사용 경험을 알려주세요.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
