import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "시작 가이드",
  description: "StoryHelper 확장프로그램 사용 방법을 단계별로 안내합니다.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntroduceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
